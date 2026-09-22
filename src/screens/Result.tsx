import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useQuiz } from '../store';

export default function Result() {
  const { questions, score, elapsed, wrongList, reset, setView } = useQuiz();
  const total = questions.length || 1;
  const wrong = total - score;
  const percent = Math.round((score / total) * 100);

  useEffect(() => {
    if (percent > 80) {
      // Direct center burst
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
      });

      // Lateral celebratory cannon stream
      const duration = 2500;
      const animationEnd = Date.now() + duration;
      const colors = ['#297a2e', '#d97706', '#0d9669', '#4ade80', '#fbbf24'];

      let animationFrameId: number;

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.7 },
          colors,
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.7 },
          colors,
        });

        if (Date.now() < animationEnd) {
          animationFrameId = requestAnimationFrame(frame);
        }
      };

      frame();

      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }
  }, [percent]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  let title: string;
  let subtitle: string;
  let bg: string;
  let stroke: string;

  if (percent >= 90) {
    bg = 'rgba(13,150,105,.15)';
    stroke = '#0d9669';
    title = 'Xuất sắc!';
    subtitle = 'Bạn nắm vững kiến thức An Toàn Sân Đỗ';
  } else if (percent >= 70) {
    bg = 'var(--accent-soft)';
    stroke = 'var(--accent)';
    title = 'Tốt!';
    subtitle = 'Ôn thêm một chút nữa sẽ hoàn hảo';
  } else if (percent >= 50) {
    bg = 'var(--accent2-soft)';
    stroke = 'var(--accent2)';
    title = 'Cần cố gắng thêm';
    subtitle = 'Xem lại các câu sai và ôn tập';
  } else {
    bg = 'rgba(220,38,38,.12)';
    stroke = '#dc2626';
    title = 'Cần ôn tập lại';
    subtitle = 'Học lại kiến thức cơ bản';
  }

  const m = Math.floor(elapsed / 60);
  const s = elapsed % 60;

  return (
    <div id="result-screen-card" className="card fade-in" style={{ padding: 32, textAlign: 'center' }}>
      <div
        style={{
          width: 100,
          height: 100,
          margin: '0 auto 24px',
          background: bg,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {percent >= 50 ? (
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        ) : (
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M15 9l-6 6M9 9l6 6" />
          </svg>
        )}
      </div>

      <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 8px' }}>{title}</h2>
      <p style={{ color: 'var(--muted)', marginBottom: 24 }}>{subtitle}</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
          marginBottom: 24,
          maxWidth: 400,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <div style={{ background: 'var(--accent-soft)', padding: 16, borderRadius: 12 }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent)' }}>{score}</div>
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>Đúng</div>
        </div>
        <div style={{ background: 'rgba(220,38,38,.1)', padding: 16, borderRadius: 12 }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: '#dc2626' }}>{wrong}</div>
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>Sai</div>
        </div>
        <div style={{ background: 'var(--accent2-soft)', padding: 16, borderRadius: 12 }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent2)' }}>{percent}%</div>
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>Tỷ lệ</div>
        </div>
      </div>

      <div style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 20 }}>
        ⏱ {m} phút {String(s).padStart(2, '0')} giây
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
        {percent > 80 && (
          <button
            id="btn-retrigger-confetti"
            onClick={triggerConfetti}
            className="btn-secondary"
            style={{
              padding: '10px 24px',
              borderRadius: 12,
              borderColor: 'var(--accent2)',
              color: 'var(--accent2)',
              fontWeight: 600,
            }}
          >
            🎉 Bắn pháo hoa
          </button>
        )}
        {wrongList.length > 0 && (
          <button
            id="btn-view-wrong-answers"
            onClick={() => setView('review')}
            className="btn-secondary"
            style={{ padding: '10px 24px', borderRadius: 12 }}
          >
            Xem lại câu sai ({wrongList.length})
          </button>
        )}
        <button
          id="btn-restart-quiz"
          onClick={reset}
          className="btn-primary"
          style={{ padding: '10px 24px', borderRadius: 12 }}
        >
          Làm lại
        </button>
      </div>
    </div>
  );
}
