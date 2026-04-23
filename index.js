    const cursor = document.getElementById('cursor');
    const trail = document.getElementById('cursorTrail');
    let mx = 0, my = 0;

    document.addEventListener('mousemove', (e) => {
        mx = e.clientX; my = e.clientY;
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
        setTimeout(() => {
        trail.style.left = mx + 'px';
        trail.style.top = my + 'px';
        }, 80);
    });

    document.addEventListener('mousedown', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.8)';
        trail.style.transform = 'translate(-50%, -50%) scale(0.6)';
    });
    document.addEventListener('mouseup', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        trail.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // Progress bar
    const progressBar = document.getElementById('progressBar');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = (scrollTop / docHeight) * 100;
        progressBar.style.width = pct + '%';
    });

    // Scroll-reveal phases
    const phases = document.querySelectorAll('.phase');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
        });
    }, { threshold: 0.15 });

    phases.forEach(p => observer.observe(p));