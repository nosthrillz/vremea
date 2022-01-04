export const formatDate = (locale = "en-GB", receivedDate) => {
  const dateOptions = {
    weekday: "long",
    month: "short",
    day: "numeric",
  };

  const date = !receivedDate ? new Date() : receivedDate;

  const dateString = date.toLocaleString(locale, dateOptions);
  const splitDate = dateString.split(",");
  const day = splitDate[0].substring(0, 3);

  return (
    day.substring(0, 1).toUpperCase() + day.substring(1) + "," + splitDate[1]
  );
};
