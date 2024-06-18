document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const color = params.get('color');
    const season = params.get('season');
    const opinion = params.get('opinion');
    
    const greetingElement = document.getElementById('greeting');
    if (name) {
        greetingElement.textContent = `${name}, вам нравятся убийства?`;
    } else {
        greetingElement.textContent = 'Привет! Вам нравятся убийства?';
    }

    document.getElementById('question-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedMurder = document.querySelector('input[name="murder"]:checked').value;
        if (selectedMurder === 'yes') {
            window.location.href = `question_blood.html?name=${encodeURIComponent(name)}&color=${encodeURIComponent(color)}&season=${encodeURIComponent(season)}&opinion=${encodeURIComponent(opinion)}&murder=${encodeURIComponent(selectedMurder)}`;
        } else {
            window.location.href = `result.html?name=${encodeURIComponent(name)}&color=${encodeURIComponent(color)}&season=${encodeURIComponent(season)}&opinion=${encodeURIComponent(opinion)}&murder=${encodeURIComponent(selectedMurder)}`;
        }
    });
});