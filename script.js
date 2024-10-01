const video = document.querySelector('.player__video');
const playerButton = document.querySelector('.toggle');
const rewindButton = document.querySelector('.rewind');
const skipButton = document.querySelector('.skip');
const volumeInput = document.querySelector('input[name="volume"]');
const playbackRateInput = document.querySelector('input[name="playbackRate"]');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

function initializePlayer() {
  video.volume = volumeInput.value;
  video.playbackRate = playbackRateInput.value;
  updateProgress();
}

function togglePlayPause() {
  if (video.paused) {
    video.play();
    playerButton.textContent = '❚ ❚';
  } else {
    video.pause();
    playerButton.textContent = '►';
  }
}

function rewind() {
  video.currentTime = Math.max(0, video.currentTime - 10);
}

function skip() {
  video.currentTime = Math.min(video.duration, video.currentTime + 25);
}

function updateVolume() {
  video.volume = volumeInput.value;
}

function updatePlaybackRate() {
  video.playbackRate = playbackRateInput.value;
}

function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

playerButton.addEventListener('click', togglePlayPause);
rewindButton.addEventListener('click', rewind);
skipButton.addEventListener('click', skip);
volumeInput.addEventListener('input', updateVolume);
playbackRateInput.addEventListener('input', updatePlaybackRate);
video.addEventListener('timeupdate', updateProgress);

initializePlayer();

