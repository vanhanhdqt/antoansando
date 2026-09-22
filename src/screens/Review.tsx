import { useQuiz } from '../store';

export default function Review() {
  const { questions, wrongList, reset, setView } = useQuiz();
  const labels = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>
          Xem lại các câu sai ({wrongList.length})
        </h2>
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            id="btn-review-to-result"
            onClick={() => setView('result')}
            className="btn-secondary"
            style={{ padding: '8px 16px', borderRadius: 10, fontSize: 14 }}
          >
            Kết quả
          </button>
          <button
            id="btn-review-back-start"
            onClick={reset}
            className="btn-secondary"
            style={{ padding: '8px 16px', borderRadius: 10, fontSize: 14 }}
          >
            Về trang chủ
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {wrongList.map((item) => {
          const q = questions[item.index];
          if (!q) return null;
          return (
            <div key={item.index} className="card" style={{ padding: 20 }}>
              <div style={{ fontWeight: 600, marginBottom: 12, lineHeight: 1.5 }}>
                <span style={{ color: 'var(--accent2)' }}>Câu {item.index + 1}:</span> {q.q}
              </div>
              {q.o.map((opt, i) => {
                let style: React.CSSProperties = {
                  padding: '8px 12px',
                  borderRadius: 6,
                  marginTop: 4,
                  color: 'var(--muted)',
                };
                let marker: React.ReactNode = null;
                if (i === q.a) {
                  style = {
                    ...style,
                    background: 'rgba(13,150,105,.1)',
                    borderLeft: '3px solid #0d9669',
                    color: 'var(--text)',
                  };
                  marker = <span style={{ color: '#0d9669', fontWeight: 600 }}> ✓ Đúng</span>;
                } else if (i === item.userAns) {
                  style = {
                    ...style,
                    background: 'rgba(220,38,38,.08)',
                    borderLeft: '3px solid #dc2626',
                    color: 'var(--text)',
                  };
                  marker = <span style={{ color: '#dc2626', fontWeight: 600 }}> ✗ Bạn chọn</span>;
                }
                return (
                  <div key={i} style={style}>
                    <span style={{ fontWeight: 500 }}>{labels[i] || `${i + 1}`}.</span> {opt}
                    {marker}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
