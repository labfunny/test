const button = document.getElementById('button');

button.addEventListener('click', () => {
    // Анімація кнопки
    button.classList.add('animate');
    setTimeout(() => {
        button.classList.remove('animate');
    }, 2000);
});

// Анімація тексту
const text = document.querySelector('p');
text.addEventListener('mouseover', () => {
    text.classList.add('animate-text');
});
text.addEventListener('mouseout', () => {
    text.classList.remove('animate-text');
});