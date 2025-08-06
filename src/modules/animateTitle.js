export default function animateTitle(elementText) {
    elementText.textContent = 'Hecho con pasión';

    let phrases = [
        'Desde lo básico',
        'Aprende a tu ritmo',
    ];

    let index = 0;

    const intervalAnimation = setInterval(() => {
        elementText.textContent = phrases[index];
        index++;
        if (index >= phrases.length) clearInterval(intervalAnimation);
    }, 2000);
}