const keepToMaxCharacters = (charString, max) => {
  const newCharString = charString.slice(0, max);
  return newCharString;
};

export default keepToMaxCharacters;
