// ── Active nav link ──
(function () {
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === page) link.classList.add('active');
    });
})();

// ── Fade-in on scroll ──
(function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
})();

// ── Typewriter ──
function typeWriter(elementId, text, speed = 80) {
    const el = document.getElementById(elementId);
    if (!el) return;
    el.textContent = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    setTimeout(type, 400);
}