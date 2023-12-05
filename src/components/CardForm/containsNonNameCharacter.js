const containsNonNameCharacter = (charString) => {
  // Cardholder cannot contain any non-name characters
  const regex = new RegExp(/[^A-Za-z \.-]+/);
  return regex.test(charString);
};

export default containsNonNameCharacter;
