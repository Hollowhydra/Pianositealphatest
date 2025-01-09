// Map keyboard keys to piano notes
const keyMap = {
    'a': 'C',
    'w': 'C#',
    's': 'D',
    'e': 'D#',
    'd': 'E',
    'f': 'F',
    't': 'F#',
    'g': 'G',
    'y': 'G#',
    'h': 'A',
    'u': 'A#',
    'j': 'B',
    'k': 'C2'
};

// Function to play sound
function playSound(note) {
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.play();
}

// Add event listeners for keydown
document.addEventListener('keydown', (event) => {
    const note = keyMap[event.key];
    if (note) {
        playSound(note);
        const key = document.querySelector(`.key[data-note="${note}"]`);
        if (key) {
            key.classList.add('active');
        }
    }
});

// Remove active class on keyup
document.addEventListener('keyup', (event) => {
    const note = keyMap[event.key];
    if (note) {
        const key = document.querySelector(`.key[data-note="${note}"]`);
        if (key) {
            key.classList.remove('active');
        }
    }
});
