import { useState, useMemo } from 'react';
import { useQuiz } from '../store';
import { allQuestions } from '../data';

export default function Flashcard() {
  const setView = useQuiz((s) => s.setView);
  const [list, setList] = useState(() => [...allQuestions]);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const q = list[idx] || allQuestions[0];
  const labels = useMemo(() => ['A', 'B', 'C', 'D', 'E'], []);

  const goNext = () => {
    setIdx((i) => (i + 1) % list.length);
    setFlipped(false);
  };
  const goPrev = () => {
    setIdx((i) => (i - 1 + list.length) % list.length);
    setFlipped(false);
  };
  const shuffle = () => {
    setList((l) => [...l].sort(() => Math.random() - 0.5));
    setIdx(0);
    setFlipped(false);
  };

  return (
    <div className="fade-in">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 24,
          flexWrap: 'wrap',
          gap: 8,
          alignItems: 'center',
        }}
      >
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>🃏 Flashcard 3D</h2>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span
            style={{
              padding: '8px 14px',
              background: 'var(--accent-soft)',
              color: 'var(--accent)',
              borderRadius: 10,
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            {idx + 1} / {list.length}
          </span>
          <button
            id="btn-flashcard-back"
            onClick={() => setView('start')}
            className="btn-secondary"
            style={{ padding: '8px 16px', borderRadius: 10, fontSize: 14 }}
          >
            Quay lại
          </button>
        </div>
      </div>

      <div className="flash-wrap">
        <div
          id="flashcard-3d-card"
          className={`flash-card ${flipped ? 'flipped' : ''}`}
          onClick={() => setFlipped((f) => !f)}
        >
          <div className="flash-face">
            <div
              style={{
                fontSize: 11,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              Câu hỏi #{idx + 1}
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 600, lineHeight: 1.5 }}>{q.q}</div>
            <div
              style={{
                position: 'absolute',
                bottom: 14,
                left: 0,
                right: 0,
                textAlign: 'center',
                fontSize: 12,
                color: 'var(--muted)',
              }}
            >
              Nhấn thẻ để lật xem đáp án ↻
            </div>
          </div>
          <div className="flash-face flash-back">
            <div
              style={{
                fontSize: 11,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                fontWeight: 700,
                marginBottom: 12,
              }}
            >
              Đáp án đúng (Câu #{idx + 1})
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, overflowY: 'auto', maxHeight: 250 }}>
              {q.o.map((opt, i) => {
                const ok = i === q.a;
                return (
                  <div
                    key={i}
                    style={{
                      padding: '8px 12px',
                      borderRadius: 8,
                      fontSize: 14,
                      border: `1px solid ${ok ? '#0d9669' : 'var(--border)'}`,
                      background: ok ? 'rgba(13,150,105,.15)' : 'var(--card)',
                      color: ok ? '#065f46' : 'var(--muted)',
                      fontWeight: ok ? 600 : 400,
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{labels[i] || `${i + 1}`}.</span> {opt}
                    {ok && ' ✓'}
                  </div>
                );
              })}
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: 14,
                left: 0,
                right: 0,
                textAlign: 'center',
                fontSize: 12,
                color: 'var(--muted)',
              }}
            >
              ↻ Nhấn thẻ để quay lại câu hỏi
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
        <button
          id="btn-flashcard-prev"
          onClick={goPrev}
          className="btn-secondary"
          style={{ padding: '10px 20px', borderRadius: 12 }}
        >
          ← Trước
        </button>
        <button
          id="btn-flashcard-shuffle"
          onClick={shuffle}
          className="btn-secondary"
          style={{ padding: '10px 20px', borderRadius: 12 }}
        >
          🔀 Xáo trộn
        </button>
        <button
          id="btn-flashcard-next"
          onClick={goNext}
          className="btn-primary"
          style={{ padding: '10px 20px', borderRadius: 12 }}
        >
          Tiếp →
        </button>
      </div>
    </div>
  );
}
