import { Trophy, Star, Zap, BookOpen, Code2, MessageSquare, Target, Award } from 'lucide-react';
import { topics } from '../data/topics';

interface AchievementsPageProps {
  completedLessons: string[];
  progress: number;
}

const allAchievements = [
  {
    id: 'first-lesson',
    icon: '🎯',
    title: 'Birinchi qadam',
    desc: 'Birinchi darsni bajaring',
    xp: 50,
    requirement: (c: string[]) => c.length >= 1,
  },
  {
    id: 'html-master',
    icon: '🌐',
    title: 'HTML Usta',
    desc: 'Barcha HTML darslarini bajaring',
    xp: 150,
    requirement: (c: string[]) => {
      const htmlLessons = topics.find(t => t.id === 'html')?.lessons.map(l => l.id) || [];
      return htmlLessons.every(id => c.includes(id));
    },
  },
  {
    id: 'css-master',
    icon: '🎨',
    title: 'CSS Dizayner',
    desc: 'Barcha CSS darslarini bajaring',
    xp: 200,
    requirement: (c: string[]) => {
      const cssLessons = topics.find(t => t.id === 'css')?.lessons.map(l => l.id) || [];
      return cssLessons.every(id => c.includes(id));
    },
  },
  {
    id: 'js-coder',
    icon: '⚡',
    title: 'JavaScript Dasturchi',
    desc: 'Barcha JavaScript darslarini bajaring',
    xp: 300,
    requirement: (c: string[]) => {
      const jsLessons = topics.find(t => t.id === 'javascript')?.lessons.map(l => l.id) || [];
      return jsLessons.every(id => c.includes(id));
    },
  },
  {
    id: 'react-dev',
    icon: '⚛️',
    title: 'React Developer',
    desc: 'Barcha React darslarini bajaring',
    xp: 400,
    requirement: (c: string[]) => {
      const reactLessons = topics.find(t => t.id === 'react')?.lessons.map(l => l.id) || [];
      return reactLessons.every(id => c.includes(id));
    },
  },
  {
    id: 'five-lessons',
    icon: '🔥',
    title: 'Streak 5',
    desc: '5 ta darsni bajaring',
    xp: 100,
    requirement: (c: string[]) => c.length >= 5,
  },
  {
    id: 'backend-hero',
    icon: '🖥️',
    title: 'Backend Qahramoni',
    desc: 'Barcha Backend darslarini bajaring',
    xp: 500,
    requirement: (c: string[]) => {
      const beLessons = topics.find(t => t.id === 'backend')?.lessons.map(l => l.id) || [];
      return beLessons.every(id => c.includes(id));
    },
  },
  {
    id: 'full-stack',
    icon: '🏆',
    title: 'Full-Stack Dasturchi',
    desc: 'Barcha mavzularni bajaring',
    xp: 1000,
    requirement: (c: string[]) => {
      return topics.every(t => t.lessons.every(l => c.includes(l.id)));
    },
  },
];

const levelInfo = [
  { min: 0, max: 20, name: 'Yangi Boshlovchi', icon: '🌱', color: '#6b7280' },
  { min: 20, max: 40, name: 'O\'quvchi', icon: '📚', color: '#3b82f6' },
  { min: 40, max: 60, name: 'Dasturchi', icon: '💻', color: '#8b5cf6' },
  { min: 60, max: 80, name: 'Senior Dasturchi', icon: '🔧', color: '#f59e0b' },
  { min: 80, max: 100, name: 'Full-Stack Master', icon: '🏆', color: '#22c55e' },
];

export default function AchievementsPage({ completedLessons, progress }: AchievementsPageProps) {
  const totalXP = Math.floor(progress * 12);
  const unlockedAchievements = allAchievements.filter(a => a.requirement(completedLessons));
  const currentLevel = levelInfo.find(l => progress >= l.min && progress < l.max) || levelInfo[levelInfo.length - 1];

  const topicStats = topics.map(t => {
    const done = t.lessons.filter(l => completedLessons.includes(l.id)).length;
    return {
      ...t,
      done,
      total: t.lessons.length,
      pct: Math.round((done / t.lessons.length) * 100),
    };
  });

  return (
    <div className="min-h-screen pt-16 px-4 sm:px-6 lg:px-8 py-8"
      style={{ background: '#0a0a0f' }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">
            🏆 Mening <span className="gradient-text">Yutuqlarim</span>
          </h1>
          <p className="text-gray-400">Har bir dars bilan yangi yutug'ingizni kashf qiling</p>
        </div>

        {/* Profile Card */}
        <div className="p-6 sm:p-8 rounded-3xl mb-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.1))',
            border: '1px solid rgba(99,102,241,0.2)',
          }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
            style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl flex items-center justify-center text-5xl"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  boxShadow: '0 0 30px rgba(99,102,241,0.5)',
                }}>
                {currentLevel.icon}
              </div>
              <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full text-xs font-bold"
                style={{ background: currentLevel.color, color: 'white' }}>
                Lv.{levelInfo.indexOf(currentLevel) + 1}
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-black text-white mb-1">{currentLevel.name}</h2>
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-4">
                <Zap className="w-4 h-4" style={{ color: '#f59e0b' }} />
                <span className="font-bold text-yellow-400">{totalXP} XP</span>
                <span className="text-gray-500">•</span>
                <Trophy className="w-4 h-4" style={{ color: '#6366f1' }} />
                <span style={{ color: '#a5b4fc' }}>{unlockedAchievements.length}/{allAchievements.length} yutuq</span>
              </div>

              {/* Overall Progress */}
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Umumiy progress</span>
                  <span className="font-bold" style={{ color: '#6366f1' }}>{progress}%</span>
                </div>
                <div className="h-3 rounded-full overflow-hidden"
                  style={{ background: 'rgba(99,102,241,0.1)' }}>
                  <div className="h-full rounded-full progress-bar" style={{ width: `${progress}%` }} />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 sm:grid-cols-1 gap-3 flex-shrink-0">
              {[
                { icon: BookOpen, label: 'Darslar', value: completedLessons.length, color: '#6366f1' },
                { icon: Star, label: 'Yutuqlar', value: unlockedAchievements.length, color: '#f59e0b' },
                { icon: Target, label: 'Maqsad', value: `${progress}%`, color: '#22c55e' },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="text-center p-3 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <Icon className="w-5 h-5 mx-auto mb-1" style={{ color: s.color }} />
                    <div className="font-black text-white text-lg">{s.value}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Topic Progress */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5" style={{ color: '#6366f1' }} />
            Mavzular bo'yicha progress
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topicStats.map((t) => (
              <div key={t.id} className="p-4 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{t.icon}</span>
                  <div>
                    <div className="font-bold text-white text-sm">{t.titleUz}</div>
                    <div className="text-xs text-gray-500">{t.done}/{t.total} dars</div>
                  </div>
                  <div className="ml-auto text-sm font-bold" style={{ color: t.color }}>
                    {t.pct}%
                  </div>
                </div>
                <div className="h-2 rounded-full overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <div className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${t.pct}%`, background: `linear-gradient(90deg, ${t.color}, ${t.color}88)` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Award className="w-5 h-5" style={{ color: '#f59e0b' }} />
            Yutuqlar
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {allAchievements.map((ach) => {
              const unlocked = ach.requirement(completedLessons);
              return (
                <div
                  key={ach.id}
                  className="p-4 rounded-2xl text-center transition-all"
                  style={{
                    background: unlocked
                      ? 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(239,68,68,0.05))'
                      : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${unlocked ? 'rgba(245,158,11,0.3)' : 'rgba(255,255,255,0.06)'}`,
                    opacity: unlocked ? 1 : 0.5,
                    filter: unlocked ? 'none' : 'grayscale(100%)',
                  }}
                >
                  <div className="text-4xl mb-2">{ach.icon}</div>
                  <div className="font-bold text-white text-sm mb-1">{ach.title}</div>
                  <div className="text-xs text-gray-400 mb-2">{ach.desc}</div>
                  <div className="flex items-center justify-center gap-1"
                    style={{ color: unlocked ? '#f59e0b' : '#6b7280' }}>
                    <Zap className="w-3 h-3" />
                    <span className="text-xs font-bold">{ach.xp} XP</span>
                  </div>
                  {unlocked && (
                    <div className="mt-2 text-xs font-medium px-2 py-0.5 rounded-full inline-block"
                      style={{ background: 'rgba(34,197,94,0.15)', color: '#22c55e' }}>
                      ✓ Qo'lga kiritildi
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Level Road */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5" style={{ color: '#a855f7' }} />
            Daraja Yo'li
          </h2>
          <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
            {levelInfo.map((lv, i) => {
              const active = progress >= lv.min;
              const isCurrent = progress >= lv.min && progress < lv.max;
              return (
                <div key={i} className="flex-1 flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-2 transition-all"
                      style={{
                        background: active
                          ? `linear-gradient(135deg, ${lv.color}33, ${lv.color}11)`
                          : 'rgba(255,255,255,0.02)',
                        border: `2px solid ${active ? lv.color : 'rgba(255,255,255,0.06)'}`,
                        boxShadow: isCurrent ? `0 0 20px ${lv.color}44` : 'none',
                      }}>
                      {lv.icon}
                    </div>
                    {isCurrent && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
                        style={{ background: lv.color, boxShadow: `0 0 8px ${lv.color}` }}>
                        <div className="w-2 h-2 rounded-full bg-white animate-ping" />
                      </div>
                    )}
                  </div>
                  <div className="text-xs font-medium" style={{ color: active ? 'white' : '#6b7280' }}>
                    {lv.name}
                  </div>
                  <div className="text-xs" style={{ color: '#6b7280' }}>{lv.min}%+</div>

                  {i < levelInfo.length - 1 && (
                    <div className="hidden sm:block absolute right-0 top-7 w-full h-0.5"
                      style={{ background: progress > lv.max ? lv.color : 'rgba(255,255,255,0.06)' }} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
