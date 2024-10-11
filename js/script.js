// bg change
let bgChange = document.querySelector('.bg-Change');
bgChange.addEventListener('click', () => {
    let main = document.querySelector('.home-Section');
    if (bgChange.classList.contains('fa-moon')) {
        bgChange.classList.replace('fa-moon', 'fa-sun');
        main.style.background = '#2d2d2d';
        main.style.color = '#fff';
    } else if (bgChange.classList.contains('fa-sun')) {
        bgChange.classList.replace('fa-sun', 'fa-moon');
        main.style.background = '#fff';
        main.style.color = '#000';
    }
})