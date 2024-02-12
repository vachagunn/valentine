const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');

const doYes = () => {}

const doNo = () =>  noBtn.remove();

yesBtn.addEventListener('click', doYes);
noBtn.addEventListener('click', doNo);
