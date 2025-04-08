const chars = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '-',
    '_',
    '=',
    '+',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];

const passwordLength = 15;
const range = chars.length;

const wrapper = document.querySelector('.wrapper');
const generatePasswordBtn = document.querySelector('#generate-btn');
const passwordOne = document.querySelector('#password-one');
const passwordTwo = document.querySelector('#password-two');
const copyEl = document.querySelectorAll('.copied');
const toggleColorMode = document.querySelector('#color-switch');
console.log(copyEl[0]);

const getRandomChar = () => {
    const tmp = Math.floor(Math.random() * range);
    return chars[tmp];
};

const generatePassword = () => {
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        password += getRandomChar();
    }
    return password;
};

generatePasswordBtn.addEventListener('click', function () {
    passwordOne.textContent = generatePassword();
    passwordTwo.textContent = generatePassword();
});

//copying text from div
const copyToClipBoard = (element) => {
    const text = element.textContent;
    navigator.clipboard.writeText(text);
};

passwordOne.addEventListener('click', function () {
    copyToClipBoard(passwordOne);
    // console.log("click");
    copyEl[0].classList.add('show');
    setTimeout(() => {
        copyEl[0].classList.remove('show');
    }, 3000);
});
passwordTwo.addEventListener('click', function () {
    copyToClipBoard(passwordOne);
    // console.log("click");
    copyEl[1].classList.add('show');
    setTimeout(() => {
        copyEl[1].classList.remove('show');
    }, 3000);
});

//toggling theme
toggleColorMode.addEventListener('change', function () {
    wrapper.classList.toggle('light-mode');
});
