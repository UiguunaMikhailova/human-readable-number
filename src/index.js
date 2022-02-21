module.exports = function toReadable (number) {
    const dictionary = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
      };
      let str = String(number)
  if (str.length === 1) {
    return dictionary[str]
  } else if (str.length === 2) {
    let first = `${str[0]}0`
    let second = str[1]
    if (str[0] === '1') {
        return dictionary[`1${str[1]}`]
    }
    if (str[1] === '0') {
        return dictionary[`${str[0]}0`]
    }
    return `${dictionary[first]} ${dictionary[second]}`
  } else if (str.length === 3) {
    let first = str[0]
    let second = `${str[1]}0`
    let third = str[2]
    let dec = `1${str[2]}`
    if ((str[1] === '0') && (str[2] === '0')) {
        return `${dictionary[first]} hundred`
    }
    if (str[2] === '0') {
      return `${dictionary[first]} hundred ${dictionary[second]}`
    }
    if (str[1] === '0') {
      return `${dictionary[first]} hundred ${dictionary[str[2]]}`
    }
    if (str[1] === '1') {
        return `${dictionary[first]} hundred ${dictionary[dec]}`
    }
    return `${dictionary[first]} hundred ${dictionary[second]} ${dictionary[third]}`
  } else {
    return false
  }
}
