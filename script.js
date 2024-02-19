const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');

const doYes = () => location.href = 'love_page.html';

const doNo = () =>  {
    noBtn.remove();
    yesBtn.style.fontSize = 2 + 'em';
    yesBtn.textContent = 'Of course yes!!!';
};

yesBtn.addEventListener('click', doYes);
noBtn.addEventListener('click', doNo);
