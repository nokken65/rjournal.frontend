export const elapsedTime = (dateStr: string): string => {
  const date = new Date(dateStr);

  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();
  const year = date.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  const elapsed = Date.now() - date.getTime();

  const minutes = Math.floor(elapsed / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days) {
    return `${day}.${month}.${year}`;
  } else if (hours) {
    return `${hours} часов`;
  } else {
    return `${minutes} минут`;
  }
};
