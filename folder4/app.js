const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const btn_reset = document.querySelector('.btn__reset');  
const overlay = document.querySelector('#overlay');  

const phraseUl = document.querySelector('#phrase ul');
const scoreBorad = document.querySelectorAll('img');



let missed = 0; // number of guesses the player has missed

var phrases = ['The best of both worlds', 'Speak of the devil', 'See eye to eye', 'To kill two birds with one stone', 'Once in a blue moon' ];

function getRandomPhraseAsArray(arr){

    return phrases[Math.floor(Math.random() * (4 - 0 + 1) + 0)];
}


function addPhraseToDisplay(arr){
    // do stuff any arr that is passed in, and add to `#phrase ul`
    

    for(let i = 0; i< arr.length; i++){

        const element = document.createElement('li');
        element.textContent = arr[i];
        if(arr[i] !== ' '){
            element.className = 'letter';
        }else{
            element.className = 'space';
        }

        phraseUl.appendChild(element);
    }

    return phraseUl
}



function checkLetter(btn) {

    const listLi = document.querySelectorAll('li.letter');
    
    
    let letter = null;
    
    for(let i = 0; i < listLi.length; i++){
        if(listLi[i].textContent.toLowerCase() === btn.textContent){
            listLi[i].className = 'letter show';
            letter = btn.textContent;
            
        }
    }
    
    return letter;
}


function checkWin (){
    const listLi = document.querySelectorAll('li.letter');
    

    let show = 0;
    let letter = listLi.length;

    for(let i = 0; i < listLi.length; i++){

        if(listLi[i].className.includes('show')){
            show ++;
        }
    }

    if(show === letter){
        overlay.className = "win";
        overlay.firstElementChild.textContent = "You have won!";
        overlay.style.display = "block";
    }else if(missed >= 5){
        overlay.className = "lose";
        overlay.firstElementChild.textContent = "You have lost!";
        overlay.style.display = "block";
    }

}


function reset(){

    for(let i = 0; i< scoreBorad.length; i++){
        scoreBorad[i].src='images/liveHeart.png';
    }
    missed = 0;

    phraseUl.innerHTML = '';

    const keybordPush = qwerty.querySelectorAll('.chosen');

    for(let i = 0; i<keybordPush.length; i++ ){
        
        keybordPush[i].className = '';
        keybordPush[i].disabled = false;
        
    }

}

qwerty.addEventListener('click',(e)=>{  
    
    let letterFound;

    if(e.target.tagName === 'BUTTON'){
        const button = e.target;
        //console.log(button.textContent);
        const pressdLett = button.textContent;
        button.className = 'chosen';
        button.disabled = true;

        letterFound = checkLetter(button);
    }

    if(letterFound === null){

        scoreBorad[missed].src='images/lostHeart.png';
        missed ++;
    }

    checkWin ();
    
});


btn_reset.addEventListener('click',(e)=>{   
    reset(); 
    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray); 
    overlay.style.display = "none";
});



