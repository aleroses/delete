const calculateDate = (targetDate) => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    return {
      expired: true,
    };
  }

  const seconds = distance / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  return {
    expired: false,
    days: Math.floor(days),
    hours: Math.floor(hours % 24),
    minutes: Math.trunc(minutes % 60),
    seconds: Math.trunc(seconds % 60),
  };
};

export { calculateDate };
