import { countdownDate } from "./utils/countdownDate.mjs";
import { calculateDate } from "./utils/calculateDate.mjs";
import { updateDOM } from "./utils/updateDOM.mjs";

const updateCountdown = () => {
  const targetData = calculateDate(countdownDate);

  updateDOM(targetData, interval);
};

const interval = setInterval(updateCountdown, 1000);
