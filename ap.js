function toggleMenu() {
    const menu = document.getElementById('menu');
    const icon = document.getElementById('hamburger');
    menu.classList.toggle('show');
    icon.textContent = menu.classList.contains('show') ? '✖' : '☰';
}

function toggleTheme() { document.body.classList.toggle('light') }

// typing effect
const words = ["Full Stack Developer", "Frontend Specialist", "JavaScript Learner"];
let i = 0, j = 0, current = "", isDeleting = false;
    
function type() {
    current = words[i];
    document.getElementById('typing').textContent = current.substring(0, j);

    if (!isDeleting && j++ === current.length) { isDeleting = true; setTimeout(type, 900); return }
    if (isDeleting && j-- === 0) { isDeleting = false; i = (i + 1) % words.length }

    setTimeout(type, isDeleting ? 40 : 80);
}
type();
