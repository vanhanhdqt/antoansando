import { useQuiz } from '../store';

function fmtTime(s: number) {
  const m = Math.floor(s / 60);
  const ss = s % 60;
  return `${String(m).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
}

export default function Quiz() {
  const {
    questions,
    current,
    score,
    answers,
    elapsed,
    timeLimit,
    mode,
    selectAnswer,
    next,
    prev,
    jumpTo,
  } = useQuiz();

  if (!questions.length) return null;
  const q = questions[current];
  const labels = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="fade-in" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Progress */}
      <div id="quiz-progress-card" className="card" style={{ padding: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
          <span style={{ color: 'var(--muted)', fontSize: 14 }}>
            Câu <strong>{current + 1}</strong> / {questions.length}
          </span>
          <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: 14 }}>Điểm: {score}</span>
        </div>
        <div style={{ height: 8, background: 'rgba(128,128,128,.1)', borderRadius: 999, overflow: 'hidden' }}>
          <div
            style={{
              height: '100%',
              width: `${((current + 1) / questions.length) * 100}%`,
              background: 'linear-gradient(90deg,var(--accent),var(--accent2))',
              borderRadius: 999,
              transition: 'width .3s',
            }}
          />
        </div>
      </div>

      {/* Grid + timer */}
      <div id="quiz-grid-card" className="card" style={{ padding: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, alignItems: 'center' }}>
          <span style={{ color: 'var(--muted)', fontSize: 13, fontWeight: 600 }}>Bảng câu hỏi</span>
          <span style={{ color: 'var(--accent2)', fontWeight: 700, fontSize: 14 }}>
            ⏱ {fmtTime(elapsed)} / {fmtTime(Math.max(0, timeLimit - elapsed))}
          </span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {questions.map((_, i) => {
            const cls = ['grid-btn'];
            if (i === current) cls.push('active');
            else if (answers[i] !== null && answers[i] !== -1) cls.push('answered');
            return (
              <button
                key={i}
                id={`grid-question-btn-${i}`}
                className={cls.join(' ')}
                onClick={() => jumpTo(i)}
              >
                {i + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question */}
      <div id="quiz-active-question-card" className="card fade-in" style={{ padding: 24 }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
          <div
            style={{
              width: 36,
              height: 36,
              background: 'var(--accent-soft)',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              color: 'var(--accent)',
              flexShrink: 0,
            }}
          >
            Q{current + 1}
          </div>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 600, margin: 0, lineHeight: 1.5 }}>{q.q}</h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {q.o.map((opt, i) => {
            const answered = answers[current] !== null && answers[current] !== -1;
            const cls = ['option-btn'];
            if (answered && i === answers[current]) cls.push('selected');
            if (mode === 'learn' && answered) {
              if (i === q.a) cls.push('correct');
              else if (i === answers[current]) cls.push('incorrect');
            }
            return (
              <button
                key={i}
                id={`option-btn-${current}-${i}`}
                className={cls.join(' ')}
                onClick={() => selectAnswer(i)}
                disabled={answered}
              >
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: 'var(--accent-soft)',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    flexShrink: 0,
                  }}
                >
                  {labels[i] || `${i + 1}`}
                </span>
                <span style={{ flex: 1 }}>{opt}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Nav */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          id="btn-quiz-prev"
          onClick={prev}
          disabled={current === 0}
          className="btn-secondary"
          style={{ padding: '10px 20px', borderRadius: 12 }}
        >
          Câu trước
        </button>
        <button
          id="btn-quiz-next"
          onClick={next}
          disabled={answers[current] === null || answers[current] === -1}
          className="btn-primary"
          style={{ padding: '10px 20px', borderRadius: 12 }}
        >
          {current === questions.length - 1 ? 'Hoàn thành' : 'Câu sau'}
        </button>
      </div>
    </div>
  );
}
