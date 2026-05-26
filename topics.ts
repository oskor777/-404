import { useState } from 'react';
import { Menu, X, Code2, Zap, BookOpen, MessageSquare, Trophy, Home } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  progress: number;
}

const navItems = [
  { id: 'home', label: 'Bosh Sahifa', icon: Home },
  { id: 'courses', label: 'Darslar', icon: BookOpen },
  { id: 'chat', label: 'AI Ustoz', icon: MessageSquare },
  { id: 'editor', label: 'Muharrir', icon: Code2 },
  { id: 'achievements', label: 'Yutuqlar', icon: Trophy },
];

export default function Header({ currentPage, setCurrentPage, progress }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{
      background: 'rgba(10, 10, 15, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(99, 102, 241, 0.2)',
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}>
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
                style={{ background: '#06b6d4' }}>
                <Zap className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <div>
              <div className="font-black text-xl tracking-tight" style={{
                background: 'linear-gradient(135deg, #6366f1, #a855f7, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                SBS-404
              </div>
              <div className="text-xs text-gray-500 -mt-1">AI Dasturlash Platformasi</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    background: currentPage === item.id
                      ? 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.1))'
                      : 'transparent',
                    color: currentPage === item.id ? '#6366f1' : '#9ca3af',
                    border: currentPage === item.id ? '1px solid rgba(99,102,241,0.3)' : '1px solid transparent',
                  }}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Progress + Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Progress */}
            <div className="hidden sm:flex items-center gap-2">
              <div className="text-xs text-gray-400">Progress</div>
              <div className="w-24 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(99,102,241,0.1)' }}>
                <div
                  className="h-full rounded-full progress-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="text-xs font-bold" style={{ color: '#6366f1' }}>{progress}%</div>
            </div>

            {/* Level badge */}
            <div className="hidden sm:flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold"
              style={{
                background: 'rgba(245,158,11,0.15)',
                border: '1px solid rgba(245,158,11,0.3)',
                color: '#f59e0b'
              }}>
              <Zap className="w-3 h-3" />
              XP: {Math.floor(progress * 12)}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-xl transition-all"
              style={{ background: 'rgba(99,102,241,0.1)', color: '#6366f1' }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden menu-overlay border-t" style={{ borderColor: 'rgba(99,102,241,0.2)' }}>
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => { setCurrentPage(item.id); setMobileMenuOpen(false); }}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{
                    background: currentPage === item.id
                      ? 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(168,85,247,0.1))'
                      : 'rgba(255,255,255,0.03)',
                    color: currentPage === item.id ? '#6366f1' : '#9ca3af',
                    border: `1px solid ${currentPage === item.id ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.05)'}`,
                  }}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              );
            })}
            <div className="flex items-center gap-2 px-4 py-2">
              <div className="text-xs text-gray-400">Umumiy progress:</div>
              <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(99,102,241,0.1)' }}>
                <div className="h-full rounded-full progress-bar" style={{ width: `${progress}%` }} />
              </div>
              <div className="text-xs font-bold" style={{ color: '#6366f1' }}>{progress}%</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
