function convertToRoman(num) {
  const str = String(num);
  let ones = "";
  let tens = "";
  let hundreds = "";
  let thousands = "";

  switch (str[str.length - 1]) {
    case "1":
      ones = "I";
      break;
    case "2":
      ones = "II";
      break;
    case "3":
      ones = "III";
      break;
    case "4":
      ones = "IV";
      break;
    case "5":
      ones = "V";
      break;
    case "6":
      ones = "VI";
      break;
    case "7":
      ones = "VII";
      break;
    case "8":
      ones = "VIII";
      break;
    case "9":
      ones = "IX";
      break;
  }

  switch (str[str.length - 2]) {
    case "1":
      tens = "X";
      break;
    case "2":
      tens = "XX";
      break;
    case "3":
      tens = "XXX";
      break;
    case "4":
      tens = "XL";
      break;
    case "5":
      tens = "L";
      break;
    case "6":
      tens = "LX";
      break;
    case "7":
      tens = "LXX";
      break;
    case "8":
      tens = "LXXX";
      break;
    case "9":
      tens = "XC";
      break;
  }
  switch (str[str.length - 3]) {
    case "1":
      hundreds = "C";
      break;
    case "2":
      hundreds = "CC";
      break;
    case "3":
      hundreds = "CCC";
      break;
    case "4":
      hundreds = "CD";
      break;
    case "5":
      hundreds = "D";
      break;
    case "6":
      hundreds = "DC";
      break;
    case "7":
      hundreds = "DCC";
      break;
    case "8":
      hundreds = "DCCC";
      break;
    case "9":
      hundreds = "CM";
      break;
  }
  for (let i = 0; i < str[str.length - 4]; i++) {
    thousands += "M";
  }
  return (result = thousands + hundreds + tens + ones);
}

console.log(convertToRoman(3999));
