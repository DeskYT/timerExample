const timeContainer = document.querySelector(".timeContainer");
const timerControlsContainer = document.querySelector(
  ".timerControlsContainer"
);

const {
  children: { start: startBtn, pause: pauseBtn },
} = timerControlsContainer;
const timer = new Timer({timeContainer, startBtn, pauseBtn});

/*startButton.addEventListener('click', startButtonHandler, {once: true});
pauseButton.addEventListener('click', createPauseButtonHandler(timer));

function timeChangeHandler(timeString) {
  timeContainer.innerText = timeString;
}

function startButtonHandler({currentTarget}){
  timer.start();
  currentTarget.innerText = "Stop";
  pauseButton.hidden = false;
  currentTarget.addEventListener('click', stopButtonHandler, {once: true});
}

function stopButtonHandler({currentTarget}){
  timer.stop();
  timeChangeHandler(0);
  currentTarget.innerText = "Start";
  pauseButton.innerText = "Pause";
  pauseButton.hidden = true;
  currentTarget.addEventListener('click', startButtonHandler, {once: true});
}

function createPauseButtonHandler(timer){
  return ({currentTarget}) => {
    currentTarget.innerText = timer.isRunning ? "Resume" : "Pause";
    timer.isRunning ? timer.pause() : timer.resume();
  }
}
*/