import { useQuiz } from '../store';
import { allQuestions } from '../data';

const NUM_OPTIONS = [20, 30, 40, 50, allQuestions.length];

export default function Start() {
  const { mode, setMode, numQuestions, setNumQuestions, start, setView } = useQuiz();

  return (
    <div id="start-screen-card" className="card fade-in" style={{ padding: 32, textAlign: 'center' }}>
      <div
        style={{
          width: 80,
          height: 80,
          margin: '0 auto 24px',
          background: 'var(--accent-soft)',
          borderRadius: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </div>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 12px' }}>
        Sẵn sàng kiểm tra kiến thức?
      </h2>
      <p style={{ color: 'var(--muted)', marginBottom: 24 }}>
        Tổng cộng <strong>{allQuestions.length}</strong> câu hỏi trắc nghiệm
      </p>

      {/* Mode */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginBottom: 20 }}>
        {(['quiz', 'learn'] as const).map((m) => (
          <label
            key={m}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 16px',
              borderRadius: 10,
              cursor: 'pointer',
              background: mode === m ? 'var(--accent-soft)' : 'var(--card)',
              border: `1px solid ${mode === m ? 'var(--accent)' : 'var(--border)'}`,
            }}
          >
            <input
              type="radio"
              name="quiz-mode"
              checked={mode === m}
              onChange={() => setMode(m)}
            />
            <span style={{ fontWeight: 500 }}>{m === 'quiz' ? 'Chế độ thi' : 'Chế độ học'}</span>
          </label>
        ))}
      </div>

      <p style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 24 }}>
        {mode === 'quiz'
          ? 'Chỉ hiện kết quả sau khi hoàn thành tất cả các câu'
          : 'Hiện đáp án đúng ngay sau khi bạn chọn'}
      </p>

      {/* Num questions */}
      <div style={{ marginBottom: 24 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--muted)',
            marginBottom: 10,
            textTransform: 'uppercase',
          }}
        >
          Số câu hỏi
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          {NUM_OPTIONS.map((n) => (
            <label
              key={n}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 16px',
                borderRadius: 10,
                cursor: 'pointer',
                background: numQuestions === n ? 'var(--accent-soft)' : 'var(--card)',
                border: `2px solid ${numQuestions === n ? 'var(--accent)' : 'var(--border)'}`,
              }}
            >
              <input
                type="radio"
                name="num-questions"
                checked={numQuestions === n}
                onChange={() => setNumQuestions(n)}
              />
              <span>{n === allQuestions.length ? `Tất cả (${n})` : `${n} câu`}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        id="btn-start-quiz"
        onClick={start}
        className="btn-primary"
        style={{ padding: '12px 32px', borderRadius: 12, fontSize: '1.1rem' }}
      >
        Bắt đầu
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginTop: 24 }}>
        <button id="btn-open-flashcard" onClick={() => setView('flash')} className="btn-secondary" style={{ padding: '10px 20px', borderRadius: 12 }}>
          🃏 Flashcard 3D
        </button>
        <button
          id="btn-open-master"
          onClick={() => setView('master')}
          className="btn-secondary"
          style={{
            padding: '10px 20px',
            borderRadius: 12,
            background: 'linear-gradient(135deg,#dc2626,#d97706)',
            color: '#fff',
            border: 'none',
            fontWeight: 700,
          }}
        >
          ⚡ Tuyệt chiêu 3 phút
        </button>
        <button id="btn-open-analysis" onClick={() => setView('analysis')} className="btn-secondary" style={{ padding: '10px 20px', borderRadius: 12 }}>
          🧠 Mẹo nhớ 10 phút
        </button>
        <button id="btn-open-all-review" onClick={() => setView('allReview')} className="btn-secondary" style={{ padding: '10px 20px', borderRadius: 12 }}>
          📖 Ôn tập toàn bộ
        </button>
        <button id="btn-open-history" onClick={() => setView('history')} className="btn-secondary" style={{ padding: '10px 20px', borderRadius: 12 }}>
          📊 Lịch sử
        </button>
      </div>
    </div>
  );
}
