export const numberToRoman = (num) => {
  const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DX", "DXX", "DXXX", "XM"];

  const length = num.toString().length;
  const numbers = num.toString().split("").map(Number);
  let roman = "";

  console.log(num);
  console.log(length);
  console.log(numbers);

  let i = 0;
  switch (length) {
    case 3:
      roman = hundreds[numbers[i]];
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
