const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const str_space = "**********";
  const arrStringCode = expr.split(str_space);
  const arrStringDecode = arrStringCode.map((item) => {
    let arrDecode = [];
    for (let i = 0; i < item.length; i += 10) {
      const decode = item
        .slice(i, i + 10)
        .replace(/10/g, ".")
        .replace(/11/g, "-")
        .replace(/00/g, "");
      arrDecode.push(MORSE_TABLE[decode]);
    }
    return arrDecode.join("");
  });
  return arrStringDecode.join(" ");
}

module.exports = {
    decode
}