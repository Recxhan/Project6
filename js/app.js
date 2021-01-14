const qwerty = document.getElementById('qwerty')
const phrase = document.getElementById('phrase')
const startButton = document.querySelector('.btn__reset')
let missed = 0

startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    gameReset();
});

function gameReset(){
    missed = 0;
}

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

addPhraseToDisplay(phraseArray.toLowerCase());

const checkLetter = buttonClicked => {
    const liAll = document.querySelectorAll('.letter');
    let match = null;
    for(let i = 0; i < liAll.length; i++){
        if( buttonClicked == liAll[i].textContent){
            liAll[i].classList.add('show');
            match = buttonClicked.textContent;
        }
    }
    return;
}

qwerty.addEventListener('click', event => {
    if(event.target.tagName === "BUTTON" && event.target.classList != "chosen"){
        event.target.classList.add('chosen');
        event.target.isabled = true;
        let btnClicked = event.target.textContent;
        const letterFound = checkLetter(btnClicked);
        if(letterFound === null){
            let hearts = document.querySelectorAll(".tries img");
            hearts[missed] = "images/lostHeart.png";
            missed += 1;
        }
    }
}); 

const checkWin = () => {

}

