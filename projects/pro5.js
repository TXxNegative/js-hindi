let randomnumber=(Math.ceil(Math.random()*100+1));
const submit=document.querySelector('#sub')
const userinput=document.querySelector('#guessfield')
const guessslot=document.querySelector(".guesses")
const remaining = document.querySelector('.lastresult')
const loworhigh = document.querySelector('.loworhigh')
const resultparas = document.querySelector('.resultparas')

const p=document.createElement('p')

let prevguess=[]
let numguess= 1


let playgame=true

if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userinput.value)
        validdataguess(guess)
    })
}

function validdataguess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess<1){
        alert('please enter a valid number more than 1');
    }
    else if(guess>100){
        alert('please enter a valid number lesser than 100');
    }
    else{
        prevguess.push(guess)
        if(numguess ===11 ){
            cleanupguess(guess)
            displaymessage(`game over random number was ${randomnumber}`)
            endgame()
        }
        else{
            cleanupguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(){
    if(guess === randomnumber){
        displaymessage('you guessed it right')
        endgame()
    }
    else if(guess <randomnumber){
        displaymessage('number is too low')
    }

    else if(guess >randomnumber){
        displaymessage('number is too high')
    }
}

function cleanupguess(guess){
    userinput.value=''
    guessslot.innerHTML +=`${guess}, `
    numguess++
    remaining.innerHTML=`${11-numguess}`
}

function displaymessage(message){
    loworhigh.innerHTML=`<h>${message}</h>`
}

function endgame(){
    userinput.value=''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id='newgame> start new game</h2>`
    resultparas.appendChild(p)
    playgame=false
    newgame()
}

function newgame(){
    const newgamebutton=document.querySelector('#newgame')
    newgamebutton.addEventListener('click',function(e){
        randomnumber=(Math.ceil(Math.random()*100+1));
        prevguess=[]
        numguess=1
        guessslot.innerHTML=''
        remaining.innerHTML=`${11-numguess}`
        userinput.removeAttribute('disabled')
        resultparas.removeChild(p)

        playgame=true
    })
}

