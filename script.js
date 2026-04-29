// 1. Window Close Logic (with animation)
function closeWin(id) {
    const win = document.getElementById(id);
    win.style.opacity = '0';
    win.style.transform = 'scale(0.95)';
    setTimeout(() => {
        win.style.display = 'none';
    }, 300);
}

// 2. Local Date & Clock Logic
function updateClock() {
    const now = new Date();
    document.getElementById('time').innerText = now.toLocaleTimeString('en-US', { hour12: false });
    
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    document.getElementById('date').innerText = now.toLocaleDateString('en-US', options).toUpperCase();
}
setInterval(updateClock, 1000);
updateClock();

// 3. Reactor Uptime Logic
let startTime = Date.now();
function updateUptime() {
    const now = Date.now();
    const diff = Math.floor((now - startTime) / 1000);
    
    const hours = String(Math.floor(diff / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((diff % 3600) / 60)).padStart(2, '0');
    const seconds = String(diff % 60).padStart(2, '0');
    
    document.getElementById('uptime').innerText = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateUptime, 1000);
updateUptime();

// 4. Random Quote Generator
const quotes = [
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { text: "Programs must be written for people to read.", author: "Harold Abelson" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "It's not a bug, it's an undocumented feature.", author: "Anonymous" }
];

function loadQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote-text').innerText = `"${randomQuote.text}"`;
    document.getElementById('quote-author').innerText = `- ${randomQuote.author}`;
}
loadQuote();
