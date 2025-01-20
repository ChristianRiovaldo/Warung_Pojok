document.addEventListener("DOMContentLoaded", () => {
    const toTopButton = document.getElementById('to_top');
    
    toTopButton.addEventListener('click', () => {
        toTopButton.style.backgroundColor = '#FFE31A';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
            toTopButton.style.backgroundColor = 'white';
        }, 500);
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            toTopButton.style.display = 'block';
        } else {
            toTopButton.style.display = 'none';
        }
    });
});