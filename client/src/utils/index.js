export function addHours(numOfHours, date = new Date()) {
  console.log({ numOfHours, date });
  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

  return date;
}

export function convertToNumber(string) {
  const startingTime = string.split("-")[0].trim();
  const startingTimeDigit =
    startingTime.length === 3
      ? startingTime.slice(0, 1)
      : startingTime.slice(0, 2);

  console.log(startingTimeDigit);
  return +startingTimeDigit;
}
