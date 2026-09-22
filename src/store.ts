import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { allQuestions, Question } from './data';

export type AppView =
  | 'start'
  | 'quiz'
  | 'result'
  | 'review'
  | 'history'
  | 'analysis'
  | 'master'
  | 'flash'
  | 'allReview';

export type QuizMode = 'quiz' | 'learn';

export interface HistoryRecord {
  date: string;
  total: number;
  correct: number;
  wrong: number;
  percent: number;
  duration: number;
  mode: QuizMode;
}

export interface WrongItem {
  index: number;
  userAns: number | null;
}

interface ThemeState {
  theme: 'light' | 'dark';
  toggle: () => void;
}

export const useTheme = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      toggle: () => set((s) => ({ theme: s.theme === 'light' ? 'dark' : 'light' })),
    }),
    { name: 'atsd-theme' }
  )
);

const HISTORY_KEY = 'atsd-history-v1';

interface QuizState {
  view: AppView;
  setView: (v: AppView) => void;
  mode: QuizMode;
  setMode: (m: QuizMode) => void;
  numQuestions: number;
  setNumQuestions: (n: number) => void;

  questions: Question[];
  current: number;
  score: number;
  answers: (number | null)[];
  elapsed: number;
  timeLimit: number;
  timerId: ReturnType<typeof setInterval> | null;
  wrongList: WrongItem[];

  start: () => void;
  _startTimer: () => void;
  _stopTimer: () => void;
  selectAnswer: (idx: number) => void;
  next: () => void;
  prev: () => void;
  jumpTo: (i: number) => void;
  finish: () => void;
  _saveHistory: () => void;
  getHistory: () => HistoryRecord[];
  clearHistory: () => void;
  reset: () => void;
}

export const useQuiz = create<QuizState>((set, get) => ({
  view: 'start',
  setView: (v) => set({ view: v }),

  mode: 'quiz',
  setMode: (m) => set({ mode: m }),
  numQuestions: allQuestions.length,
  setNumQuestions: (n) => set({ numQuestions: n }),

  questions: [],
  current: 0,
  score: 0,
  answers: [],
  elapsed: 0,
  timeLimit: 0,
  timerId: null,
  wrongList: [],

  start: () => {
    const { numQuestions, mode } = get();
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, numQuestions);
    const timeLimit = shuffled.length * 45;
    set({
      questions: shuffled,
      current: 0,
      score: 0,
      answers: Array(shuffled.length).fill(null),
      elapsed: 0,
      timeLimit,
      mode,
      view: 'quiz',
    });
    get()._startTimer();
  },

  _startTimer: () => {
    const { timerId } = get();
    if (timerId) clearInterval(timerId);
    const id = setInterval(() => {
      const { elapsed, timeLimit } = get();
      const next = elapsed + 1;
      if (next >= timeLimit) {
        get()._stopTimer();
        // Auto-submit
        const answers = [...get().answers];
        answers.forEach((a, i) => {
          if (a === null) answers[i] = -1;
        });
        set({ answers, elapsed: next });
        setTimeout(() => get().finish(), 0);
        return;
      }
      set({ elapsed: next });
    }, 1000);
    set({ timerId: id });
  },

  _stopTimer: () => {
    const { timerId } = get();
    if (timerId) clearInterval(timerId);
    set({ timerId: null });
  },

  selectAnswer: (idx: number) => {
    const { answers, current, questions, score } = get();
    if (answers[current] !== null && answers[current] !== -1) return;
    const next = [...answers];
    next[current] = idx;
    const isCorrect = idx === questions[current].a;
    set({
      answers: next,
      score: isCorrect ? score + 1 : score,
    });
  },

  next: () => {
    const { current, questions, answers } = get();
    if (current >= questions.length - 1) return get().finish();
    if (answers[current] === null || answers[current] === -1) return;
    set({ current: current + 1 });
  },

  prev: () => {
    const { current } = get();
    if (current > 0) set({ current: current - 1 });
  },

  jumpTo: (i: number) => set({ current: i }),

  finish: () => {
    get()._stopTimer();
    const { questions, answers } = get();
    const wrongList: WrongItem[] = [];
    answers.forEach((a, i) => {
      if (a !== questions[i].a) wrongList.push({ index: i, userAns: a });
    });
    set({ wrongList, view: 'result' });
    get()._saveHistory();
  },

  _saveHistory: () => {
    try {
      const { questions, score, elapsed, mode } = get();
      const total = questions.length;
      const percent = Math.round((score / total) * 100);
      const record: HistoryRecord = {
        date: new Date().toISOString(),
        total,
        correct: score,
        wrong: total - score,
        percent,
        duration: elapsed,
        mode,
      };
      const h: HistoryRecord[] = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
      h.unshift(record);
      localStorage.setItem(HISTORY_KEY, JSON.stringify(h.slice(0, 50)));
    } catch (e) {
      console.warn(e);
    }
  },

  getHistory: () => {
    try {
      return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    } catch (e) {
      return [];
    }
  },

  clearHistory: () => {
    localStorage.removeItem(HISTORY_KEY);
  },

  reset: () => {
    get()._stopTimer();
    set({
      view: 'start',
      questions: [],
      current: 0,
      score: 0,
      answers: [],
      elapsed: 0,
      wrongList: [],
    });
  },
}));
