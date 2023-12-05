const startsOrEndsWithSpace = (charString) => {
  const regexStart = new RegExp(/^\s/);
  const regexEnd = new RegExp(/\s$/);
  return regexStart.test(charString) || regexEnd.test(charString);
};

export default startsOrEndsWithSpace;
