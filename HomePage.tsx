import { useState, useRef } from 'react';
import { Play, Copy, Trash2, Download, RefreshCw, ChevronDown } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const templates: Record<string, { lang: string; code: string; label: string }> = {
  html: {
    lang: 'html',
    label: 'HTML Shablon',
    code: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mening Sahifam</title>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            font-family: 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #1e1b4b, #0f0f1a);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
        .card {
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(99,102,241,0.3);
            border-radius: 20px;
            padding: 40px;
            text-align: center;
            max-width: 500px;
        }
        h1 { color: #a5b4fc; font-size: 2.5rem; margin-bottom: 15px; }
        p { color: #9ca3af; line-height: 1.8; margin-bottom: 20px; }
        .btn {
            background: linear-gradient(135deg, #6366f1, #a855f7);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 50px;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s;
        }
        .btn:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(99,102,241,0.4); }
    </style>
</head>
<body>
    <div class="card">
        <h1>🚀 Salom, Dunyo!</h1>
        <p>Bu SBS-404 muharriridagi birinchi sahifam. HTML, CSS va JavaScript bilan ajoyib narsalar yarataman!</p>
        <button class="btn" onclick="alert('Tugma bosildi! 🎉')">Bosing!</button>
    </div>
</body>
</html>`,
  },
  css: {
    lang: 'html',
    label: 'CSS Animatsiya',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
        background: #0a0a0f;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        gap: 30px;
        flex-wrap: wrap;
        padding: 20px;
    }
    
    .box {
        width: 100px;
        height: 100px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        cursor: pointer;
    }
    
    /* Animatsiyalar */
    .spin { background: #6366f1; animation: spin 2s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    
    .bounce { background: #a855f7; animation: bounce 1s ease-in-out infinite; }
    @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-30px); }
    }
    
    .pulse { background: #06b6d4; animation: pulse 1.5s ease-in-out infinite; }
    @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.2); opacity: 0.7; }
    }
    
    .shake { background: #f59e0b; animation: shake 0.5s ease-in-out infinite; }
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    .flip { background: #22c55e; animation: flip 2s ease-in-out infinite; }
    @keyframes flip {
        0%, 100% { transform: rotateY(0); }
        50% { transform: rotateY(180deg); }
    }
    
    .label {
        color: white;
        text-align: center;
        margin-top: 10px;
        font-size: 0.8rem;
        opacity: 0.7;
    }
    
    .item { display: flex; flex-direction: column; align-items: center; }
</style>
</head>
<body>
    <div class="item"><div class="box spin">⚡</div><div class="label">Spin</div></div>
    <div class="item"><div class="box bounce">🎈</div><div class="label">Bounce</div></div>
    <div class="item"><div class="box pulse">💜</div><div class="label">Pulse</div></div>
    <div class="item"><div class="box shake">🔔</div><div class="label">Shake</div></div>
    <div class="item"><div class="box flip">🎭</div><div class="label">Flip</div></div>
</body>
</html>`,
  },
  javascript: {
    lang: 'html',
    label: 'JavaScript O\'yin',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
    * { box-sizing: border-box; margin: 0; }
    body { font-family: Arial; background: #0a0a0f; color: white; padding: 20px; min-height: 100vh; }
    h1 { text-align: center; color: #6366f1; margin-bottom: 20px; }
    .game { max-width: 400px; margin: 0 auto; text-align: center; }
    .score { font-size: 3rem; font-weight: bold; color: #a5b4fc; margin: 20px 0; }
    .target {
        width: 80px; height: 80px;
        background: linear-gradient(135deg, #6366f1, #a855f7);
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-size: 2rem; cursor: pointer;
        margin: 20px auto;
        transition: all 0.1s;
        user-select: none;
    }
    .target:active { transform: scale(0.9); }
    .timer { font-size: 1.5rem; color: #f59e0b; margin: 10px 0; }
    button {
        padding: 12px 30px;
        background: linear-gradient(135deg, #6366f1, #a855f7);
        color: white; border: none; border-radius: 50px;
        cursor: pointer; font-size: 1rem; margin-top: 15px;
    }
    .combo { color: #22c55e; font-size: 1.2rem; height: 30px; }
    .history { margin-top: 20px; text-align: left; max-height: 100px; overflow-y: auto; }
    .history div { font-size: 0.8rem; color: #6b7280; padding: 2px 0; }
</style>
</head>
<body>
    <h1>🎯 Bosish O'yini</h1>
    <div class="game">
        <div class="timer" id="timer">⏱ 30s</div>
        <div class="score" id="score">0</div>
        <div class="combo" id="combo"></div>
        <div class="target" id="target" onclick="hit()">🎯</div>
        <button onclick="startGame()" id="btn">▶ Boshlash</button>
        <div class="history" id="history"></div>
    </div>
    
<script>
    let score = 0, timeLeft = 30, running = false;
    let interval, combo = 0, lastHit = 0;
    
    function startGame() {
        score = 0; timeLeft = 30; combo = 0;
        running = true;
        document.getElementById('score').textContent = 0;
        document.getElementById('btn').disabled = true;
        document.getElementById('btn').textContent = 'O\'yin davom etmoqda...';
        document.getElementById('history').innerHTML = '';
        
        interval = setInterval(() => {
            timeLeft--;
            document.getElementById('timer').textContent = '⏱ ' + timeLeft + 's';
            if (timeLeft <= 0) {
                clearInterval(interval);
                running = false;
                document.getElementById('btn').disabled = false;
                document.getElementById('btn').textContent = '▶ Qayta o\'ynash';
                document.getElementById('target').textContent = '😴';
                document.getElementById('combo').textContent = 'Yakuniy ball: ' + score;
            }
        }, 1000);
        
        moveTarget();
    }
    
    function moveTarget() {
        if (!running) return;
        const t = document.getElementById('target');
        const emojis = ['🎯','🎪','⭐','💫','🔥','🎮','🏆'];
        t.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        const size = Math.max(60, 80 - score);
        t.style.width = t.style.height = size + 'px';
        t.style.fontSize = (size/2.5) + 'px';
    }
    
    function hit() {
        if (!running) return;
        const now = Date.now();
        combo = (now - lastHit < 800) ? combo + 1 : 1;
        lastHit = now;
        
        const pts = combo >= 3 ? combo * 2 : 1;
        score += pts;
        document.getElementById('score').textContent = score;
        
        if (combo >= 3) {
            document.getElementById('combo').textContent = 'COMBO x' + combo + '! +' + pts;
            setTimeout(() => document.getElementById('combo').textContent = '', 500);
        }
        
        const log = document.getElementById('history');
        const div = document.createElement('div');
        div.textContent = '+' + pts + (combo >= 3 ? ' 🔥 COMBO!' : '') + ' (jami: ' + score + ')';
        log.prepend(div);
        
        moveTarget();
    }
</script>
</body>
</html>`,
  },
  react: {
    lang: 'jsx',
    label: 'React Komponent',
    code: `// React useState va useEffect misoli
// Bu kodni React loyihasida ishlatish mumkin

import { useState, useEffect } from 'react';

function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: "HTML o'rganish", done: true },
        { id: 2, text: "CSS Flexbox", done: true },
        { id: 3, text: "JavaScript asoslari", done: false },
        { id: 4, text: "React hooks", done: false },
    ]);
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('all');

    const add = () => {
        if (!input.trim()) return;
        setTodos(prev => [...prev, {
            id: Date.now(),
            text: input.trim(),
            done: false
        }]);
        setInput('');
    };

    const toggle = (id) => {
        setTodos(prev => prev.map(t =>
            t.id === id ? { ...t, done: !t.done } : t
        ));
    };

    const remove = (id) => {
        setTodos(prev => prev.filter(t => t.id !== id));
    };

    const filtered = todos.filter(t => {
        if (filter === 'done') return t.done;
        if (filter === 'active') return !t.done;
        return true;
    });

    const doneCount = todos.filter(t => t.done).length;

    return (
        <div style={{
            maxWidth: '500px', margin: '50px auto',
            fontFamily: 'Arial', background: '#1e1b4b',
            borderRadius: '20px', padding: '30px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
        }}>
            <h1 style={{ color: '#a5b4fc', textAlign: 'center', marginBottom: '20px' }}>
                ✅ Vazifalar ({doneCount}/{todos.length})
            </h1>

            {/* Progress */}
            <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '10px',
                height: '8px', marginBottom: '20px', overflow: 'hidden' }}>
                <div style={{
                    width: todos.length > 0 ? (doneCount/todos.length*100) + '%' : '0%',
                    height: '100%', background: 'linear-gradient(90deg, #6366f1, #a855f7)',
                    transition: 'width 0.3s ease'
                }} />
            </div>

            {/* Input */}
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyPress={e => e.key === 'Enter' && add()}
                    placeholder="Yangi vazifa qo'shing..."
                    style={{
                        flex: 1, padding: '10px 15px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(99,102,241,0.3)',
                        borderRadius: '10px', color: 'white',
                        outline: 'none'
                    }}
                />
                <button onClick={add} style={{
                    padding: '10px 20px',
                    background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                    color: 'white', border: 'none',
                    borderRadius: '10px', cursor: 'pointer'
                }}>+</button>
            </div>

            {/* Filter */}
            <div style={{ display: 'flex', gap: '5px', marginBottom: '15px' }}>
                {['all', 'active', 'done'].map(f => (
                    <button key={f} onClick={() => setFilter(f)} style={{
                        padding: '5px 12px', border: 'none', borderRadius: '8px',
                        cursor: 'pointer', fontSize: '0.8rem',
                        background: filter === f ? '#6366f1' : 'rgba(255,255,255,0.05)',
                        color: filter === f ? 'white' : '#9ca3af'
                    }}>
                        {f === 'all' ? 'Hammasi' : f === 'active' ? 'Bajarilmagan' : 'Bajarilgan'}
                    </button>
                ))}
            </div>

            {/* List */}
            {filtered.map(todo => (
                <div key={todo.id} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    padding: '12px 15px', marginBottom: '8px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(99,102,241,0.1)',
                    borderRadius: '12px',
                }}>
                    <input type="checkbox" checked={todo.done}
                        onChange={() => toggle(todo.id)}
                        style={{ width: '18px', height: '18px', cursor: 'pointer' }} />
                    <span style={{
                        flex: 1, color: todo.done ? '#6b7280' : 'white',
                        textDecoration: todo.done ? 'line-through' : 'none'
                    }}>
                        {todo.text}
                    </span>
                    <button onClick={() => remove(todo.id)} style={{
                        background: 'rgba(239,68,68,0.2)', color: '#ef4444',
                        border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px',
                        padding: '3px 8px', cursor: 'pointer'
                    }}>🗑</button>
                </div>
            ))}

            {filtered.length === 0 && (
                <div style={{ textAlign: 'center', color: '#6b7280', padding: '20px' }}>
                    Vazifalar topilmadi
                </div>
            )}
        </div>
    );
}

export default TodoApp;`,
  },
};

export default function EditorPage() {
  const [selectedTemplate, setSelectedTemplate] = useState('html');
  const [code, setCode] = useState(templates.html.code);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const runCode = async () => {
    setIsRunning(true);
    await new Promise(r => setTimeout(r, 300));

    const lang = templates[selectedTemplate].lang;

    if (lang === 'html') {
      setOutput(code);
    } else {
      setOutput(`<!DOCTYPE html>
<html>
<head><style>
body { font-family: 'Fira Code', monospace; background: #0d1117; color: #e2e8f0; padding: 20px; }
pre { background: #161b22; padding: 20px; border-radius: 12px; border: 1px solid rgba(99,102,241,0.2); white-space: pre-wrap; }
</style></head>
<body>
<pre>// ${lang === 'jsx' ? 'React' : 'JavaScript'} kodi\n// Brauzerda to'g'ridan-to'g'ri ishlatish uchun HTML shablon tanlang\n\n${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
</body>
</html>`);
    }

    setIsRunning(false);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearCode = () => {
    setCode('// Kod yozing...\n');
    setOutput('');
  };

  const downloadCode = () => {
    const ext = templates[selectedTemplate].lang === 'html' ? 'html' :
      selectedTemplate === 'javascript' ? 'js' : 'jsx';
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `sbs404-code.${ext}`;
    a.click();
  };

  const selectTemplate = (key: string) => {
    setSelectedTemplate(key);
    setCode(templates[key].code);
    setOutput('');
    setShowDropdown(false);
  };

  return (
    <div className="flex flex-col h-screen pt-16" style={{ background: '#0a0a0f' }}>
      {/* Toolbar */}
      <div className="flex items-center gap-2 px-3 sm:px-4 py-2 flex-shrink-0 flex-wrap gap-y-2"
        style={{ borderBottom: '1px solid rgba(99,102,241,0.15)', background: 'rgba(10,10,15,0.9)' }}>

        {/* Template selector */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
            style={{ background: 'rgba(99,102,241,0.1)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.2)' }}
          >
            {templates[selectedTemplate].label}
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
          {showDropdown && (
            <div className="absolute top-full left-0 mt-1 rounded-xl overflow-hidden z-10 w-48"
              style={{ background: '#0f0f1a', border: '1px solid rgba(99,102,241,0.2)' }}>
              {Object.entries(templates).map(([key, t]) => (
                <button
                  key={key}
                  onClick={() => selectTemplate(key)}
                  className="block w-full text-left px-4 py-2.5 text-sm transition-all"
                  style={{
                    background: selectedTemplate === key ? 'rgba(99,102,241,0.15)' : 'transparent',
                    color: selectedTemplate === key ? '#a5b4fc' : '#9ca3af',
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-1.5">
          <button onClick={copyCode} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all"
            style={{ background: 'rgba(255,255,255,0.05)', color: '#9ca3af', border: '1px solid rgba(255,255,255,0.08)' }}>
            <Copy className="w-3.5 h-3.5" />
            {copied ? 'Nusxalandi!' : 'Nusxa'}
          </button>
          <button onClick={clearCode} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all"
            style={{ background: 'rgba(255,255,255,0.05)', color: '#9ca3af', border: '1px solid rgba(255,255,255,0.08)' }}>
            <Trash2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Tozalash</span>
          </button>
          <button onClick={downloadCode} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all"
            style={{ background: 'rgba(255,255,255,0.05)', color: '#9ca3af', border: '1px solid rgba(255,255,255,0.08)' }}>
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Yuklab olish</span>
          </button>
          <button
            onClick={runCode}
            disabled={isRunning}
            className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-bold transition-all disabled:opacity-50"
            style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', color: 'white' }}
          >
            {isRunning ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4" />}
            Ishga tushir
          </button>
        </div>
      </div>

      {/* Editor + Preview */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Code Editor */}
        <div className="flex-1 flex flex-col overflow-hidden" style={{ minHeight: '200px' }}>
          <div className="flex items-center gap-2 px-3 py-2 text-xs text-gray-500 flex-shrink-0"
            style={{ background: '#0d1117', borderBottom: '1px solid rgba(99,102,241,0.1)' }}>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 opacity-80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 opacity-80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 opacity-80" />
            </div>
            <span className="code-font">
              {selectedTemplate === 'html' ? 'index.html' :
                selectedTemplate === 'css' ? 'animation.html' :
                  selectedTemplate === 'javascript' ? 'game.html' : 'App.jsx'}
            </span>
          </div>

          <div className="relative flex-1 overflow-hidden">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="absolute inset-0 w-full h-full p-4 code-font text-sm resize-none outline-none z-10"
              style={{
                background: 'transparent',
                color: 'transparent',
                caretColor: '#6366f1',
                lineHeight: '1.6',
                tabSize: 2,
              }}
              onKeyDown={(e) => {
                if (e.key === 'Tab') {
                  e.preventDefault();
                  const start = e.currentTarget.selectionStart;
                  const end = e.currentTarget.selectionEnd;
                  const newCode = code.substring(0, start) + '  ' + code.substring(end);
                  setCode(newCode);
                  setTimeout(() => {
                    e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + 2;
                  }, 0);
                }
              }}
              spellCheck={false}
            />
            <div className="absolute inset-0 overflow-auto pointer-events-none">
              <SyntaxHighlighter
                style={oneDark as Record<string, React.CSSProperties>}
                language={templates[selectedTemplate].lang === 'jsx' ? 'jsx' : 'html'}
                showLineNumbers
                customStyle={{
                  margin: 0,
                  borderRadius: 0,
                  fontSize: '0.85rem',
                  background: '#0d1117',
                  lineHeight: '1.6',
                  minHeight: '100%',
                  padding: '1rem',
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px" style={{ background: 'rgba(99,102,241,0.15)' }} />
        <div className="lg:hidden h-px" style={{ background: 'rgba(99,102,241,0.15)' }} />

        {/* Preview */}
        <div className="flex-1 flex flex-col overflow-hidden" style={{ minHeight: '200px' }}>
          <div className="flex items-center gap-2 px-3 py-2 text-xs text-gray-500 flex-shrink-0"
            style={{ background: '#0f0f1a', borderBottom: '1px solid rgba(99,102,241,0.1)' }}>
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span>Natija ko'rinishi</span>
            {output && <span className="ml-auto text-green-400">✓ Bajarildi</span>}
          </div>

          {output ? (
            <iframe
              ref={iframeRef}
              srcDoc={output}
              className="flex-1 w-full border-0"
              title="Preview"
              sandbox="allow-scripts allow-forms"
              style={{ background: 'white' }}
            />
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center"
              style={{ background: '#0f0f1a' }}>
              <div className="text-6xl mb-4 opacity-30">▶</div>
              <p className="text-gray-500 text-sm text-center">
                "Ishga tushir" tugmasini bosib<br />
                kodni ko'ring
              </p>
              <button
                onClick={runCode}
                className="mt-4 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white"
                style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)' }}
              >
                <Play className="w-4 h-4" />
                Ishga tushirish
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
