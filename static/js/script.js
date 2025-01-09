function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    const burger = document.querySelector('.burger-menu');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    const isActive = sidebar.classList.toggle('active');
    overlay.classList.toggle('active', isActive);
    burger.classList.toggle('hidden', isActive);
    body.classList.toggle('no-scroll', isActive);
}

function closeMenu() {
    const sidebar = document.querySelector('.sidebar');
    const burger = document.querySelector('.burger-menu');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    burger.classList.remove('hidden');
    body.classList.remove('no-scroll');
}