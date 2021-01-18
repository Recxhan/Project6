const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
let missed = 0;
const hearts = document.querySelectorAll(".tries img");
const overlay = document.querySelector('#overlay');

startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    reset();
});


const arrayAns = [
    'Fight For Freedom',
    'Stand With Hong Kong',
    'Five Demands Not One Less',
    'Liberate Hong Kong',
    'Revolution of Our Times'    
];

const getRandomPhraseAsArray = arr =>{
    let randomPhrase = arr[Math.floor( Math.random() * arr.length)];
    return randomPhrase;
}

const addPhraseToDisplay = arr => {
    for(let i = 0; i < arr.length; i++){
    const li = document.createElement('LI');
    li.textContent = arr[i];
    phrase.appendChild(li);
    if( arr[i] === ' '){
        li.className = 'space';
    } else {
        li.className = 'letter'
    }
    
}}

const phraseArray = getRandomPhraseAsArray(arrayAns);

addPhraseToDisplay(phraseArray);

const checkLetter = buttonClicked => {
    const liAll = document.querySelectorAll('.letter');
    let match = null;
    for(let i = 0; i < liAll.length; i++){
        if( buttonClicked.textContent == liAll[i].textContent.toLowerCase()){
            liAll[i].classList.add('show');
            match = buttonClicked.textContent.toLowerCase();
        }
    };
    return match;
}

qwerty.addEventListener('click', event => {
    if(event.target.tagName === "BUTTON" && event.target.classList != "chosen"){
        event.target.classList.add('chosen');
        event.target.disabled = true;
        let btnClicked = event.target;
        const letterFound = checkLetter(btnClicked);
        if(letterFound === null){
            hearts[missed].src = "images/lostHeart.png";
            missed ++;
        }
    }checkWin()
}); 

const checkWin = () => {
    const letterClass = document.querySelectorAll('.letter');
    const letterShow = document.querySelectorAll('.show');
    const title = document.querySelector('.title');
    if(letterClass.length == letterShow.length){
        overlay.classList.add('win');
        title.textContent = "You Won!"
        overlay.style.display = "flex";  
    } else if(missed >= 5){
        overlay.classList.add('lose');
        title.textContent = "You lost!";
        overlay.style.display = "flex";
    }
}

const reset = () => {
    missed = 0;
    for (let i = 0; i < hearts.length; i++){
        hearts[i].src = 'images/liveHeart.png'
    };
    phrase.innerHTML = "";
    const anotherPhraseArray = getRandomPhraseAsArray(arrayAns);
    addPhraseToDisplay(anotherPhraseArray);
    const BtnChosen = document.querySelectorAll('.chosen');
    for(i = 0; i < BtnChosen.length; i++){
    BtnChosen[i].disabled = false;
    BtnChosen[i].classList.remove('chosen');
}
}

