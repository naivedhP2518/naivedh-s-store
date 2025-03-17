const particlesContainer = document.getElementById('particles-container');
const particleCount = 80;


for (let i = 0; i < particleCount; i++) {
    createParticle();
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 3 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    resetParticle(particle);
    
    particlesContainer.appendChild(particle);
    
    animateParticle(particle);
}

function resetParticle(particle) {
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.opacity = '0';
}

function animateParticle(particle) {
    resetParticle(particle);
    
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    
    setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        
        const moveX = Math.random() * 100;
        const moveY = Math.random() * 100;
        
        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;
        
        setTimeout(() => {
            animateParticle(particle);
        }, duration * 1000);
    }, delay * 1000);
}

document.addEventListener('mousemove', (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 100;
    const mouseY = (e.clientY / window.innerHeight) * 100;
    
    const spheres = document.querySelectorAll('.gradient-sphere');
    const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
    const moveY = (e.clientY / window.innerHeight - 0.5) * 5;
    
    spheres.forEach(sphere => {
        sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});
