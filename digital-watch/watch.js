// get HTML elements
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const ampmElement = document.getElementById('ampm');

// update the watch every second
function updateWatch() {
  // get the current time
  const now = new Date();

  // extract hours, minutes, and seconds
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // convert hours to 12-hour format
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours || 12; // handle midnight

  // update the HTML elements with the time
  hoursElement.textContent = formatTime(hours);
  minutesElement.textContent = formatTime(minutes);
  secondsElement.textContent = formatTime(seconds);
  ampmElement.textContent = ampm;
}

// format time with leading zero if less than 10
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// call updateWatch every second
setInterval(updateWatch, 1000);
