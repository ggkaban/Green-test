document.getElementById('name-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const name = document.getElementById('name').value;
    window.location.href = `question1.html?name=${encodeURIComponent(name)}`;
});