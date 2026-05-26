import { useState, useRef, useEffect } from 'react';
import { Send, RefreshCw, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { aiResponses } from '../data/topics';

interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const suggestedQuestions = [
  "HTML nima va qanday ishlaydi?",
  "CSS Flexbox ni tushuntir",
  "JavaScript async/await qanday?",
  "React useState hookini misollar bilan tushuntir",
  "Node.js va Express bilan API yaratish",
  "MongoDB Schema qanday yaratiladi?",
  "Responsive dizayn qanday qilinadi?",
  "Git va GitHub qanday ishlatiladi?",
];

function getAIResponse(message: string): string {
  const msg = message.toLowerCase();

  if (msg.includes('salom') || msg.includes('assalom') || msg.includes('hi') || msg.includes('hello')) {
    return aiResponses.salom[Math.floor(Math.random() * aiResponses.salom.length)];
  }
  if (msg.includes('html')) {
    return aiResponses.html[Math.floor(Math.random() * aiResponses.html.length)];
  }
  if (msg.includes('css') || msg.includes('flexbox') || msg.includes('grid') || msg.includes('stil')) {
    return aiResponses.css[Math.floor(Math.random() * aiResponses.css.length)];
  }
  if (msg.includes('javascript') || msg.includes('js ') || msg.includes('async') || msg.includes('promise') || msg.includes('array') || msg.includes('funktsiya')) {
    return aiResponses.javascript[Math.floor(Math.random() * aiResponses.javascript.length)];
  }
  if (msg.includes('react') || msg.includes('hook') || msg.includes('usestate') || msg.includes('komponent') || msg.includes('component')) {
    return aiResponses.react[Math.floor(Math.random() * aiResponses.react.length)];
  }
  if (msg.includes('backend') || msg.includes('node') || msg.includes('express') || msg.includes('server') || msg.includes('api')) {
    return aiResponses.backend[Math.floor(Math.random() * aiResponses.backend.length)];
  }
  if (msg.includes('mongodb') || msg.includes('bazasi') || msg.includes('database') || msg.includes('sql')) {
    return `**Ma'lumotlar bazasi** - dasturlashning muhim qismi!\n\n**MongoDB** (NoSQL):\n\`\`\`javascript\n// Schema yaratish\nconst Schema = new mongoose.Schema({\n    ism: { type: String, required: true },\n    email: String,\n    yosh: Number\n});\n\nconst Model = mongoose.model('User', Schema);\n\n// CRUD\nawait Model.create({ ism: "Ali" });\nawait Model.find();\nawait Model.findByIdAndUpdate(id, { ism: "Yangi" });\nawait Model.findByIdAndDelete(id);\n\`\`\`\n\n**SQL** (PostgreSQL/MySQL):\n\`\`\`sql\nCREATE TABLE users (\n    id SERIAL PRIMARY KEY,\n    ism VARCHAR(100),\n    email VARCHAR(100) UNIQUE\n);\n\nINSERT INTO users (ism, email) VALUES ('Ali', 'ali@test.uz');\nSELECT * FROM users WHERE ism = 'Ali';\n\`\`\``;
  }
  if (msg.includes('git') || msg.includes('github') || msg.includes('version')) {
    return `**Git - Versiya boshqaruv tizimi** 🔧\n\nAsosiy buyruqlar:\n\`\`\`bash\n# Loyiha boshlash\ngit init\ngit clone https://github.com/user/repo\n\n# O'zgarishlarni saqlash\ngit add .\ngit commit -m "feat: yangi funksiya qo'shildi"\ngit push origin main\n\n# Tarmoqlar bilan ishlash\ngit checkout -b yangi-tarmoq\ngit merge yangi-tarmoq\ngit pull origin main\n\n# Holat ko'rish\ngit status\ngit log --oneline\n\`\`\`\n\n**GitHub** - kodlarni internet orqali saqlash va hamkorlik qilish platformasi!`;
  }
  if (msg.includes('responsive') || msg.includes('mobil') || msg.includes('media query')) {
    return `**Responsive Dizayn** 📱💻\n\nCSS Media Queries:\n\`\`\`css\n/* Mobil (< 640px) */\n@media (max-width: 640px) {\n    .container { padding: 10px; }\n    .title { font-size: 1.5rem; }\n}\n\n/* Planshet (640px - 1024px) */\n@media (min-width: 640px) and (max-width: 1024px) {\n    .grid { grid-template-columns: repeat(2, 1fr); }\n}\n\n/* Kompyuter (> 1024px) */\n@media (min-width: 1024px) {\n    .grid { grid-template-columns: repeat(3, 1fr); }\n}\n\`\`\`\n\n**Tailwind CSS** bilan (tavsiya):\n\`\`\`html\n<div class="w-full md:w-1/2 lg:w-1/3">\n    <!-- sm: mobil, md: planshet, lg: kompyuter -->\n</div>\n\`\`\``;
  }
  if (msg.includes('typescript') || msg.includes('ts')) {
    return `**TypeScript** - JavaScript ning kuchaytirilgan versiyasi! 💪\n\n\`\`\`typescript\n// Tip belgilash\ntype Foydalanuvchi = {\n    id: number;\n    ism: string;\n    email: string;\n    faol?: boolean; // ixtiyoriy\n};\n\n// Funktsiya tiplari\nfunction salom(ism: string): string {\n    return \`Salom, \${ism}!\`;\n}\n\n// Interface\ninterface API {\n    get(url: string): Promise<any>;\n    post(url: string, body: object): Promise<any>;\n}\n\n// Generics\nfunction firstItem<T>(arr: T[]): T {\n    return arr[0];\n}\n\`\`\`\n\nTypeScript xatolarni oldindan aniqlaydi va kod sifatini oshiradi!`;
  }
  if (msg.includes('next') || msg.includes('nextjs')) {
    return `**Next.js** - React asosidagi full-stack framework! 🚀\n\n\`\`\`bash\nnpx create-next-app@latest my-app\n\`\`\`\n\n**Asosiy xususiyatlar:**\n- 📄 **File-based routing** - \`/pages\` papkasi\n- 🔄 **SSR** - Server Side Rendering\n- ⚡ **SSG** - Static Site Generation\n- 🖼️ **Image Optimization** - avtomatik optimallashtirish\n- 🔌 **API Routes** - backend API\n\n\`\`\`jsx\n// pages/index.js\nexport default function Home({ data }) {\n    return <h1>{data.title}</h1>;\n}\n\n// Server tomonida ma'lumot olish\nexport async function getServerSideProps() {\n    const res = await fetch('/api/data');\n    const data = await res.json();\n    return { props: { data } };\n}\n\`\`\``;
  }

  return aiResponses.default[Math.floor(Math.random() * aiResponses.default.length)];
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'ai',
      content: `# Salom! Men SBS-404 AI Ustozi 🤖

Men sizga dasturlash bo'yicha har qanday savolga javob beraman!

**Men o'rgatadigan mavzular:**
- 🌐 **HTML** - Veb-sahifa tuzilishi
- 🎨 **CSS** - Dizayn va stil
- ⚡ **JavaScript** - Interaktivlik
- ⚛️ **React.js** - Modern UI
- 🖥️ **Node.js & Express** - Backend
- 🗄️ **MongoDB & SQL** - Ma'lumotlar bazasi
- 🔧 **Git & GitHub** - Versiya boshqaruv

Savolingizni yozing yoki quyidagi mavzulardan birini tanlang! 👇`,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (text?: string) => {
    const content = text || input.trim();
    if (!content || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    setShowSuggestions(false);

    // Simulate AI thinking
    await new Promise((r) => setTimeout(r, 800 + Math.random() * 800));

    const aiMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: 'ai',
      content: getAIResponse(content),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, aiMsg]);
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([{
      id: Date.now().toString(),
      role: 'ai',
      content: 'Suhbat tozalandi! Yangi savol bering 😊',
      timestamp: new Date(),
    }]);
    setShowSuggestions(true);
  };

  return (
    <div className="flex flex-col h-screen pt-16" style={{ background: '#0a0a0f' }}>
      {/* Chat header */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 flex-shrink-0"
        style={{ borderBottom: '1px solid rgba(99,102,241,0.15)', background: 'rgba(10,10,15,0.9)' }}>
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full overflow-hidden"
              style={{ border: '2px solid rgba(99,102,241,0.4)' }}>
              <img src="/images/ai-teacher.png" alt="AI" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2"
              style={{ borderColor: '#0a0a0f' }} />
          </div>
          <div>
            <div className="font-bold text-white flex items-center gap-2">
              SBS AI Ustoz
              <Sparkles className="w-4 h-4" style={{ color: '#f59e0b' }} />
            </div>
            <div className="text-xs text-green-400 flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Online • Dasturlash bo'yicha mutaxassis
            </div>
          </div>
        </div>

        <button
          onClick={clearChat}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all"
          style={{ background: 'rgba(255,255,255,0.05)', color: '#9ca3af', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Tozalash</span>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 sm:px-6 py-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            {/* Avatar */}
            <div className="flex-shrink-0">
              {msg.role === 'ai' ? (
                <div className="w-8 h-8 rounded-full overflow-hidden"
                  style={{ border: '1.5px solid rgba(99,102,241,0.4)' }}>
                  <img src="/images/ai-teacher.png" alt="AI" className="w-full h-full object-cover object-top" />
                </div>
              ) : (
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1)', color: 'white' }}>
                  U
                </div>
              )}
            </div>

            {/* Bubble */}
            <div className={`max-w-[85%] sm:max-w-[75%] ${msg.role === 'ai' ? 'chat-bubble-ai' : 'chat-bubble-user'} p-4`}>
              {msg.role === 'ai' ? (
                <div className="prose prose-invert max-w-none text-sm">
                  <ReactMarkdown
                    components={{
                      code({ className, children }) {
                        const match = /language-(\w+)/.exec(className || '');
                        const isBlock = String(children).includes('\n');
                        return isBlock ? (
                          <SyntaxHighlighter
                            style={oneDark as Record<string, React.CSSProperties>}
                            language={match ? match[1] : 'text'}
                            PreTag="div"
                            customStyle={{
                              borderRadius: '8px',
                              border: '1px solid rgba(99,102,241,0.2)',
                              fontSize: '0.8rem',
                              margin: '0.5rem 0',
                            }}
                          >
                            {String(children).replace(/\n$/, '')}
                          </SyntaxHighlighter>
                        ) : (
                          <code style={{
                            background: 'rgba(99,102,241,0.2)',
                            padding: '1px 5px',
                            borderRadius: '3px',
                            color: '#a5b4fc',
                            fontSize: '0.82em',
                          }}>
                            {children}
                          </code>
                        );
                      },
                      p: ({ children }) => (
                        <p style={{ color: '#d1d5db', margin: '0.3rem 0', lineHeight: '1.7', fontSize: '0.9rem' }}>
                          {children}
                        </p>
                      ),
                      h1: ({ children }) => (
                        <h1 style={{ color: 'white', fontWeight: 800, fontSize: '1.2rem', margin: '0.5rem 0' }}>
                          {children}
                        </h1>
                      ),
                      h2: ({ children }) => (
                        <h2 style={{ color: '#a5b4fc', fontWeight: 700, fontSize: '1rem', margin: '0.5rem 0' }}>
                          {children}
                        </h2>
                      ),
                      ul: ({ children }) => (
                        <ul style={{ paddingLeft: '1.2rem', margin: '0.3rem 0' }}>{children}</ul>
                      ),
                      li: ({ children }) => (
                        <li style={{ color: '#d1d5db', fontSize: '0.9rem', marginBottom: '0.2rem' }}>{children}</li>
                      ),
                      strong: ({ children }) => (
                        <strong style={{ color: '#a5b4fc', fontWeight: 700 }}>{children}</strong>
                      ),
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                </div>
              ) : (
                <p className="text-white text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
              )}
              <div className="mt-1.5 text-xs opacity-40" style={{ color: msg.role === 'ai' ? '#a5b4fc' : '#c4b5fd' }}>
                {msg.timestamp.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}

        {/* Loading */}
        {loading && (
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full overflow-hidden" style={{ border: '1.5px solid rgba(99,102,241,0.4)' }}>
              <img src="/images/ai-teacher.png" alt="AI" className="w-full h-full object-cover object-top" />
            </div>
            <div className="chat-bubble-ai p-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: '#6366f1',
                        animation: `pulse-glow 1.2s ease-in-out infinite`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
                <span className="text-xs" style={{ color: '#6366f1' }}>Javob tayyorlanmoqda...</span>
              </div>
            </div>
          </div>
        )}

        {/* Suggested questions */}
        {showSuggestions && messages.length === 1 && (
          <div className="mt-4">
            <p className="text-xs text-gray-500 mb-3 text-center">Quyidagi savollardan birini tanlang:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {suggestedQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(q)}
                  className="px-3 py-1.5 rounded-full text-xs transition-all"
                  style={{
                    background: 'rgba(99,102,241,0.1)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    color: '#a5b4fc',
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex-shrink-0 px-3 sm:px-6 py-4"
        style={{ borderTop: '1px solid rgba(99,102,241,0.15)', background: 'rgba(10,10,15,0.9)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-2 items-end p-2 rounded-2xl"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(99,102,241,0.25)' }}>
            <div className="flex gap-1 flex-shrink-0 pb-1">
              <span className="px-2 py-1 text-xs rounded-lg" style={{ color: '#6366f1', background: 'rgba(99,102,241,0.1)' }}>AI</span>
            </div>

            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Savolingizni yozing... (HTML, CSS, JS, React, Backend)"
              rows={1}
              className="flex-1 bg-transparent resize-none outline-none text-sm py-2 px-1"
              style={{
                color: '#e2e8f0',
                maxHeight: '120px',
                minHeight: '36px',
              }}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = 'auto';
                target.style.height = Math.min(target.scrollHeight, 120) + 'px';
              }}
            />

            <button
              onClick={() => sendMessage()}
              disabled={!input.trim() || loading}
              className="flex-shrink-0 p-2.5 rounded-xl transition-all disabled:opacity-40"
              style={{
                background: input.trim() && !loading
                  ? 'linear-gradient(135deg, #6366f1, #a855f7)'
                  : 'rgba(99,102,241,0.2)',
                color: 'white',
              }}
            >
              {loading ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </div>
          <p className="text-center text-xs text-gray-600 mt-2">
            Enter yuborish • Shift+Enter yangi qator • SBS-404 AI © 2024
          </p>
        </div>
      </div>
    </div>
  );
}
