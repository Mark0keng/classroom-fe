export const dateFormat = (isoDateString) => {
  const dateObject = new Date(isoDateString);

  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = dateObject.toLocaleDateString('en-US', options);

  return formattedDate;
};
