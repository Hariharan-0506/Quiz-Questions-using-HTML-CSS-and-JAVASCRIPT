const options = document.querySelectorAll('.options li');
const correctAnswers = ['D', 'B', 'C', 'B', 'A'];
let score = 0;

options.forEach((option, index) => {
    option.addEventListener('click', () => {
        resetBackgrounds();
        if (option.getAttribute('data-answer') === correctAnswers[Math.floor(index / 4)]) {
            option.style.backgroundColor = 'green';
            score++;
        } else {
            option.style.backgroundColor = 'red';
        }
    });
});

function resetBackgrounds() {
    options.forEach((option) => {
        option.style.backgroundColor = '';
    });
}
