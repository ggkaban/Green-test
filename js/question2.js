document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const color = params.get('color');
    
    const greetingElement = document.getElementById('greeting');
    if (name) {
        greetingElement.textContent = `${name}, Какое время года вам больше нравится?`;
    } else {
        greetingElement.textContent = 'Привет! Какое время года вам больше нравится?';
    }

    document.getElementById('question-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedSeason = document.querySelector('input[name="season"]:checked').value;
        window.location.href = `question3.html?name=${encodeURIComponent(name)}&color=${encodeURIComponent(color)}&season=${encodeURIComponent(selectedSeason)}`;
    });
});