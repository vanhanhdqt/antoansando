import { useEffect } from 'react';
import { useTheme, useQuiz } from './store';
import Start from './screens/Start';
import Quiz from './screens/Quiz';
import Result from './screens/Result';
import Review from './screens/Review';
import History from './screens/History';
import Analysis from './screens/Analysis';
import Master from './screens/Master';
import Flashcard from './screens/Flashcard';
import AllReview from './screens/AllReview';

export default function App() {
  const { theme, toggle } = useTheme();
  const view = useQuiz((s) => s.view);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div
      style={{
        background: 'radial-gradient(800px 400px at 20% -10%, var(--accent-soft), transparent 70%), var(--bg)',
        minHeight: '100vh',
        padding: '24px 16px',
      }}
    >
      <button
        id="theme-toggle-button"
        onClick={toggle}
        title="Đổi sáng/tối"
        aria-label="Đổi giao diện sáng tối"
        style={{
          position: 'fixed',
          top: 14,
          right: 14,
          zIndex: 50,
          width: 44,
          height: 44,
          borderRadius: '50%',
          border: '2px solid var(--border)',
          background: 'var(--card)',
          cursor: 'pointer',
          fontSize: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      <div style={{ maxWidth: 840, margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: 32 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              fontWeight: 600,
              marginBottom: 8,
            }}
          >
            ÔN TẬP KIẾN THỨC
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 8px' }}>An Toàn Sân Đỗ</h1>
          <p style={{ color: 'var(--muted)', margin: 0 }}>72 câu hỏi · Flashcard · Mẹo nhớ 3 phút</p>
        </header>

        {view === 'start' && <Start />}
        {view === 'quiz' && <Quiz />}
        {view === 'result' && <Result />}
        {view === 'review' && <Review />}
        {view === 'history' && <History />}
        {view === 'analysis' && <Analysis />}
        {view === 'master' && <Master />}
        {view === 'flash' && <Flashcard />}
        {view === 'allReview' && <AllReview />}
      </div>
    </div>
  );
}

