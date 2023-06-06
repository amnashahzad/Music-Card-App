window.addEventListener('DOMContentLoaded', (event) => {
    const audioPlayer = document.getElementById('audio-player');
    const playButton = document.getElementById('play-button');
    const pauseButton = document.getElementById('pause-button');
  
    playButton.addEventListener('click', () => {
      audioPlayer.play();
    });
  
    pauseButton.addEventListener('click', () => {
      audioPlayer.pause();
    });
  });
  
  