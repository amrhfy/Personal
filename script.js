document.addEventListener('DOMContentLoaded', () => {
    // Get all sections
    const sections = document.querySelectorAll('section');
    const navDots = document.getElementById('nav-dots');
    
    // Create navigation dots
    sections.forEach((section, index) => {
        const dot = document.createElement('div');
        dot.className = 'nav-dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            section.scrollIntoView({ behavior: 'smooth' });
        });
        navDots.appendChild(dot);
    });

    // Update active dot on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Update navigation dots
                document.querySelectorAll('.nav-dot').forEach((dot, index) => {
                    if (index === Array.from(sections).indexOf(entry.target)) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });

                // Add animation to visible section content
                const content = entry.target.querySelector('div');
                if (content) {
                    content.classList.add('animate__animated', 'animate__fadeIn');
                }
            }
        });
    }, observerOptions);

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });

    // Add hover effect to cards
    document.querySelectorAll('.rounded-lg').forEach(card => {
        card.classList.add('card-hover');
    });

    // Add pattern background to specific sections
    document.querySelectorAll('#special-moments, #milestones').forEach(section => {
        section.classList.add('pattern-bg');
    });
}); 