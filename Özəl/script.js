const audioPlayer = document.getElementById('audioPlayer');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', function() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.textContent = 'Mahnını Dayandır';
  } else {
    audioPlayer.pause();
    playButton.textContent = 'Mahnını Oynat';
  }
});
