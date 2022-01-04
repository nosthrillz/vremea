export const formatDate = (locale = "en-GB", receivedDate) => {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = !receivedDate ? new Date() : receivedDate;

  const dateString = date.toLocaleString(locale, dateOptions);
  const dayofWeek = dateString.split(",")[0].substring(0, 3);

  return `${dayofWeek[0].toUpperCase() + dayofWeek.substring(1)}, ${dateString
    .split(",")[1]
    .substring(1, 6)}`;
};
