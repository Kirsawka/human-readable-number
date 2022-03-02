module.exports = function toReadable(number) {

    const numbers = {
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
        90: 'ninety'
    }

    if (number === 0) {
        return "zero";
    }

    let res = [];
    const arr = number.toString().split('').reverse();

    let ones = +arr[0];
    let tens = +arr[1];
    let hundreds = +arr[2];

    if (hundreds) {
        res.push(`${numbers[hundreds]} hundred`);
    }
    if (tens > 1) {
        res.push(numbers[tens * 10]);
    }
    if (tens === 1) {
        res.push(numbers[ones + 10]);
    }
    if (ones && tens !== 1) {
        res.push(numbers[ones]);
    }
    return res.join(' ');
}
