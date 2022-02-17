export default (str: string) => {
  const wordArr = str.split(/\s/);
  const acronym = wordArr.reduce((value, word) => {
    return value + word.slice(0, 1);
  }, '');

  return acronym.toUpperCase();
};
