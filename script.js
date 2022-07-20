/*
escolher a jogada
o computador escolhe
apos verifica qual vencel e constra o botão de começar denovo
na verificação atualiza a pontuação

no momento de escolher a jogada, some com a tela de escolha e aparece a tela de confronto


*/

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors')
let myChoiceBtn = document.querySelector('#myChoice button');
let houseChoiceBtn = document.querySelector('#houseChoice button');
let myChoice1 = document.querySelector('#myChoice_step1 button');
let myChoice2Img = document.querySelector('#myChoice_step2 button img');
let houseChoice1 = document.querySelector('#houseChoice_step1 button');
let myChoice2 = document.querySelector('#myChoice_step2 button');
let houseChoice2 = document.querySelector('#houseChoice_step2 button img');
let houseChoice2Btn = document.querySelector('.houseChoice_step2 .houseChoice');
let score = document.getElementById('score');
let numScore = 0;

let resultContent = document.querySelector('#result');
let result = document.querySelector('#result span');
let playAgain = document.querySelector('#result button');
let btnRules = document.querySelector('.btnRules');
let modalRules = document.querySelector('#modalRules');
let modalRulesImg = document.querySelector('#modalRules .rule');
let btnClose= document.querySelector('#close');
let stage1 = document.querySelector('#step1');;
let stage2 = document.querySelector('#step2');
let stage3 = document.querySelector('#step3');;


(()=>{
    score.innerHTML = localStorage.getItem('score');
    
})()



rock.addEventListener('click', ()=>{
    let setNum = localStorage.getItem('score');
    switch (Math.floor(Math.random() * 3)) {
        case 0:
                myChoice2Img.setAttribute('src', './images/icon-rock.svg')
            window.setTimeout(()=>{
                result.innerHTML = 'A TIE';
                houseChoice1.textContent = 'rock';
                houseChoice2.setAttribute('src', '/images/icon-rock.svg');
                numScore += 0;
                setNum = numScore;
                saveScore(setNum)
                if(localStorage.getItem !== null || localStorage !== undefined){
                    score.innerHTML = localStorage.getItem('score');
                }
                resultContent.style.display = 'flex';
                verificaMaquina();
                console.log(setNum)

                
            }, 1000)
            
            
            break;
        case 1:
            
            window.setTimeout(()=>{
                result.innerHTML = 'YOU LOSE';
                houseChoice1.textContent = 'paper';
                houseChoice2.setAttribute('src', '/images/icon-paper.svg');
                if(numScore > 0){
                    numScore -= 1;
                    setNum = numScore;
                    saveScore(setNum)
                    if(localStorage.getItem !== null || localStorage !== undefined){
                        score.innerHTML = localStorage.getItem('score');
                    }
                }else{
                    numScore += 0;
                    setNum = numScore;

                    saveScore(setNum)
                    if(localStorage.getItem !== null || localStorage !== undefined || localStorage !== NaN){
                        score.innerHTML = localStorage.getItem('score');
                    }
                }
                resultContent.style.display = 'flex';
                verificaMaquina();

            }, 1000)
            
            
            break;
        case 2:
            window.setTimeout(()=>{
                result.innerHTML = 'YOU WIN';
                houseChoice1.textContent = 'scissors';
                houseChoice2.setAttribute('src', '/images/icon-scissors.svg');
                numScore+= 1;
                setNum = numScore;
                saveScore(setNum)

                if(localStorage.getItem !== null || localStorage !== undefined){
                    score.innerHTML = localStorage.getItem('score');
                }
                resultContent.style.display = 'flex';  
                verificaMaquina();

            }, 1000)
            
            break;
        default:
            break;
    }
    myChoice2Img.setAttribute('src', '/images/icon-rock.svg');
    verificaCor();

    step2();
    

})
paper.addEventListener('click', ()=>{
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            window.setTimeout(()=>{
                result.innerHTML = 'YOU WIN';
                houseChoice1.textContent = 'rock';
                houseChoice2.setAttribute('src', '/images/icon-rock.svg');
                numScore+= 1;
                score.innerHTML = numScore;
                resultContent.style.display = 'flex';
                verificaMaquina();
            }, 1000)
            break;
        case 1:
            
            window.setTimeout(()=>{
                result.innerHTML = 'A TIE';
                houseChoice1.textContent = 'paper';
                houseChoice2.setAttribute('src', '/images/icon-paper.svg');
                numScore += 0;
                score.innerHTML = numScore;
                resultContent.style.display = 'flex';
                verificaMaquina();
            }, 1000)
            break;
        case 2:
            
            window.setTimeout(()=>{
                result.innerHTML = 'YOU LOSE';
                houseChoice1.textContent = 'scissors';
                houseChoice2.setAttribute('src', '/images/icon-scissors.svg');
                if(numScore > 0){
                    numScore-= 1;
                    score.innerHTML = numScore;
                }else{
                    numScore += 0;
                    score.innerHTML = numScore;
                }

                resultContent.style.display = 'flex';
                verificaMaquina();
            }, 1000)
            
            break;
        default:
            break;
    }

    myChoice2Img.setAttribute('src', '/images/icon-paper.svg');
    verificaCor();

    step2();
})
scissors.addEventListener('click', ()=>{
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            
            window.setTimeout(()=>{
                result.innerHTML = 'YOU LOSE';
                houseChoice1.textContent = 'rock';
                houseChoice2.setAttribute('src', '/images/icon-rock.svg');
                if(numScore > 0){
                    numScore-= 1;
                    score.innerHTML = numScore;
                }else{
                    numScore += 0;
                    score.innerHTML = numScore;
                }
                resultContent.style.display = 'flex';
                verificaMaquina();
            }, 1000)
            break;
        case 1:
            
            window.setTimeout(()=>{
                result.innerHTML = 'YOU WIN';
                houseChoice1.textContent = 'paper';
                houseChoice2.setAttribute('src', '/images/icon-paper.svg');
                numScore+= 1;
                score.innerHTML = numScore;
                resultContent.style.display = 'flex';
                verificaMaquina();
            }, 1000)
            break;
        case 2:
            
            window.setTimeout(()=>{
                result.innerHTML = 'A TIE';
                houseChoice1.textContent = 'scissors';
                houseChoice2.setAttribute('src', '/images/icon-scissors.svg');
                numScore += 0;
                score.innerHTML = numScore;
                resultContent.style.display = 'flex';
                verificaMaquina();
            }, 1000)
            break;
        default:
            break;
    }
    myChoice2Img.setAttribute('src', '/images/icon-scissors.svg');
    verificaCor();

    step2();
})

playAgain.addEventListener('click', ()=>{
   /* myChoice1.textContent = '-----';
    myChoice2.textContent = '-----';*/
    /*numScore = 0;
    score.innerHTML = numScore;*/
    houseChoice2.setAttribute('src', '');
    resultContent.style.display = 'none';
    houseChoice2Btn.style.border = 'none';
    houseChoice2Btn.style.backgroundColor = 'hsl(237, 49%, 15%)';
    step1();
    
    
})

btnRules.addEventListener('click', ()=>{
        modalRules.style.display = 'flex';
})

modalRules.addEventListener('click', (e)=>{
    if(e.target == modalRulesImg){
        modalRules.style.display = 'none';
    }else if(btnClose){
        modalRules.style.display = 'none';
    }
})




const step2 = () =>{
    stage1.style.display = 'none';
    stage2.style.display = 'none';
    stage3.style.display = 'flex';

}

const step1 = () =>{
    stage1.style.display = 'flex';
    stage2.style.display = 'none';
    stage3.style.display = 'none';

}


const verificaCor = () =>{
    if(myChoice2Img.getAttribute('src') == '/images/icon-paper.svg'){
        myChoice2.style.borderColor = '#00f';
    }else if(myChoice2Img.getAttribute('src') == '/images/icon-rock.svg'){
        myChoice2.style.borderColor = '#f00';
    }else if(myChoice2Img.getAttribute('src') == '/images/icon-scissors.svg'){
        myChoice2.style.borderColor = '#ff0';
    }
    
}
const verificaMaquina = () =>{
    if(houseChoice2.getAttribute('src') == '/images/icon-paper.svg'){
        houseChoice2Btn.style.border = '20px solid #00f';
        houseChoice2Btn.style.backgroundColor = '#fff'; 
        console.log('maquina escolheu papel');
    }else if(houseChoice2.getAttribute('src') == '/images/icon-rock.svg'){
        houseChoice2Btn.style.border = '20px solid #f00';
        houseChoice2Btn.style.backgroundColor = '#fff'; 
        console.log('maquina escolheu pedra');
    }else if(houseChoice2.getAttribute('src') == '/images/icon-scissors.svg'){
        houseChoice2Btn.style.border = '20px solid #ff0';
        houseChoice2Btn.style.backgroundColor = '#fff'; 
        console.log('maquina escolheu tesoura');
    }
}

const saveScore = (e) =>{
    localStorage.setItem('score', e)
}