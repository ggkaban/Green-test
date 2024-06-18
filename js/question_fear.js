document.addEventListener('DOMContentLoaded', function() {
    const backgroundImage = document.getElementById('background-image');
    const whisper = document.getElementById('whisper');
    let volume = 1; // начальная громкость шепота

    // Функция для воспроизведения звука
    function playWhisper() {
        whisper.volume = volume;
        whisper.play();
    }

    // Показывать и скрывать фоновое изображение каждые 3 секунды
    setInterval(function() {
        backgroundImage.style.display = 'block';
        playWhisper();

        setTimeout(function() {
            backgroundImage.style.display = 'none';
        }, 1); // Исчезание через 1 секунду
    }, 1); // Появление каждые 3 секунды

    // Обработчик отправки формы
    document.getElementById('question-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedFear = document.querySelector('input[name="fear"]:checked').value;
        if (selectedFear === 'yes') {
            volume = Math.min(volume + 0.1, 1);
            window.location.href = `question_kill.html?fear=${encodeURIComponent(selectedFear)}&volume=${volume}`;
        } else {
            window.location.href = `result.html?fear=${encodeURIComponent(selectedFear)}&volume=${volume}`;
        }
    });
});
