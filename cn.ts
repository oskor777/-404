export interface Topic {
  id: string;
  title: string;
  titleUz: string;
  icon: string;
  color: string;
  level: 'Boshlang\'ich' | 'O\'rta' | 'Yuqori';
  lessons: Lesson[];
  description: string;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  code?: string;
  language?: string;
  quiz?: QuizQuestion[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export const topics: Topic[] = [
  {
    id: 'html',
    title: 'HTML',
    titleUz: 'HTML Asoslari',
    icon: '🌐',
    color: '#e34c26',
    level: "Boshlang'ich",
    description: 'Veb-sahifalarning asosi - HTML ni o\'rganing',
    lessons: [
      {
        id: 'html-1',
        title: 'HTML nima?',
        content: `# HTML nima?

HTML (HyperText Markup Language) - bu veb-sahifalar yaratish uchun ishlatiladigan belgilash tili.

## HTML ning asosiy xususiyatlari:
- **Tuzilish** - Sahifaning skelet/tuzilishini yaratadi
- **Semantika** - Mazmunning ma'nosini belgilaydi
- **Universal** - Barcha brauzerlar qo'llab-quvvatlaydi

## HTML qanday ishlaydi?
HTML teglar yordamida ishlaydi. Har bir teg \`<>\` ichida yoziladi.

\`\`\`html
<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Mening birinchi sahifam</title>
</head>
<body>
    <h1>Salom Dunyo!</h1>
    <p>Bu mening birinchi veb-sahifam.</p>
</body>
</html>
\`\`\`

## Muhim teglar:
- \`<h1>\` - \`<h6>\` - Sarlavhalar
- \`<p>\` - Paragraf
- \`<div>\` - Bo'lim (konteyner)
- \`<span>\` - Inline konteyner`,
        code: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mening Sahifam</title>
</head>
<body>
    <h1>Salom, Dunyo! 👋</h1>
    <h2>Bu kichik sarlavha</h2>
    <p>Bu oddiy paragraf matni.</p>
    <p>Bu <strong>qalin</strong> va <em>qiya</em> matn.</p>
    
    <div>
        <h3>Ro'yxat:</h3>
        <ul>
            <li>Birinchi element</li>
            <li>Ikkinchi element</li>
            <li>Uchinchi element</li>
        </ul>
    </div>
</body>
</html>`,
        language: 'html',
        quiz: [
          {
            question: "HTML ning to'liq nomi nima?",
            options: [
              "HyperText Markup Language",
              "High Tech Modern Language",
              "Hyper Transfer Markup Language",
              "HyperText Modern Layout"
            ],
            correct: 0,
            explanation: "HTML - HyperText Markup Language degan ma'noni bildiradi. Bu veb-sahifalar yaratish uchun ishlatiladigan belgilash tili."
          },
          {
            question: "HTML sarlavha teglari qaysilar?",
            options: [
              "<title> dan <head> gacha",
              "<h1> dan <h6> gacha",
              "<p> dan <div> gacha",
              "<header> dan <footer> gacha"
            ],
            correct: 1,
            explanation: "HTML da sarlavhalar <h1> dan <h6> gacha bo'lgan teglar yordamida yaratiladi. <h1> eng katta, <h6> eng kichik sarlavha."
          }
        ]
      },
      {
        id: 'html-2',
        title: 'HTML Formalar',
        content: `# HTML Formalar

Formalar foydalanuvchi ma'lumotlarini to'plash uchun ishlatiladi.

## Asosiy form elementlari:

\`\`\`html
<form action="/submit" method="POST">
    <!-- Matn kiritish -->
    <input type="text" placeholder="Ismingiz">
    
    <!-- Email kiritish -->
    <input type="email" placeholder="Email">
    
    <!-- Parol -->
    <input type="password" placeholder="Parol">
    
    <!-- Tugma -->
    <button type="submit">Yuborish</button>
</form>
\`\`\`

## Input turlari:
- \`text\` - Oddiy matn
- \`email\` - Email manzil
- \`password\` - Parol (yashirilgan)
- \`number\` - Raqam
- \`checkbox\` - Belgilash katagi
- \`radio\` - Radio tugma
- \`file\` - Fayl yuklash`,
        code: `<!DOCTYPE html>
<html lang="uz">
<head>
    <title>Ro'yxatdan o'tish</title>
    <style>
        body { font-family: Arial; max-width: 400px; margin: 50px auto; }
        input, button { display: block; width: 100%; margin: 10px 0; padding: 10px; }
        button { background: #6366f1; color: white; border: none; cursor: pointer; }
    </style>
</head>
<body>
    <h2>Ro'yxatdan o'tish</h2>
    <form>
        <label>Ism:</label>
        <input type="text" placeholder="Ismingizni kiriting">
        
        <label>Email:</label>
        <input type="email" placeholder="email@example.com">
        
        <label>Parol:</label>
        <input type="password" placeholder="Parol">
        
        <label>Yoshi:</label>
        <input type="number" min="1" max="100">
        
        <label>
            <input type="checkbox"> Shartlarga roziman
        </label>
        
        <button type="submit">Ro'yxatdan o'tish</button>
    </form>
</body>
</html>`,
        language: 'html',
        quiz: [
          {
            question: "Parol uchun qaysi input type ishlatiladi?",
            options: ["text", "password", "secret", "hidden"],
            correct: 1,
            explanation: "Parol uchun type='password' ishlatiladi. Bu matnni yulduzcha (*) yoki nuqtalar bilan yashiradi."
          }
        ]
      }
    ]
  },
  {
    id: 'css',
    title: 'CSS',
    titleUz: 'CSS Dizayn',
    icon: '🎨',
    color: '#264de4',
    level: "Boshlang'ich",
    description: 'Veb-sahifalarni chiroyli ko\'rinishga keltiring',
    lessons: [
      {
        id: 'css-1',
        title: 'CSS asoslari',
        content: `# CSS (Cascading Style Sheets)

CSS - veb-sahifalarni bezash va stillash uchun ishlatiladigan til.

## CSS qo'shish usullari:

### 1. Inline CSS:
\`\`\`html
<p style="color: red; font-size: 20px;">Qizil matn</p>
\`\`\`

### 2. Internal CSS:
\`\`\`html
<style>
    p { color: blue; }
</style>
\`\`\`

### 3. External CSS:
\`\`\`html
<link rel="stylesheet" href="style.css">
\`\`\`

## Asosiy xususiyatlar:
- **color** - Matn rangi
- **background-color** - Fon rangi
- **font-size** - Shrift o'lchami
- **margin** - Tashqi bo'sh joy
- **padding** - Ichki bo'sh joy
- **border** - Chegara`,
        code: `<!DOCTYPE html>
<html>
<head>
<style>
    body {
        font-family: 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .card {
        background: white;
        border-radius: 20px;
        padding: 40px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        max-width: 400px;
        text-align: center;
    }
    
    h1 {
        color: #6366f1;
        font-size: 2rem;
        margin-bottom: 10px;
    }
    
    p {
        color: #666;
        line-height: 1.8;
    }
    
    .btn {
        background: linear-gradient(135deg, #6366f1, #a855f7);
        color: white;
        border: none;
        padding: 12px 30px;
        border-radius: 50px;
        cursor: pointer;
        font-size: 1rem;
        margin-top: 20px;
        transition: transform 0.3s ease;
    }
    
    .btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(99,102,241,0.5);
    }
</style>
</head>
<body>
    <div class="card">
        <h1>CSS Sehri ✨</h1>
        <p>CSS yordamida oddiy HTML sahifani professional dizaynga aylantirish mumkin!</p>
        <button class="btn">Batafsil o'rganish</button>
    </div>
</body>
</html>`,
        language: 'css',
        quiz: [
          {
            question: "CSS da matn rangini o'zgartirish uchun qaysi xususiyat ishlatiladi?",
            options: ["text-color", "font-color", "color", "text-style"],
            correct: 2,
            explanation: "CSS da matn rangini o'zgartirish uchun 'color' xususiyati ishlatiladi. Masalan: color: red; yoki color: #ff0000;"
          },
          {
            question: "CSS Flexbox da elementlarni markazlash uchun qaysi qiymat ishlatiladi?",
            options: ["center-items", "justify: center", "justify-content: center", "align: middle"],
            correct: 2,
            explanation: "Flexbox da elementlarni gorizontal markazlash uchun 'justify-content: center' ishlatiladi."
          }
        ]
      },
      {
        id: 'css-2',
        title: 'CSS Flexbox va Grid',
        content: `# CSS Flexbox va Grid

## Flexbox - 1 o'lchamli joylashuv:
\`\`\`css
.container {
    display: flex;
    justify-content: center;   /* gorizontal */
    align-items: center;       /* vertikal */
    gap: 20px;                 /* bo'shliq */
    flex-wrap: wrap;           /* o'rash */
}
\`\`\`

## CSS Grid - 2 o'lchamli joylashuv:
\`\`\`css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}
\`\`\`

## Qachon ishlatish:
- **Flexbox** - Qator yoki ustun bo'ylab joylashtirishda
- **Grid** - To'r shaklida joylashtirishda (2D)`,
        code: `<!DOCTYPE html>
<html>
<head>
<style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial; background: #0f0f1a; color: white; padding: 20px; }
    
    h2 { text-align: center; margin: 20px 0; color: #6366f1; }
    
    /* FLEXBOX */
    .flex-demo {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 15px;
        flex-wrap: wrap;
        margin-bottom: 30px;
    }
    
    .flex-item {
        background: linear-gradient(135deg, #6366f1, #a855f7);
        width: 100px;
        height: 100px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
    }
    
    /* GRID */
    .grid-demo {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 15px;
    }
    
    .grid-item {
        background: linear-gradient(135deg, #06b6d4, #3b82f6);
        padding: 20px;
        border-radius: 12px;
        text-align: center;
    }
</style>
</head>
<body>
    <h2>🔵 Flexbox</h2>
    <div class="flex-demo">
        <div class="flex-item">1</div>
        <div class="flex-item">2</div>
        <div class="flex-item">3</div>
        <div class="flex-item">4</div>
        <div class="flex-item">5</div>
    </div>
    
    <h2>🟣 Grid</h2>
    <div class="grid-demo">
        <div class="grid-item">Grid 1</div>
        <div class="grid-item">Grid 2</div>
        <div class="grid-item">Grid 3</div>
        <div class="grid-item">Grid 4</div>
        <div class="grid-item">Grid 5</div>
        <div class="grid-item">Grid 6</div>
    </div>
</body>
</html>`,
        language: 'css'
      }
    ]
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    titleUz: 'JavaScript',
    icon: '⚡',
    color: '#f7df1e',
    level: 'O\'rta',
    description: 'Veb-sahifalarni interaktiv qiling',
    lessons: [
      {
        id: 'js-1',
        title: 'JavaScript asoslari',
        content: `# JavaScript Asoslari

JavaScript - brauzerda ishlaydigan dasturlash tili.

## O'zgaruvchilar:
\`\`\`javascript
// let - o'zgaruvchan
let ism = "Ali";
let yosh = 20;

// const - o'zgarmas
const PI = 3.14;

// var - eski usul (tavsiya etilmaydi)
var eski = "eski usul";
\`\`\`

## Ma'lumot turlari:
\`\`\`javascript
let matn = "Salom";        // String
let raqam = 42;            // Number
let mantiqiy = true;       // Boolean
let ro'yxat = [1, 2, 3];   // Array
let ob'ekt = {ism: "Ali"}; // Object
let yo'q = null;           // Null
let aniqlanmagan;          // Undefined
\`\`\`

## Funktsiyalar:
\`\`\`javascript
// Oddiy funktsiya
function salom(ism) {
    return "Salom, " + ism + "!";
}

// Arrow funktsiya
const qo'shish = (a, b) => a + b;

console.log(salom("Ali")); // "Salom, Ali!"
console.log(qo'shish(5, 3)); // 8
\`\`\``,
        code: `// JavaScript asoslari - amaliy misol

// O'zgaruvchilar
let foydalanuvchi = "Ali Valiyev";
let yosh = 25;
const SAYT = "SBS-404";

// Funktsiya
function xushomad(ism, yosh) {
    if (yosh >= 18) {
        return \`Salom \${ism}! Siz \${yosh} yoshdasiz. Xush kelibsiz!\`;
    } else {
        return \`Salom \${ism}! Siz hali yoshsiz.\`;
    }
}

// Array usullari
const dasturchilar = ["Ali", "Vali", "Sardor", "Jasur"];
const uzunDasturchilar = dasturchilar.filter(ism => ism.length > 3);
const katta = dasturchilar.map(ism => ism.toUpperCase());

console.log(xushomad(foydalanuvchi, yosh));
console.log("Dasturchilar:", dasturchilar);
console.log("Uzun ismlar:", uzunDasturchilar);
console.log("Katta harf:", katta);

// Object
const kurs = {
    nomi: SAYT,
    darslar: 50,
    til: ["HTML", "CSS", "JavaScript", "React"],
    ma'lumot: function() {
        return \`\${this.nomi} kursida \${this.darslar} ta dars bor\`;
    }
};

console.log(kurs.ma'lumot());
console.log("Tillar:", kurs.til.join(", "));`,
        language: 'javascript',
        quiz: [
          {
            question: "JavaScript da o'zgarmas o'zgaruvchi uchun qaysi kalit so'z ishlatiladi?",
            options: ["var", "let", "const", "static"],
            correct: 2,
            explanation: "'const' kalit so'zi o'zgarmas (immutable) o'zgaruvchi yaratish uchun ishlatiladi. Uning qiymati bir marta belgilanadi va o'zgartirib bo'lmaydi."
          },
          {
            question: "Array elementlarini filtrlash uchun qaysi metod ishlatiladi?",
            options: ["array.find()", "array.filter()", "array.sort()", "array.search()"],
            correct: 1,
            explanation: "array.filter() metodi shartga mos keladigan elementlarni ajratib olish uchun ishlatiladi va yangi array qaytaradi."
          }
        ]
      },
      {
        id: 'js-2',
        title: 'DOM Manipulation',
        content: `# DOM - Document Object Model

DOM - HTML elementlari bilan JavaScript orqali ishlash imkonini beradi.

## Element tanlash:
\`\`\`javascript
// ID bo'yicha
const element = document.getElementById("myId");

// Class bo'yicha
const elements = document.querySelectorAll(".myClass");

// Tag bo'yicha
const divs = document.getElementsByTagName("div");

// CSS selector
const first = document.querySelector("#nav > li:first-child");
\`\`\`

## Element o'zgartirish:
\`\`\`javascript
// Matnni o'zgartirish
element.textContent = "Yangi matn";
element.innerHTML = "<strong>Qalin matn</strong>";

// Stil o'zgartirish
element.style.color = "red";
element.style.display = "none";

// Class qo'shish/olib tashlash
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("open");
\`\`\`

## Hodisalar (Events):
\`\`\`javascript
button.addEventListener("click", function() {
    alert("Tugma bosildi!");
});
\`\`\``,
        code: `<!DOCTYPE html>
<html>
<head>
<style>
    body { font-family: Arial; background: #0f0f1a; color: white; padding: 30px; }
    .counter { font-size: 4rem; text-align: center; color: #6366f1; margin: 20px; }
    .buttons { display: flex; gap: 10px; justify-content: center; }
    button {
        padding: 10px 25px; border: none; border-radius: 8px;
        cursor: pointer; font-size: 1.2rem; transition: all 0.2s;
    }
    .btn-minus { background: #ef4444; color: white; }
    .btn-plus { background: #22c55e; color: white; }
    .btn-reset { background: #6366f1; color: white; }
    button:hover { transform: scale(1.1); }
    .tasks { margin-top: 30px; max-width: 400px; margin-inline: auto; }
    input { width: 100%; padding: 10px; background: #1e1e2e; border: 1px solid #6366f1;
            color: white; border-radius: 8px; margin-bottom: 10px; }
    .task { background: #1e1e2e; padding: 10px 15px; border-radius: 8px;
            margin: 5px 0; display: flex; justify-content: space-between; }
    .delete { background: #ef4444; border: none; color: white; 
              border-radius: 5px; cursor: pointer; padding: 3px 8px; }
</style>
</head>
<body>
    <h2 style="text-align:center;color:#6366f1">⚡ DOM Manipulation</h2>
    
    <!-- Counter -->
    <div class="counter" id="count">0</div>
    <div class="buttons">
        <button class="btn-minus" onclick="count(-1)">−</button>
        <button class="btn-reset" onclick="reset()">↺</button>
        <button class="btn-plus" onclick="count(1)">+</button>
    </div>
    
    <!-- Todo list -->
    <div class="tasks">
        <h3>📝 Vazifalar ro'yxati:</h3>
        <input type="text" id="taskInput" placeholder="Yangi vazifa qo'shing..." 
               onkeypress="if(event.key==='Enter') addTask()">
        <div id="taskList"></div>
    </div>

    <script>
        let counter = 0;
        
        function count(val) {
            counter += val;
            document.getElementById('count').textContent = counter;
            document.getElementById('count').style.color = 
                counter > 0 ? '#22c55e' : counter < 0 ? '#ef4444' : '#6366f1';
        }
        
        function reset() {
            counter = 0;
            document.getElementById('count').textContent = 0;
            document.getElementById('count').style.color = '#6366f1';
        }
        
        function addTask() {
            const input = document.getElementById('taskInput');
            const text = input.value.trim();
            if (!text) return;
            
            const task = document.createElement('div');
            task.className = 'task';
            task.innerHTML = \`<span>\${text}</span>
                <button class="delete" onclick="this.parentElement.remove()">🗑</button>\`;
            document.getElementById('taskList').appendChild(task);
            input.value = '';
        }
    </script>
</body>
</html>`,
        language: 'javascript'
      }
    ]
  },
  {
    id: 'react',
    title: 'React',
    titleUz: 'React.js',
    icon: '⚛️',
    color: '#61dafb',
    level: 'O\'rta',
    description: 'Zamonaviy UI kutubxonasini o\'rganing',
    lessons: [
      {
        id: 'react-1',
        title: 'React asoslari',
        content: `# React - UI Kutubxonasi

React - Facebook tomonidan yaratilgan JavaScript kutubxonasi.

## React o'rnatish:
\`\`\`bash
npx create-react-app my-app
# yoki
npm create vite@latest my-app -- --template react
\`\`\`

## Birinchi Component:
\`\`\`jsx
// Funktsional component
function Salom({ ism }) {
    return (
        <div>
            <h1>Salom, {ism}!</h1>
            <p>React da yozilgan komponent</p>
        </div>
    );
}

// Ishlatish
function App() {
    return <Salom ism="Ali" />;
}
\`\`\`

## JSX nima?
JSX - JavaScript va HTML aralashmasi:
\`\`\`jsx
const element = (
    <div className="container">
        <h1 style={{ color: 'blue' }}>Sarlavha</h1>
        <p>{2 + 2} = 4</p>
    </div>
);
\`\`\`

## useState - holat boshqarish:
\`\`\`jsx
import { useState } from 'react';

function Hisoblagich() {
    const [son, setSon] = useState(0);
    
    return (
        <div>
            <p>Son: {son}</p>
            <button onClick={() => setSon(son + 1)}>+1</button>
        </div>
    );
}
\`\`\``,
        code: `import { useState, useEffect } from 'react';

// Oddiy komponent
function Card({ title, desc, icon }) {
    return (
        <div style={{
            background: 'linear-gradient(135deg, #1e1b4b, #1e1a3a)',
            border: '1px solid rgba(99,102,241,0.3)',
            borderRadius: '16px',
            padding: '20px',
            margin: '10px',
            flex: '1',
            minWidth: '200px'
        }}>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{icon}</div>
            <h3 style={{ color: '#6366f1', marginBottom: '8px' }}>{title}</h3>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>{desc}</p>
        </div>
    );
}

// Hisoblagich komponent
function Counter() {
    const [count, setCount] = useState(0);
    const [history, setHistory] = useState([]);
    
    const addCount = (val) => {
        setCount(prev => prev + val);
        setHistory(prev => [...prev, { val, time: new Date().toLocaleTimeString() }]);
    };
    
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1 style={{ 
                fontSize: '4rem', 
                color: count > 0 ? '#22c55e' : count < 0 ? '#ef4444' : '#6366f1'
            }}>
                {count}
            </h1>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <button onClick={() => addCount(-1)} 
                    style={{ padding: '10px 20px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1.2rem' }}>
                    −
                </button>
                <button onClick={() => setCount(0)} 
                    style={{ padding: '10px 20px', background: '#6366f1', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                    Reset
                </button>
                <button onClick={() => addCount(1)} 
                    style={{ padding: '10px 20px', background: '#22c55e', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1.2rem' }}>
                    +
                </button>
            </div>
            <div style={{ marginTop: '15px', maxHeight: '100px', overflowY: 'auto' }}>
                {history.slice(-5).reverse().map((h, i) => (
                    <div key={i} style={{ color: h.val > 0 ? '#22c55e' : '#ef4444', fontSize: '0.8rem' }}>
                        {h.val > 0 ? '+' : ''}{h.val} ({h.time})
                    </div>
                ))}
            </div>
        </div>
    );
}

// Asosiy App
export default function App() {
    return (
        <div style={{ fontFamily: 'Arial', background: '#0a0a0f', minHeight: '100vh', color: 'white', padding: '20px' }}>
            <h1 style={{ textAlign: 'center', color: '#61dafb', marginBottom: '30px' }}>
                ⚛️ React Misoli
            </h1>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '30px' }}>
                <Card icon="🔵" title="Components" desc="UI qismlarini alohida komponentlarga bo'ling" />
                <Card icon="⚡" title="State" desc="useState bilan holatni boshqaring" />
                <Card icon="🔄" title="Props" desc="Komponentlar o'rtasida ma'lumot uzating" />
            </div>
            
            <h2 style={{ textAlign: 'center', color: '#a855f7', marginBottom: '10px' }}>
                useState misoli
            </h2>
            <Counter />
        </div>
    );
}`,
        language: 'jsx',
        quiz: [
          {
            question: "React da holat (state) boshqarish uchun qaysi hook ishlatiladi?",
            options: ["useEffect", "useState", "useContext", "useReducer"],
            correct: 1,
            explanation: "useState hook React da local state yaratish uchun ishlatiladi. U joriy qiymat va uni yangilash funktsiyasini qaytaradi."
          },
          {
            question: "React komponenti nima qaytarishi kerak?",
            options: ["CSS kod", "JSX element", "JSON ob'ekt", "SQL so'rov"],
            correct: 1,
            explanation: "React komponenti JSX (JavaScript XML) elementini qaytarishi kerak. JSX HTML ga o'xshash sintaksis bo'lib, JavaScript ichida HTML yozish imkonini beradi."
          }
        ]
      },
      {
        id: 'react-2',
        title: 'React Hooks',
        content: `# React Hooks

Hooks - React 16.8 dan kiritilgan funktsiyalar.

## useEffect - Yon ta'sirlar:
\`\`\`jsx
useEffect(() => {
    // Component yuklanganida bajariladi
    document.title = "Yangi sarlavha";
    
    // Tozalash funktsiyasi
    return () => {
        document.title = "Asl sarlavha";
    };
}, []); // [] - faqat bir marta

useEffect(() => {
    // 'count' o'zgarganda bajariladi
    console.log("Count:", count);
}, [count]);
\`\`\`

## useContext - Global holat:
\`\`\`jsx
const ThemeContext = createContext('light');

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <Child />
        </ThemeContext.Provider>
    );
}

function Child() {
    const theme = useContext(ThemeContext);
    return <div>Tema: {theme}</div>;
}
\`\`\`

## Custom Hooks:
\`\`\`jsx
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(
        () => JSON.parse(localStorage.getItem(key)) || initialValue
    );
    
    const setStored = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };
    
    return [value, setStored];
}
\`\`\``,
        code: `import { useState, useEffect, useCallback } from 'react';

// Custom hook - API ma'lumotlarini olish
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => { setData(data); setLoading(false); })
            .catch(err => { setError(err.message); setLoading(false); });
    }, [url]);
    
    return { data, loading, error };
}

// Timer komponenti
function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);
    
    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setSeconds(s => s + 1);
            }, 1000);
        }
        return () => clearInterval(interval); // Tozalash
    }, [running]);
    
    const format = (s) => {
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return \`\${m.toString().padStart(2,'0')}:\${sec.toString().padStart(2,'0')}\`;
    };
    
    return (
        <div style={{ textAlign: 'center', padding: '20px', 
            background: '#1e1e2e', borderRadius: '16px', margin: '10px' }}>
            <h3 style={{ color: '#a855f7' }}>⏱ Taymer</h3>
            <div style={{ fontSize: '3rem', color: '#6366f1', fontFamily: 'monospace' }}>
                {format(seconds)}
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
                <button onClick={() => setRunning(!running)}
                    style={{ padding: '8px 20px', background: running ? '#ef4444' : '#22c55e',
                        color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                    {running ? '⏸ To\'xtat' : '▶ Boshlash'}
                </button>
                <button onClick={() => { setSeconds(0); setRunning(false); }}
                    style={{ padding: '8px 20px', background: '#6366f1',
                        color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                    ↺ Reset
                </button>
            </div>
        </div>
    );
}

export default function App() {
    const [darkMode, setDarkMode] = useState(true);
    
    return (
        <div style={{ 
            fontFamily: 'Arial', 
            background: darkMode ? '#0a0a0f' : '#f0f0ff',
            color: darkMode ? 'white' : 'black',
            minHeight: '100vh', padding: '20px',
            transition: 'all 0.3s ease'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ color: '#6366f1' }}>⚛️ React Hooks</h1>
                <button onClick={() => setDarkMode(!darkMode)}
                    style={{ padding: '8px 16px', background: '#6366f1', color: 'white',
                        border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                    {darkMode ? '☀️ Yorug\'' : '🌙 Qorong\'i'}
                </button>
            </div>
            <Timer />
        </div>
    );
}`,
        language: 'jsx'
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend',
    titleUz: 'Node.js & Express',
    icon: '🖥️',
    color: '#68a063',
    level: 'Yuqori',
    description: 'Server tomoni dasturlashni o\'rganing',
    lessons: [
      {
        id: 'backend-1',
        title: 'Node.js va Express asoslari',
        content: `# Node.js va Express

Node.js - JavaScript ni server tomonda ishlatish imkonini beradi.

## O'rnatish:
\`\`\`bash
npm init -y
npm install express
\`\`\`

## Birinchi server:
\`\`\`javascript
const express = require('express');
const app = express();

app.use(express.json()); // JSON body parser

// GET so'rov
app.get('/', (req, res) => {
    res.json({ 
        xabar: 'Salom, Dunyo!',
        sayt: 'SBS-404'
    });
});

// POST so'rov
app.post('/foydalanuvchilar', (req, res) => {
    const { ism, email } = req.body;
    res.status(201).json({ 
        id: Date.now(),
        ism,
        email 
    });
});

// Serverni ishga tushirish
app.listen(3000, () => {
    console.log('Server 3000-portda ishlamoqda');
});
\`\`\`

## REST API metodlari:
- **GET** - Ma'lumot olish
- **POST** - Ma'lumot yaratish
- **PUT** - Ma'lumot yangilash
- **DELETE** - Ma'lumot o'chirish`,
        code: `// Node.js + Express REST API misoli
const express = require('express');
const app = express();

app.use(express.json());

// Ma'lumotlar bazasi o'rniga massiv (test uchun)
let foydalanuvchilar = [
    { id: 1, ism: "Ali Valiyev", email: "ali@sbs404.uz", rol: "admin" },
    { id: 2, ism: "Vali Karimov", email: "vali@sbs404.uz", rol: "user" },
    { id: 3, ism: "Sardor Rahimov", email: "sardor@sbs404.uz", rol: "user" }
];

// Middleware - so'rovni log qilish
app.use((req, res, next) => {
    console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.path}\`);
    next();
});

// GET - Barcha foydalanuvchilar
app.get('/api/users', (req, res) => {
    const { rol } = req.query;
    
    if (rol) {
        const filtered = foydalanuvchilar.filter(u => u.rol === rol);
        return res.json({ count: filtered.length, data: filtered });
    }
    
    res.json({ count: foydalanuvchilar.length, data: foydalanuvchilar });
});

// GET - Bitta foydalanuvchi
app.get('/api/users/:id', (req, res) => {
    const user = foydalanuvchilar.find(u => u.id === parseInt(req.params.id));
    
    if (!user) {
        return res.status(404).json({ xato: "Foydalanuvchi topilmadi" });
    }
    
    res.json(user);
});

// POST - Yangi foydalanuvchi
app.post('/api/users', (req, res) => {
    const { ism, email } = req.body;
    
    if (!ism || !email) {
        return res.status(400).json({ xato: "Ism va email majburiy" });
    }
    
    const yangi = {
        id: foydalanuvchilar.length + 1,
        ism,
        email,
        rol: 'user',
        yaratilgan: new Date().toISOString()
    };
    
    foydalanuvchilar.push(yangi);
    res.status(201).json({ xabar: "Yaratildi!", data: yangi });
});

// PUT - Yangilash
app.put('/api/users/:id', (req, res) => {
    const index = foydalanuvchilar.findIndex(u => u.id === parseInt(req.params.id));
    
    if (index === -1) {
        return res.status(404).json({ xato: "Topilmadi" });
    }
    
    foydalanuvchilar[index] = { ...foydalanuvchilar[index], ...req.body };
    res.json({ xabar: "Yangilandi!", data: foydalanuvchilar[index] });
});

// DELETE - O'chirish
app.delete('/api/users/:id', (req, res) => {
    const index = foydalanuvchilar.findIndex(u => u.id === parseInt(req.params.id));
    
    if (index === -1) {
        return res.status(404).json({ xato: "Topilmadi" });
    }
    
    const ochirildi = foydalanuvchilar.splice(index, 1)[0];
    res.json({ xabar: "O'chirildi!", data: ochirildi });
});

app.listen(3000, () => console.log('🚀 Server ishlamoqda: http://localhost:3000'));`,
        language: 'javascript',
        quiz: [
          {
            question: "Node.js da yangi loyiha boshlash uchun qaysi buyruq ishlatiladi?",
            options: ["node init", "npm start", "npm init -y", "node create"],
            correct: 2,
            explanation: "'npm init -y' buyrug'i yangi Node.js loyihasini yaratadi va package.json faylini default qiymatlar bilan sozlaydi."
          },
          {
            question: "REST API da yangi resurs yaratish uchun qaysi HTTP metod ishlatiladi?",
            options: ["GET", "PUT", "POST", "PATCH"],
            correct: 2,
            explanation: "POST metodi yangi resurs yaratish uchun ishlatiladi. Odatda 201 Created status kodi bilan qaytariladi."
          }
        ]
      }
    ]
  },
  {
    id: 'database',
    title: 'Ma\'lumotlar Bazasi',
    titleUz: 'MongoDB & SQL',
    icon: '🗄️',
    color: '#4db33d',
    level: 'Yuqori',
    description: 'Ma\'lumotlarni saqlash va boshqarishni o\'rganing',
    lessons: [
      {
        id: 'db-1',
        title: 'MongoDB asoslari',
        content: `# MongoDB - NoSQL Ma'lumotlar Bazasi

MongoDB - JSON formatida ma'lumotlarni saqlaydigan NoSQL bazasi.

## Asosiy tushunchalar:
- **Database** - Ma'lumotlar bazasi
- **Collection** - Jadval o'rniga (JavaScript massivi kabi)
- **Document** - Qator o'rniga (JavaScript ob'ekti kabi)

## O'rnatish (Mongoose bilan):
\`\`\`bash
npm install mongoose
\`\`\`

## Mongoose bilan ishlash:
\`\`\`javascript
const mongoose = require('mongoose');

// Ulanish
await mongoose.connect('mongodb://localhost:27017/sbs404');

// Schema yaratish
const FoydalanuvchiSchema = new mongoose.Schema({
    ism: { type: String, required: true },
    email: { type: String, unique: true },
    yosh: Number,
    yaratilgan: { type: Date, default: Date.now }
});

// Model
const Foydalanuvchi = mongoose.model('Foydalanuvchi', FoydalanuvchiSchema);

// CRUD operatsiyalar
// Yaratish
const yangi = await Foydalanuvchi.create({ ism: "Ali", email: "ali@test.uz" });

// O'qish
const hammasi = await Foydalanuvchi.find();
const bitta = await Foydalanuvchi.findById(id);

// Yangilash
await Foydalanuvchi.findByIdAndUpdate(id, { ism: "Yangi ism" });

// O'chirish
await Foydalanuvchi.findByIdAndDelete(id);
\`\`\``,
        code: `// MongoDB + Mongoose to'liq misol
const mongoose = require('mongoose');
const express = require('express');

const app = express();
app.use(express.json());

// MongoDB ga ulanish
mongoose.connect('mongodb://localhost:27017/sbs404_db')
    .then(() => console.log('✅ MongoDB ga ulandi'))
    .catch(err => console.error('❌ Xato:', err));

// Product Schema
const ProductSchema = new mongoose.Schema({
    nomi: {
        type: String,
        required: [true, 'Mahsulot nomi majburiy'],
        trim: true,
        maxlength: 100
    },
    narxi: {
        type: Number,
        required: true,
        min: [0, 'Narx 0 dan kichik bo\\'lmasin']
    },
    kategoriya: {
        type: String,
        enum: ['elektronika', 'kiyim', 'oziq-ovqat'],
        default: 'elektronika'
    },
    mavjud: {
        type: Boolean,
        default: true
    },
    yaratilgan: {
        type: Date,
        default: Date.now
    }
});

// Virtual field
ProductSchema.virtual('narxiFormatted').get(function() {
    return \`\${this.narxi.toLocaleString()} so'm\`;
});

const Product = mongoose.model('Product', ProductSchema);

// API Routes
// GET - Barcha mahsulotlar (filter + sahifalash)
app.get('/api/products', async (req, res) => {
    try {
        const { kategoriya, sahifa = 1, limit = 10, sort = 'narxi' } = req.query;
        
        const filter = {};
        if (kategoriya) filter.kategoriya = kategoriya;
        
        const products = await Product
            .find(filter)
            .sort(sort)
            .skip((sahifa - 1) * limit)
            .limit(parseInt(limit));
            
        const total = await Product.countDocuments(filter);
        
        res.json({
            muvaffaqiyat: true,
            jami: total,
            sahifalar: Math.ceil(total / limit),
            data: products
        });
    } catch (error) {
        res.status(500).json({ xato: error.message });
    }
});

// POST - Yangi mahsulot
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ muvaffaqiyat: true, data: product });
    } catch (error) {
        res.status(400).json({ xato: error.message });
    }
});

app.listen(3000, () => console.log('🚀 Server ishlamoqda'));`,
        language: 'javascript',
        quiz: [
          {
            question: "MongoDB da jadval o'rniga nima ishlatiladi?",
            options: ["Table", "Sheet", "Collection", "Database"],
            correct: 2,
            explanation: "MongoDB da jadval (table) o'rniga 'Collection' ishlatiladi. Collection - bu documentlar to'plami."
          }
        ]
      }
    ]
  }
];

export const quickTopics = [
  { icon: '🌐', label: 'HTML', query: 'HTML nima va qanday ishlaydi?' },
  { icon: '🎨', label: 'CSS', query: 'CSS Flexbox ni tushuntir' },
  { icon: '⚡', label: 'JS', query: 'JavaScript async/await qanday?' },
  { icon: '⚛️', label: 'React', query: 'React useState hookini tushuntir' },
  { icon: '🖥️', label: 'Node.js', query: 'Node.js va Express API yaratish' },
  { icon: '🗄️', label: 'MongoDB', query: 'MongoDB Schema yaratish' },
  { icon: '🔧', label: 'Git', query: 'Git va GitHub asoslari' },
  { icon: '📱', label: 'Responsive', query: 'Responsive dizayn qanday qilinadi?' },
];

export const aiResponses: Record<string, string[]> = {
  salom: [
    "Salom! Men SBS-404 AI ustozi. Dasturlash bo'yicha savollaringizni bering! 🚀",
    "Assalomu alaykum! Qanday yordam bera olaman? HTML, CSS, JS, React yoki Backend haqida savol bering! 😊"
  ],
  html: [
    "HTML (HyperText Markup Language) - veb-sahifalar yaratish uchun asosiy til. Teglar yordamida sahifaning tuzilishini belgilaydi.\n\n**Asosiy teglar:**\n- `<html>` - Hujjat boshi\n- `<head>` - Meta-ma'lumotlar\n- `<body>` - Ko'rinadigan qism\n- `<h1>-<h6>` - Sarlavhalar\n- `<p>` - Paragraf\n- `<div>` - Bo'lim",
    "HTML o'rganishda eng muhim narsa - teglarni to'g'ri yopish! Har bir ochilgan teg (`<div>`) yopilishi (`</div>`) kerak."
  ],
  css: [
    "CSS (Cascading Style Sheets) - HTML elementlarini bezash tili.\n\n**Asosiy xususiyatlar:**\n```css\ncolor: red; /* Matn rangi */\nbackground: blue; /* Fon */\nmargin: 20px; /* Tashqi bo'shliq */\npadding: 10px; /* Ichki bo'shliq */\nborder: 1px solid black; /* Chegara */\n```",
    "CSS Flexbox juda qulay! `display: flex` qo'shsangiz, elementlarni osongina tartiblay olasiz. `justify-content: center` markazlashtiradi!"
  ],
  javascript: [
    "JavaScript - dinamik dasturlash tili. Veb-sahifalarni interaktiv qiladi!\n\n```javascript\n// O'zgaruvchilar\nconst ism = 'Ali';\nlet yosh = 20;\n\n// Funktsiya\nconst salom = (nom) => `Salom, ${nom}!`;\nconsole.log(salom(ism)); // Salom, Ali!\n```",
    "JavaScript da async/await juda muhim! API ga so'rov yuborishda:\n```javascript\nconst data = await fetch('/api/users');\nconst json = await data.json();\n```"
  ],
  react: [
    "React - Facebook yaratgan UI kutubxonasi. Komponentlar asosida ishlaydi!\n\n```jsx\nfunction Greeting({ name }) {\n    return <h1>Salom, {name}! ⚛️</h1>;\n}\n\n// Ishlatish:\n<Greeting name=\"Ali\" />\n```",
    "React Hooks - funktsional komponentlarda state va lifecycle ishlatish imkonini beradi:\n- `useState` - Holat saqlovchi\n- `useEffect` - Yon ta'sirlar\n- `useContext` - Global holat\n- `useMemo` - Optimallashtirish"
  ],
  backend: [
    "Backend - server tomoni dasturlash. Node.js + Express bilan tez API yaratish mumkin!\n\n```javascript\nconst app = express();\n\napp.get('/api/users', async (req, res) => {\n    const users = await User.find();\n    res.json(users);\n});\n\napp.listen(3000);\n```",
    "REST API yaratishda HTTP metodlarini to'g'ri ishlatish muhim:\n- **GET** - O'qish\n- **POST** - Yaratish\n- **PUT/PATCH** - Yangilash\n- **DELETE** - O'chirish"
  ],
  default: [
    "Qiziqarli savol! Bu haqida batafsil tushuntira olaman. Qaysi tilni o'rganmoqchisiz - HTML, CSS, JavaScript, React yoki Backend?",
    "Ajoyib! Dasturlash o'rganish jarayoningizda yordam berishdan xursandman. Aniq savol bersangiz, tezroq javob beray! 🎯",
    "Bu mavzu bo'yicha ko'p narsalar bor! Qaysi qismidan boshlashni xohlaysiz?",
    "Savolingiz uchun rahmat! Men SBS-404 AI ustoziman. HTML dan boshlab React gacha o'rgataman! 🚀"
  ]
};
