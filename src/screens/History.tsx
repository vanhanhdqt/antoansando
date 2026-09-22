import { useState } from 'react';
import { useQuiz } from '../store';

export default function History() {
  const { getHistory, clearHistory, setView } = useQuiz();
  const [list, setList] = useState(() => getHistory());

  const handleClear = () => {
    if (!window.confirm('Xóa toàn bộ lịch sử?')) return;
    clearHistory();
    setList([]);
  };

  return (
    <div id="history-screen-card" className="card fade-in" style={{ padding: 24 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 8,
          marginBottom: 24,
          alignItems: 'center',
        }}
      >
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>📊 Lịch sử làm bài</h2>
        <div style={{ display: 'flex', gap: 8 }}>
          {list.length > 0 && (
            <button
              id="btn-clear-history"
              onClick={handleClear}
              className="btn-secondary"
              style={{ padding: '8px 16px', borderRadius: 10, fontSize: 14 }}
            >
              Xóa lịch sử
            </button>
          )}
          <button
            id="btn-history-back"
            onClick={() => setView('start')}
            className="btn-secondary"
            style={{ padding: '8px 16px', borderRadius: 10, fontSize: 14 }}
          >
            Quay lại
          </button>
        </div>
      </div>

      {list.length === 0 ? (
        <p style={{ color: 'var(--muted)', textAlign: 'center', padding: 24 }}>
          Chưa có lịch sử làm bài. Hãy làm bài thi hoặc ôn luyện ngay!
        </p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {list.map((h, i) => {
            const d = new Date(h.date);
            const dateStr = d.toLocaleString('vi-VN');
            const m = Math.floor(h.duration / 60);
            const s = h.duration % 60;
            const color =
              h.percent >= 90
                ? '#0d9669'
                : h.percent >= 70
                ? 'var(--accent)'
                : h.percent >= 50
                ? 'var(--accent2)'
                : '#dc2626';

            return (
              <div
                key={i}
                className="card"
                style={{
                  padding: 16,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderLeft: `4px solid ${color}`,
                }}
              >
                <div>
                  <div style={{ fontWeight: 600 }}>Lần {list.length - i} — {dateStr}</div>
                  <div style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>
                    {h.total} câu · Đúng {h.correct} · Sai {h.wrong} · ⏱ {m}p
                    {String(s).padStart(2, '0')}s · {h.mode === 'learn' ? 'Chế độ học' : 'Chế độ thi'}
                  </div>
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color }}>{h.percent}%</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
