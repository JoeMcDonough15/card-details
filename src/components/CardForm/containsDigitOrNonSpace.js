const containsNonDigitOrNonSpace = (charString) => {
  // card number can only contain digits and single spaces
  const regex = new RegExp(/[^\d ]+/);
  return regex.test(charString);
};

export default containsNonDigitOrNonSpace;
