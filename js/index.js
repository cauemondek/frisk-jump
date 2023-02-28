const warning = document.getElementById('warning');

document.getElementById('clickAccept').addEventListener('click', ()=>{
    warning.style.display = 'none'
    document.getElementById('soundstartscreen').play();
});

setInterval(()=>{
    document.getElementById('clickAccept').style.opacity = '0%';
 setTimeout( ()=> {document.getElementById('clickAccept').style.opacity = '100%'} , 700);
},1200);

document.getElementById('soundstartscreen').addEventListener("ended", function() {
    document.getElementById('soundstartscreen').currentTime = 0;
    document.getElementById('soundstartscreen').play();
});

document.getElementById('fightmusic').addEventListener("ended", function() {
    document.getElementById('fightmusic').currentTime = 0;
    document.getElementById('fightmusic').play();
});

const frisk = document.querySelector('.frisk');
const spear = document.querySelector('.spear');
const game = document.querySelector('.game-board');
const spears = document.querySelector('.spears');

const points = document.querySelector('.points');

let start = document.getElementById('start');
start.addEventListener('mouseenter', function(){
    start.src = './img/buttonhover.png';
    start.style.boxShadow = '0px 0px 8px #eded01';
});

start.addEventListener('mouseleave', function(){
    start.src = './img/button.png';
    start.style.boxShadow = 'none';
});

start.addEventListener('click', function(){
    startgame();
    startScore();
    document.getElementById('start-screen').style.display = 'none';
    game.style.display = 'block';
    document.getElementById('table-points').style.display = 'flex';
    document.getElementById('soundstartscreen').src = './';
    document.getElementById('fightmusic').play();
});

const buttonAgain = document.getElementById('playAgain')
let press = false;

buttonAgain.addEventListener('click', function(){
    press = true;
    restartGame();
});


function restartGame(){
    buttonAgain.style.color = '#f1e203';
    document.getElementById('soundgameover').src = './'
    document.getElementById('restartsound').play()
    setTimeout(function(){
        document.location.reload(true);
    }, 5100);
};

function jump (){
    frisk.classList.add('jump');

    setTimeout(function(){
        frisk.classList.remove('jump');
    }, 500);
};

function deadSoul (){
    frisk.classList.add('soul');
};

const scoreDisplay = document.getElementById('score');
let score = 0;
let alive = false;
    function startScore(){
        
        if (!alive){
            score++
        scoreDisplay.innerHTML = score;
        setTimeout(startScore, 60)
        } else {
            score = score;
        };
    };

document.getElementById('playAgain').addEventListener('mouseenter', function(){
    if (!press){
    document.getElementById('selectedbutton').play();
    }
});

document.getElementById('start').addEventListener('mouseenter', function(){
    document.getElementById('selectedbutton').play();
});


function startgame(){
const loop = setInterval(function(){

    const bonePosition = spear.offsetLeft;
    const friskPosition = +window.getComputedStyle(frisk).bottom.replace('px','')
    
    console.log(friskPosition)
    if (bonePosition <= 95 &&  bonePosition > 0 && friskPosition < 260 ) {
        
        document.getElementById('fightmusic').src = './';

        alive = true;
        spear.style.animation = 'none';
        spear.style.left = bonePosition + 'px';

        frisk.style.animation = 'none';
        frisk.style.bottom = (friskPosition +  'px');
        frisk.style.marginLeft = '10px';
        frisk.style.marginBottom = '50px';

        frisk.src = './img/soul.png';
        frisk.style.width = '30px';

        game.style.backgroundImage = 'none';
        spears.style.display = 'none';
        game.style.backgroundColor = '#000000';
        document.getElementById('soundsoulbreak').play();

        setTimeout(function(){
            frisk.src = './img/soul-break.png';
            game.style.transition = '2.5s';
            document.getElementById('textOver').style.display = 'block';
        }, 1300);

        setTimeout(function(){
            document.getElementById('soundgameover').play();
            game.style.opacity = '0%';
            document.getElementById('textOver').style.opacity = '100%';
            document.getElementById('background').style.background = '#000000';
            game.style.display = 'none';
            points.style.color = '#f1e203';
            points.style.boxShadow = 'none';
            points.style.border = '0';
            points.style.background = 'none';
        }, 2400);

        setTimeout(function(){
            points.style.animation = 'up 3.5s';
            document.getElementById('playAgain').style.display = 'block';
            document.getElementById('textOverD').style.display = 'block';
            setTimeout(function(){
                points.style.top = '20%'
                document.getElementById('playAgain').style.opacity = '100%';
                document.getElementById('textOverD').style.opacity = '100%';
            }, 3500);
        }, 5000);

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', function(){
    if (event.code === 'ArrowUp') {
        jump();
    }
});
};
