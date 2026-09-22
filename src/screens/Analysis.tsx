import { useQuiz } from '../store';
import { analysisData } from '../data';

export default function Analysis() {
  const setView = useQuiz((s) => s.setView);

  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>
          🧠 Phân tích & Mẹo nhớ 10 phút
        </h2>
        <button
          id="btn-analysis-back"
          onClick={() => setView('start')}
          className="btn-secondary"
          style={{ padding: '8px 16px', borderRadius: 10, fontSize: 14 }}
        >
          Quay lại
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {analysisData.map((g, idx) => (
          <div key={idx} className="card" style={{ padding: 20, borderLeft: `4px solid ${g.color}` }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 12,
                flexWrap: 'wrap',
                gap: 8,
              }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0 }}>
                {g.icon} {g.title}
              </h3>
              <span
                style={{
                  background: `${g.color}20`,
                  color: g.color,
                  padding: '4px 10px',
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {g.count} câu
              </span>
            </div>
            <ul style={{ margin: '0 0 12px', paddingLeft: 20, fontSize: 14, lineHeight: 1.7 }}>
              {g.rules.map((r, i) => (
                <li key={i} style={{ marginBottom: 6 }}>
                  {r}
                </li>
              ))}
            </ul>
            <div
              style={{
                background: 'rgba(41,122,46,.08)',
                borderLeft: '3px solid var(--accent)',
                padding: '10px 14px',
                borderRadius: 8,
                fontSize: 14,
              }}
            >
              <strong style={{ color: 'var(--accent)' }}>💡 Mẹo nhớ:</strong> <em>{g.tip}</em>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
