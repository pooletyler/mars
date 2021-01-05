const getTodaysDate = () => {
  const date = new Date();
  const iso = date.toISOString();
  return iso.substr(0, iso.indexOf('T'));
};

export default getTodaysDate;
