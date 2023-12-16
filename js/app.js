'use strict'

// Countdown NYE Clock

const timeElms = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
};

const countDownTimer = {
  eventDate: new Date('2024-01-01T06:00:00').getTime(),
  interval: null,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,

  start: function () {
    this.interval = setInterval(() => {
      const now = new Date().getTime();
      const remainingTime = this.eventDate - now;

      if (remainingTime <= 0) {
        clearInterval(this.interval);
        alert('Countdown has ended, thanks for stopping by.');
      } else {
        this.days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor(
          (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        this.seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        this.render();
      }
    }, 1000);
  },

  stop: function () {
    if (this.interval) {
      clearInterval(this.interval);
    }
  },

  render: function () {
    timeElms.days.textContent = this.days;
    timeElms.hours.textContent = this.hours;
    timeElms.minutes.textContent = this.minutes;
    timeElms.seconds.textContent = this.seconds;
  },
};

countDownTimer.start();



