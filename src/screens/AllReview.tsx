import { useState } from 'react';
import { useQuiz } from '../store';
import { allQuestions } from '../data';

export default function AllReview() {
  const setView = useQuiz((s) => s.setView);
  const [searchTerm, setSearchTerm] = useState('');
  const labels = ['A', 'B', 'C', 'D', 'E'];

  const filteredQuestions = allQuestions.filter(
    (q) =>
      q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.o.some((opt) => opt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="fade-in">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 16,
          flexWrap: 'wrap',
          gap: 8,
        }}
      >
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>
          📖 Ôn tập toàn bộ ({allQuestions.length} câu)
        </h2>
        <button
          id="btn-all-review-back"
          onClick={() => setView('start')}
          className="btn-secondary"
          style={{ padding: '8px 16px', borderRadius: 10, fontSize: 14 }}
        >
          Quay lại
        </button>
      </div>

      <div style={{ marginBottom: 20 }}>
        <input
          id="input-search-questions"
          type="text"
          placeholder="🔍 Tìm kiếm nội dung câu hỏi hoặc đáp án..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: 12,
            border: '2px solid var(--border)',
            background: 'var(--card)',
            color: 'var(--text)',
            outline: 'none',
            fontSize: 14,
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {filteredQuestions.map((q, idx) => {
          const originalIndex = allQuestions.indexOf(q);
          return (
            <div key={idx} className="card" style={{ padding: 20 }}>
              <div style={{ fontWeight: 600, marginBottom: 12, lineHeight: 1.5 }}>
                <span style={{ color: 'var(--accent2)' }}>Câu {originalIndex + 1}:</span> {q.q}
              </div>
              {q.o.map((opt, i) => {
                const ok = i === q.a;
                return (
                  <div
                    key={i}
                    style={{
                      padding: '8px 12px',
                      borderRadius: 6,
                      marginTop: 4,
                      background: ok ? 'rgba(13,150,105,.1)' : 'transparent',
                      borderLeft: ok ? '3px solid #0d9669' : 'none',
                      color: ok ? 'var(--text)' : 'var(--muted)',
                    }}
                  >
                    <span style={{ fontWeight: 500 }}>{labels[i] || `${i + 1}`}.</span> {opt}
                    {ok && <span style={{ color: '#0d9669', fontWeight: 600 }}> ✓</span>}
                  </div>
                );
              })}
            </div>
          );
        })}
        {filteredQuestions.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--muted)', padding: 24 }}>
            Không tìm thấy câu hỏi phù hợp với từ khóa "{searchTerm}".
          </p>
        )}
      </div>
    </div>
  );
}
