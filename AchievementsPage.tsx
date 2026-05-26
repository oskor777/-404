import { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CoursesPage from './components/CoursesPage';
import ChatPage from './components/ChatPage';
import EditorPage from './components/EditorPage';
import AchievementsPage from './components/AchievementsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeTopic, setActiveTopic] = useState('html');
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('sbs404-completed');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [progress, setProgress] = useState(0);

  // Sync completedLessons to localStorage
  useEffect(() => {
    localStorage.setItem('sbs404-completed', JSON.stringify(completedLessons));
  }, [completedLessons]);

  // Recalculate progress when completedLessons changes
  useEffect(() => {
    // Import topics inline to calculate total
    import('./data/topics').then(({ topics }) => {
      const totalLessons = topics.reduce((acc, t) => acc + t.lessons.length, 0);
      setProgress(Math.round((completedLessons.length / totalLessons) * 100));
    });
  }, [completedLessons]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            setActiveTopic={setActiveTopic}
            completedLessons={completedLessons}
          />
        );
      case 'courses':
        return (
          <CoursesPage
            activeTopic={activeTopic}
            setActiveTopic={setActiveTopic}
            completedLessons={completedLessons}
            setCompletedLessons={setCompletedLessons}
            setProgress={setProgress}
          />
        );
      case 'chat':
        return <ChatPage />;
      case 'editor':
        return <EditorPage />;
      case 'achievements':
        return (
          <AchievementsPage
            completedLessons={completedLessons}
            progress={progress}
          />
        );
      default:
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            setActiveTopic={setActiveTopic}
            completedLessons={completedLessons}
          />
        );
    }
  };

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0f' }}>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        progress={progress}
      />
      <main className={currentPage === 'home' ? '' : ''}>
        {renderPage()}
      </main>
    </div>
  );
}
