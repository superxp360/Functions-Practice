function letterCounter(string) {

    const numberOfLetter = string.length;
    return numberOfLetter;
}

function teller(string) {

    const message = string;
    return message;
}


const letterCount = letterCounter("Apple");

const withMessage = letterCounter("Apple") + teller(" Letter");

console.log(withMessage);



