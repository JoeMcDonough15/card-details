const containsRepeatingWhiteSpace = (charString) => {
  const regex = new RegExp(/[\s]{2,}/);
  return regex.test(charString);
};

export default containsRepeatingWhiteSpace;
