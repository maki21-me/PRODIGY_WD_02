let [ms, sec, min, hr] = [0, 0, 0, 0];
let display = document.getElementById("display");
let lapsContainer = document.getElementById("laps");
let timer = null;

function stopWatch() {
  ms += 10;

  if (ms === 1000) {
    ms = 0;
    sec++;
    if (sec === 60) {
      sec = 0;
      min++;
      if (min === 60) {
        min = 0;
        hr++;
      }
    }
  }

  let h = hr < 10 ? "0" + hr : hr;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;
  let milli = ms < 100 ? (ms < 10 ? "00" + ms : "0" + ms) : ms;

  display.innerText = `${h}:${m}:${s}.${milli.slice(0, 2)}`;
}

function start() {
  if (timer !== null) clearInterval(timer);
  timer = setInterval(stopWatch, 10); // updates every 10ms
}

function stop() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  [ms, sec, min, hr] = [0, 0, 0, 0];
  display.innerText = "00:00:00.00";
  lapsContainer.innerHTML = "";
}

function lap() {
  let h = hr < 10 ? "0" + hr : hr;
  let m = min < 10 ? "0" + min : min;
  let s = sec < 10 ? "0" + sec : sec;
  let milli = ms < 100 ? (ms < 10 ? "00" + ms : "0" + ms) : ms;

  let lapTime = `${h}:${m}:${s}.${milli.slice(0, 2)}`;
  let lapItem = document.createElement("li");
  lapItem.innerText = "Lap: " + lapTime;
  lapsContainer.appendChild(lapItem);
}
