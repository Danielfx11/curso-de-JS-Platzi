// script.js

document.getElementById('start-btn').addEventListener('click', () => {
    const resultElement = document.getElementById('result');
    
    // Verificar si el navegador soporta la API de Web Speech
    if (!('webkitSpeechRecognition' in window)) {
        alert('Your browser does not support the Web Speech API');
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'en-US'; // Puedes cambiar el idioma según tus necesidades
    recognition.interimResults = false; // Establecer en true si deseas resultados intermedios
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
        console.log('Speech recognition started');
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        resultElement.innerText = transcript;
        console.log('Transcript: ', transcript);
    };

    recognition.onerror = (event) => {
        console.error('Error occurred in recognition: ', event.error);
    };

    recognition.onend = () => {
        console.log('Speech recognition ended');
    };

    recognition.start();
});
