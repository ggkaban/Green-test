document.addEventListener('DOMContentLoaded', function() {
    const backgroundImage = document.getElementById('killimg');
    const whisper = document.getElementById('siren');
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
        const selectedKill = document.querySelector('input[name="kill"]:checked').value;
        if (selectedKill === 'yes') {
            volume = Math.min(volume + 0.1, 1);
            window.location.href = `killer.html?kill=${encodeURIComponent(selectedKill)}&volume=${volume}`;
        } else {
            window.location.href = `result.html?fear=${encodeURIComponent(selectedFear)}&volume=${volume}`;
        }
    });
});
