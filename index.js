export const numberToRoman = (num) => {
  const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];

  const length = num.toString().length;
  const numbers = num.toString().split("").map(Number);
  let roman = "";
  console.log(num);
  console.log(length);
  console.log(numbers);
  let i = 0;
  switch (length) {
    case 2:
      roman = tens[numbers[i]];
      i++;
    case 1:
      roman = roman + ones[numbers[i]];
      i++;
  }
  return roman;
};
