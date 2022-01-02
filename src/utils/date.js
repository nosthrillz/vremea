const getDates = (today) => {
  const dates = [];
  for (let i = 0; i < 6; i++) {
    dates.push(dateIncrease(today, i));
  }

  const datesObj = dates.map((date, index) => {
    return {
      date: date,
      name: index === 0 ? "Today" : index === 1 ? "Tomorrow" : formatDate(date),
    };
  });
  return datesObj;
};

const dateIncrease = (today, number) => {
  const newDate = new Date(today);
  newDate.setDate(newDate.getDate() + number);
  return newDate;
};

const formatDate = (date) => {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateString = date.toLocaleString("en-GB", dateOptions);
  return `${dateString.split(",")[0].substring(0, 3)}, ${dateString
    .split(",")[1]
    .substring(1, 6)}`;
};

export default getDates;
