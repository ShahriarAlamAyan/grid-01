document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Global Window Management
    // Attaching to window so HTML onclicks work regardless of scope
    window.closeWin = (id) => {
        const win = document.getElementById(id);
        if (win) {
            win.style.opacity = '0';
            win.style.transform = 'scale(0.9) translateY(20px)';
            setTimeout(() => {
                win.style.display = 'none';
            }, 300);
        }
    };

    // 2. Real-time Clock & Date
    const timeEl = document.getElementById('time');
    const dateEl = document.getElementById('date');
    
    function updateClock() {
        if (!timeEl || !dateEl) return;
        const now = new Date();
        
        // 24-hour format for that pro-linux vibe
        timeEl.innerText = now.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        });
        
        const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
        dateEl.innerText = now.toLocaleDateString('en-US', options).replace(/,/g, '');
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 3. System Uptime Tracker
    const uptimeEl = document.getElementById('uptime');
    const startTime = Date.now();

    function updateUptime() {
        if (!uptimeEl) return;
        const diff = Math.floor((Date.now() - startTime) / 1000);
        
        const hrs = String(Math.floor(diff / 3600)).padStart(2, '0');
        const mins = String(Math.floor((diff % 3600) / 60)).padStart(2, '0');
        const secs = String(diff % 60).padStart(2, '0');
        
        uptimeEl.innerText = `${hrs}:${mins}:${secs}`;
    }
    setInterval(updateUptime, 1000);

    // 4. Randomized Market Fluctuations
    function simulateMarket() {
        const marketRows = document.querySelectorAll('#market-data div span:last-child');
        marketRows.forEach(span => {
            const isUp = Math.random() > 0.4; // 60% chance of being "up"
            span.innerText = isUp ? '▲' : '▼';
            span.className = isUp ? 'text-green-400' : 'text-red-400';
        });
    }
    setInterval(simulateMarket, 4000);

    // 5. Dynamic Quote Engine
    const quotes = [
        { t: "RTFM: Read The F***ing Manual.", a: "SysAdmin" },
        { t: "Move fast and break things.", a: "Zuck" },
        { t: "The grid. A digital frontier.", a: "Flynn" }
    ];

    const qText = document.getElementById('quote-text');
    const qAuth = document.getElementById('quote-author');

    function loadNewQuote() {
        if (qText && qAuth) {
            const random = quotes[Math.floor(Math.random() * quotes.length)];
            qText.innerText = `"${random.t}"`;
            qAuth.innerText = `- ${random.a}`;
        }
    }
    loadNewQuote();
});

