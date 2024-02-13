export const dateFormat = (isoDateString) => {
  const dateObject = new Date(isoDateString);

  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = dateObject.toLocaleDateString('en-US', options);

  return formattedDate;
};

export const dateTimeFormat = (isoDateString) => {
  const dateObject = new Date(isoDateString);

  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  const formattedDate = dateObject.toLocaleDateString('en-US', options);

  return formattedDate;
};
