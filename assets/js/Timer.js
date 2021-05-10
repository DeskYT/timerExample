class Timer {
  constructor({timeContainer, startBtn, pauseBtn}) {
    this._startTime = null;
    this._diff = 0;
    this._isRunning = false;
    this._timeContainer = timeContainer;
    this._startBtn = startBtn;
    this._pauseBtn = pauseBtn;
    this._pauseBtn.hidden = true;

    this._startBtn.addEventListener('click', ({currentTarget})=>{
      if(!this._isRunning && !this._startTime) {
        timer.start();
        currentTarget.innerText = "Stop";
        this._pauseBtn.hidden = false;
        return;
      }
      timer.stop();
      currentTarget.innerText = "Start";
      this._pauseBtn.hidden = true;
      this._pauseBtn.innerText = "Pause";
    });

    this._pauseBtn.addEventListener('click', ({currentTarget})=>{
      this.isRunning ? this.pause() : this.resume();
      currentTarget.innerText = this.isRunning ? "Pause" : "Resume";
    });
  }
  get isRunning(){
    return this._isRunning;
  }
  _timeoutHandler = () => {
    if (this._isRunning) {
      setTimeout(this._timeoutHandler, 30);
      this._timeContainer.innerText = this._msToTime(Date.now() - this._startTime);
    }
  }
  _getCorrectTimeString(v){
    return v < 10 ? `0${v}` : v;
  }
  _msToTime(duration = 0) {
    const seconds = ((duration / 1000) % 60).toFixed(3);
    const minutes = parseInt((duration / (1000 * 60)) % 60);
    const hours = parseInt(duration / (1000 * 60 * 60));
  
    return `${this._getCorrectTimeString(hours)}:${this._getCorrectTimeString(minutes)}:${this._getCorrectTimeString(seconds)}`;
  }

  start() {
    this._startTime = Date.now();
    this._isRunning = true;
    this._timeoutHandler();
  }
  stop() {
    this._isRunning = false;
    this._startTime = null;
    this._diff = 0;
  }
  pause() {
    if(!this._startTime){
      return;
    }
    this._isRunning = false;
    this._diff = Date.now() - this._startTime;
  }
  resume() {
    this._isRunning = true;
    this._startTime = Date.now() - this._diff;
    this._timeoutHandler();
  }
}
