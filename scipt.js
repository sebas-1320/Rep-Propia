
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const volumeSlider = document.getElementById('volume');
const progress = document.getElementById('progress');

// Reproducir musica
playBtn.addEventListener('click', () => {
  audio.play();
});

// Pausar musica
pauseBtn.addEventListener('click', () => {
  audio.pause();
});

// Cambiar el volumen
volumeSlider.addEventListener('input', (event) => {
  const volumeValue = event.target.value / 100; // Convertimos el rango 0-100 a 0-1
  audio.volume = volumeValue; // Ajustamos el volumen del audio
  console.log(`Volumen ajustado a: ${volumeValue}`);
});

// Barra de progreso
audio.addEventListener('timeupdate', () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progress.value = percent;
});

// Progreso que lleva el audio
progress.addEventListener('input', () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});
