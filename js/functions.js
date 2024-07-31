const checkStringLength = (string, length) => string.length <= length;

checkStringLength('abс', 3);

const checkPalindrome = (string) => {
  const normalizeString = string.toLowerCase().replaceAll(' ', '');
  let reverseString = '';
  for (let i = normalizeString.length - 1; i >= 0; i--) {
    reverseString += normalizeString[i];
  }
  return reverseString === normalizeString;
};
checkPalindrome('Лёша на полке клопа нашёл ');

const getNumber = (string) => {
  const normalizeString = String(string).replaceAll(' ', '');
  let result = '';
  for (let i = 0; i < normalizeString.length; i++) {
    if (!isNaN(normalizeString[i])) {
      result += normalizeString[i];
    }
  }
  return result ? Number(result) : NaN;
};

getNumber('New Year 2024');
