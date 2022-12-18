import {paragraphs} from './paragraphs.js';

const typingText = document.querySelector('.typing-text p')

const inpField = document.querySelector('.wrapper .input-field')
const tryAgainBtn = document.querySelector(".content button")
  const timeTag = document.querySelector(".time span b")
  const mistakeTag = document.querySelector(".mistake span")
  const wpmTag = document.querySelector(".wpm span")
  const cpmTag = document.querySelector(".cpm span");

  let timer;
  let maxTime = 60;
  let timeLeft =maxTime;
  let charIndex = mistakes = isTyping = 0;

  