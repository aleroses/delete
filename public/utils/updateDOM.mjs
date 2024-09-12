const updateDOM = (targetDate, interval) => {
  const showDays = document.querySelector(".days");
  const showHours = document.querySelector(".hours");
  const showMinutes = document.querySelector(".minutes");
  const showSeconds = document.querySelector(".seconds");

  if (targetDate.expired) {
    document.querySelector(".countdown").innerHTML =
      "Finished";

    console.log("Finished");
    clearInterval(interval);
  } else {
    showDays.innerHTML = targetDate.days;
    showHours.innerHTML = targetDate.hours;
    showMinutes.innerHTML = targetDate.minutes;
    showSeconds.innerHTML = targetDate.seconds;
  }
};

export { updateDOM };
