import { useState } from 'react';
import { ChevronRight, ChevronLeft, BookOpen, CheckCircle, PlayCircle, Code2, HelpCircle } from 'lucide-react';
import { topics, type Lesson } from '../data/topics';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CoursesPageProps {
  activeTopic: string;
  setActiveTopic: (id: string) => void;
  completedLessons: string[];
  setCompletedLessons: (lessons: string[]) => void;
  setProgress: (p: number) => void;
}

export default function CoursesPage({
  activeTopic,
  setActiveTopic,
  completedLessons,
  setCompletedLessons,
  setProgress,
}: CoursesPageProps) {
  const [activeLesson, setActiveLesson] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'content' | 'code' | 'quiz'>('content');
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const currentTopic = topics.find((t) => t.id === activeTopic) || topics[0];
  const currentLesson: Lesson | undefined = currentTopic.lessons.find((l) => l.id === activeLesson) ||
    currentTopic.lessons[0];

  const markComplete = () => {
    if (!completedLessons.includes(currentLesson.id)) {
      const updated = [...completedLessons, currentLesson.id];
      setCompletedLessons(updated);
      const totalLessons = topics.reduce((acc, t) => acc + t.lessons.length, 0);
      setProgress(Math.round((updated.length / totalLessons) * 100));
    }
  };

  const handleQuizAnswer = (qIdx: number, optIdx: number) => {
    if (!quizSubmitted) {
      setQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
    }
  };

  const submitQuiz = () => {
    setQuizSubmitted(true);
    markComplete();
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const goNextLesson = () => {
    const idx = currentTopic.lessons.findIndex((l) => l.id === currentLesson.id);
    if (idx < currentTopic.lessons.length - 1) {
      setActiveLesson(currentTopic.lessons[idx + 1].id);
      setActiveTab('content');
      resetQuiz();
    }
  };

  const goPrevLesson = () => {
    const idx = currentTopic.lessons.findIndex((l) => l.id === currentLesson.id);
    if (idx > 0) {
      setActiveLesson(currentTopic.lessons[idx - 1].id);
      setActiveTab('content');
      resetQuiz();
    }
  };

  return (
    <div className="flex h-screen pt-16 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`sidebar-gradient flex-shrink-0 overflow-y-auto transition-all duration-300 ${sidebarOpen ? 'w-72' : 'w-0 overflow-hidden'}`}
      >
        <div className="p-4 min-w-72">
          <div className="mb-4">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: '#6366f1' }}>Mavzular</h3>
            <div className="space-y-1">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => { setActiveTopic(topic.id); setActiveLesson(null); setActiveTab('content'); resetQuiz(); }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all"
                  style={{
                    background: activeTopic === topic.id
                      ? 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.1))'
                      : 'transparent',
                    color: activeTopic === topic.id ? '#a5b4fc' : '#6b7280',
                    border: `1px solid ${activeTopic === topic.id ? 'rgba(99,102,241,0.3)' : 'transparent'}`,
                  }}
                >
                  <span className="text-xl">{topic.icon}</span>
                  <div className="text-left flex-1">
                    <div>{topic.titleUz}</div>
                    <div className="text-xs opacity-60">
                      {topic.lessons.filter((l) => completedLessons.includes(l.id)).length}/{topic.lessons.length} dars
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-2">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: '#a855f7' }}>Darslar</h3>
            <div className="space-y-1">
              {currentTopic.lessons.map((lesson, idx) => {
                const done = completedLessons.includes(lesson.id);
                const active = currentLesson?.id === lesson.id;
                return (
                  <button
                    key={lesson.id}
                    onClick={() => { setActiveLesson(lesson.id); setActiveTab('content'); resetQuiz(); }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all text-left"
                    style={{
                      background: active ? 'rgba(99,102,241,0.15)' : 'transparent',
                      color: active ? '#a5b4fc' : done ? '#6ee7b7' : '#6b7280',
                      border: `1px solid ${active ? 'rgba(99,102,241,0.3)' : 'transparent'}`,
                    }}
                  >
                    <div className="flex-shrink-0">
                      {done
                        ? <CheckCircle className="w-4 h-4" style={{ color: '#22c55e' }} />
                        : <div className="w-4 h-4 rounded-full border text-center text-xs flex items-center justify-center"
                          style={{ borderColor: '#4b5563', color: '#4b5563', fontSize: '10px' }}>
                          {idx + 1}
                        </div>
                      }
                    </div>
                    <span className="flex-1 text-sm">{lesson.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Lesson Header */}
        <div className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
          style={{ borderBottom: '1px solid rgba(99,102,241,0.15)', background: 'rgba(10,10,15,0.8)' }}>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg transition-all"
            style={{ background: 'rgba(99,102,241,0.1)', color: '#6366f1' }}
          >
            {sidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="text-xl">{currentTopic.icon}</span>
            <span>{currentTopic.titleUz}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white font-medium">{currentLesson?.title}</span>
          </div>

          <div className="flex-1" />

          {completedLessons.includes(currentLesson?.id || '') && (
            <div className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full"
              style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.3)' }}>
              <CheckCircle className="w-3 h-3" />
              Bajarildi
            </div>
          )}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 px-4 py-2 flex-shrink-0"
          style={{ borderBottom: '1px solid rgba(99,102,241,0.1)', background: 'rgba(10,10,15,0.6)' }}>
          {[
            { id: 'content', label: 'Dars', icon: BookOpen },
            ...(currentLesson?.code ? [{ id: 'code', label: 'Kod', icon: Code2 }] : []),
            ...(currentLesson?.quiz ? [{ id: 'quiz', label: 'Test', icon: HelpCircle }] : []),
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'content' | 'code' | 'quiz')}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: activeTab === tab.id
                    ? 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.1))'
                    : 'transparent',
                  color: activeTab === tab.id ? '#a5b4fc' : '#6b7280',
                  border: `1px solid ${activeTab === tab.id ? 'rgba(99,102,241,0.3)' : 'transparent'}`,
                }}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {activeTab === 'content' && currentLesson && (
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-invert max-w-none"
                style={{
                  '--tw-prose-body': '#d1d5db',
                  '--tw-prose-headings': '#f9fafb',
                  '--tw-prose-code': '#a5b4fc',
                } as React.CSSProperties}>
                <ReactMarkdown
                  components={{
                    code({ className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || '');
                      const isBlock = String(children).includes('\n');
                      return isBlock ? (
                        <SyntaxHighlighter
                          style={oneDark as Record<string, React.CSSProperties>}
                          language={match ? match[1] : 'text'}
                          PreTag="div"
                          customStyle={{
                            borderRadius: '12px',
                            border: '1px solid rgba(99,102,241,0.2)',
                            fontSize: '0.85rem',
                            margin: '1rem 0',
                          }}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      ) : (
                        <code
                          {...props}
                          className={className}
                          style={{
                            background: 'rgba(99,102,241,0.15)',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            color: '#a5b4fc',
                            fontSize: '0.85em',
                          }}
                        >
                          {children}
                        </code>
                      );
                    },
                    h1: ({ children }) => (
                      <h1 style={{ color: 'white', fontWeight: 900, fontSize: '1.8rem', marginBottom: '1rem' }}>
                        {children}
                      </h1>
                    ),
                    h2: ({ children }) => (
                      <h2 style={{ color: '#a5b4fc', fontWeight: 700, fontSize: '1.3rem', marginTop: '2rem', marginBottom: '0.8rem' }}>
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 style={{ color: '#c4b5fd', fontWeight: 600, fontSize: '1.1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p style={{ color: '#d1d5db', lineHeight: '1.8', marginBottom: '1rem' }}>
                        {children}
                      </p>
                    ),
                    ul: ({ children }) => (
                      <ul style={{ color: '#d1d5db', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                        {children}
                      </ul>
                    ),
                    li: ({ children }) => (
                      <li style={{ color: '#d1d5db', marginBottom: '0.3rem' }}>
                        {children}
                      </li>
                    ),
                    strong: ({ children }) => (
                      <strong style={{ color: '#a5b4fc', fontWeight: 700 }}>
                        {children}
                      </strong>
                    ),
                  }}
                >
                  {currentLesson.content}
                </ReactMarkdown>
              </div>

              <div className="flex items-center justify-between mt-8 pt-6"
                style={{ borderTop: '1px solid rgba(99,102,241,0.1)' }}>
                <button
                  onClick={goPrevLesson}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', color: '#9ca3af', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Oldingi
                </button>

                {!completedLessons.includes(currentLesson.id) ? (
                  <button
                    onClick={markComplete}
                    className="btn-neon flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Bajarildi deb belgilash
                  </button>
                ) : (
                  <button
                    onClick={goNextLesson}
                    className="btn-neon flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white"
                  >
                    <PlayCircle className="w-4 h-4" />
                    Keyingi dars
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {activeTab === 'code' && currentLesson?.code && (
            <div className="max-w-5xl mx-auto">
              <div className="rounded-2xl overflow-hidden code-editor">
                <div className="flex items-center gap-2 px-4 py-3"
                  style={{ background: '#161b22', borderBottom: '1px solid rgba(99,102,241,0.15)' }}>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-gray-400 ml-2 code-font">
                    {currentLesson.language === 'html' ? 'index.html' :
                      currentLesson.language === 'css' ? 'style.css' :
                        currentLesson.language === 'jsx' ? 'App.jsx' : 'app.js'}
                  </span>
                </div>
                <SyntaxHighlighter
                  style={oneDark as Record<string, React.CSSProperties>}
                  language={currentLesson.language || 'javascript'}
                  showLineNumbers
                  customStyle={{
                    margin: 0,
                    borderRadius: 0,
                    fontSize: '0.85rem',
                    maxHeight: '70vh',
                    overflow: 'auto',
                  }}
                >
                  {currentLesson.code}
                </SyntaxHighlighter>
              </div>
            </div>
          )}

          {activeTab === 'quiz' && currentLesson?.quiz && (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-2">📝 Bilim Testi</h2>
              <p className="text-gray-400 mb-6 text-sm">To'g'ri javobni tanlang</p>

              <div className="space-y-6">
                {currentLesson.quiz.map((q, qIdx) => (
                  <div key={qIdx} className="p-5 rounded-2xl"
                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(99,102,241,0.15)' }}>
                    <p className="font-medium text-white mb-4">
                      {qIdx + 1}. {q.question}
                    </p>
                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        const selected = quizAnswers[qIdx] === optIdx;
                        const isCorrect = optIdx === q.correct;
                        let cls = 'quiz-option';
                        if (quizSubmitted) {
                          if (isCorrect) cls += ' correct';
                          else if (selected && !isCorrect) cls += ' wrong';
                        }
                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleQuizAnswer(qIdx, optIdx)}
                            className={`${cls} w-full text-left px-4 py-3 rounded-xl transition-all`}
                            style={{
                              border: selected && !quizSubmitted
                                ? '1px solid rgba(99,102,241,0.6)'
                                : undefined,
                              background: selected && !quizSubmitted
                                ? 'rgba(99,102,241,0.1)'
                                : undefined,
                            }}
                          >
                            <span className="inline-flex w-6 h-6 rounded-full text-xs items-center justify-center mr-3 flex-shrink-0"
                              style={{ background: 'rgba(99,102,241,0.2)', color: '#a5b4fc' }}>
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="text-sm text-gray-200">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="mt-3 p-3 rounded-xl text-sm"
                        style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', color: '#86efac' }}>
                        💡 {q.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                {!quizSubmitted ? (
                  <button
                    onClick={submitQuiz}
                    disabled={Object.keys(quizAnswers).length < (currentLesson.quiz?.length || 0)}
                    className="btn-neon flex-1 py-3 rounded-xl font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Javoblarni Tekshirish
                  </button>
                ) : (
                  <>
                    <button
                      onClick={resetQuiz}
                      className="flex-1 py-3 rounded-xl font-medium transition-all"
                      style={{ background: 'rgba(255,255,255,0.05)', color: '#9ca3af', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      Qayta Urinish
                    </button>
                    <button
                      onClick={goNextLesson}
                      className="btn-neon flex-1 py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2"
                    >
                      Keyingi Dars <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
