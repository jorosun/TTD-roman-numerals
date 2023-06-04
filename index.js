import { error } from "console";

export const numberToRoman = (num) => {
  console.log("num is:" + num);

  /* if (num === undefined) {
    throw new error('You haven't passed a number to function numberToRoman');
  }
*/
  if (num > 3000) {
    throw new error("Roman Numerals only go up to 3000");
  }
  const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const thousands = ["", "M", "MM", "MMM"];

  const length = num.toString().length;
  const numbers = num.toString().split("").map(Number);
  let roman = "";

  let i = 0;
  switch (length) {
    case 4:
      roman = thousands[numbers[i]];
      i++;
    case 3:
      roman += hundreds[numbers[i]];
      i++;
    case 2:
      roman += tens[numbers[i]];
      i++;
    case 1:
      roman += ones[numbers[i]];
      i++;
  }
  return roman;
};
