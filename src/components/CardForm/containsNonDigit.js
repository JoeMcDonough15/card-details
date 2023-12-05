const containsNonDigit = (charString) => {
  // MM, YY, and CVC fields may contain only digits
  const regex = new RegExp(/[^\d]+/);
  return regex.test(charString);
};

export default containsNonDigit;
