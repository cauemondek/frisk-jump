var limit = false;
if (!limit){
document.addEventListener('mousemove', function(){
    limit = true;
    setTimeout(function(){
    document.getElementById('soundstartscreen').play();
}, 1)}
)
};

document.getElementById('soundstartscreen').addEventListener("ended", function() {
    document.getElementById('soundstartscreen').currentTime = 0;
    document.getElementById('soundstartscreen').play();
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
    document.getElementById('soundstartscreen').src = './sounds/FightMusic.mp3';
});

document.getElementById('playAgain').addEventListener('click', function(){
    restartGame();
});


function restartGame(){
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
    document.getElementById('selectedbutton').play();
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
        
        document.getElementById('soundstartscreen').src = './';

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