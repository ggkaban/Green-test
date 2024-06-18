document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    
    const greetingElement = document.getElementById('greeting');
    if (name) {
        greetingElement.textContent = `Привет, ${name}! Какой ваш любимый цвет?`;
    } else {
        greetingElement.textContent = 'Привет! Какой ваш любимый цвет?';
    }

    document.getElementById('question-form').addEventListener('submit', function(event) {
        event.preventDefault();
        window.location.href = `question2.html?name=${encodeURIComponent(name)}`;
    });
});