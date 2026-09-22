import { useQuiz } from '../store';
import { masterData } from '../data';

export default function Master() {
  const setView = useQuiz((s) => s.setView);

  return (
    <div className="fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>
          ⚡ Tuyệt chiêu nhớ tất trong 3 phút
        </h2>
        <button
          id="btn-master-back"
          onClick={() => setView('start')}
          className="btn-secondary"
          style={{ padding: '8px 16px', borderRadius: 10, fontSize: 14 }}
        >
          Quay lại
        </button>
      </div>

      <div
        className="card"
        style={{
          padding: 24,
          marginBottom: 16,
          background: 'linear-gradient(135deg,rgba(220,38,38,.08),rgba(217,119,6,.08))',
          border: '2px dashed var(--accent2)',
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            color: 'var(--accent2)',
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          🎵 THẦN CHÚ TỔNG
        </div>
        <div style={{ fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.6 }}>{masterData.mantra}</div>
        <div style={{ marginTop: 10, fontSize: 13, color: 'var(--muted)', fontStyle: 'italic' }}>
          Đọc to 3 lần – nhớ cả 6 câu vạch kẻ
        </div>
      </div>

      {masterData.phases.map((p, idx) => (
        <div key={idx} className="card" style={{ padding: 20, marginBottom: 16, borderLeft: `4px solid ${p.color}` }}>
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
            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: p.color }}>{p.title}</h3>
            <span
              style={{
                background: `${p.color}15`,
                color: p.color,
                padding: '4px 10px',
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              {p.time}
            </span>
          </div>
          {p.content.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: 12,
                padding: '8px 0',
                borderBottom: i === p.content.length - 1 ? 'none' : '1px dashed var(--border)',
              }}
            >
              <div style={{ minWidth: 110, fontWeight: 700, color: p.color, fontSize: 14 }}>{item.k}</div>
              <div style={{ flex: 1, fontSize: 14 }}>{item.v}</div>
            </div>
          ))}
        </div>
      ))}

      <div
        className="card"
        style={{
          padding: 20,
          background: 'rgba(41,122,46,.08)',
          borderLeft: '4px solid var(--accent)',
        }}
      >
        <div style={{ fontWeight: 700, color: 'var(--accent)', marginBottom: 8 }}>
          ✅ Sau 3 phút bạn đã nắm 72 câu!
        </div>
        <div style={{ fontSize: 14 }}>
          6 vạch kẻ · 4 cầu hành khách · 5 động cơ · 6 nhiên liệu · 7 FOD · 9 định nghĩa · 13 di chuyển · 4 khẩn cấp
        </div>
      </div>
    </div>
  );
}
