export const formatDate = (receivedDate) => {
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const date = !receivedDate ? new Date() : receivedDate;

  const dateString = date.toLocaleString("en-GB", dateOptions);
  return `${dateString.split(",")[0].substring(0, 3)}, ${dateString
    .split(",")[1]
    .substring(1, 6)}`;
};
