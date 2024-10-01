const video = document.getElementById('video');
const playerButton = document.createElement('button');
playerButton.textContent = '►';
document.body.insertBefore(playerButton, video.nextSibling);

const speedBar = document.querySelector('.speed-bar');
const volumeInput = document.createElement('input');
volumeInput.type = 'range';
volumeInput.min = 0;
volumeInput.max = 100;
volumeInput.value = 75;
volumeInput.setAttribute('data-sizing', '%');
document.body.insertBefore(volumeInput, speedBar.parentNode.nextSibling);

const playbackSpeedInput = document.createElement('input');
playbackSpeedInput.type = 'number';
playbackSpeedInput.value = 1;
playbackSpeedInput.step = 0.1;
playbackSpeedInput.setAttribute('data-sizing', 'x');
document.body.insertBefore(playbackSpeedInput, volumeInput.nextSibling);

const rewindButton = document.createElement('button');
rewindButton.textContent = '« 10s';
document.body.insertBefore(rewindButton, playbackSpeedInput.nextSibling);

const skipButton = document.createElement('button');
skipButton.textContent = '25s »';
document.body.insertBefore(skipButton, rewindButton.nextSibling);

function togglePlay() {
    if (video.paused) {
        video.play();
        playerButton.textContent = '❚ ❚';
    } else {
        video.pause();
        playerButton.textContent = '►';
    }
}

function updateSpeedBar() {
    speedBar.textContent = `${video.playbackRate}×`;
}

video.playbackRate = 1;
updateSpeedBar();

playerButton.addEventListener('click', togglePlay);
video.addEventListener('ratechange', updateSpeedBar);

volumeInput.addEventListener('input', (e) => {
    video.volume = e.target.value / 100;
});

playbackSpeedInput.addEventListener('input', (e) => {
    video.playbackRate = e.target.value;
    updateSpeedBar();
});

rewindButton.addEventListener('click', () => {
    video.currentTime = Math.max(0, video.currentTime - 10);
});

skipButton.addEventListener('click', () => {
    video.currentTime = Math.min(video.duration, video.currentTime + 25);
});
