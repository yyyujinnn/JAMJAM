const $random1 = document.querySelector('#random1');
const $random2 = document.querySelector('#random2');
const $random3 = document.querySelector('#random3');
const $random4 = document.querySelector('#random4');
const randomNum1 = Math.floor(Math.random() * 10);
const randomNum2 = Math.floor(Math.random() * 10);
const randomNum3 = Math.floor(Math.random() * 10);
const randomNum4 = Math.floor(Math.random() * 10);

$random1.append(randomNum1, document.createElement('br'));
$random2.append(randomNum2, document.createElement('br'));
$random3.append(randomNum3, document.createElement('br'));
$random4.append(randomNum4, document.createElement('br'));