const spaceOutCharacters = (cardNumber) => {
  // Format card number as: \d\d\d\d \d\d\d\d \d\d\d\d \d\d\d\d
  const cardNumberBlocks = cardNumber.match(/[\d]{1,4}/g);
  if (cardNumberBlocks) {
    const newCardNumber = cardNumberBlocks.join(" ");
    return newCardNumber;
  }
  return cardNumber;
};

export default spaceOutCharacters;
