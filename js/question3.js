document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const color = params.get('color');
    const season = params.get('season');
    
    const greetingElement = document.getElementById('greeting');
    if (name) {
        greetingElement.textContent = `${name}, Как вы относитесь к насилию?`;
    } else {
        greetingElement.textContent = 'Привет! Как вы относитесь к насилию?';
    }

    document.getElementById('question-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedOpinion = document.querySelector('input[name="opinion"]:checked').value;
        if (selectedOpinion === 'good') {
            window.location.href = `question_good.html?name=${encodeURIComponent(name)}&color=${encodeURIComponent(color)}&season=${encodeURIComponent(season)}&opinion=${encodeURIComponent(selectedOpinion)}`;
        } else {
            window.location.href = `question_bad.html?name=${encodeURIComponent(name)}&color=${encodeURIComponent(color)}&season=${encodeURIComponent(season)}&opinion=${encodeURIComponent(selectedOpinion)}`;
        }
    });
});