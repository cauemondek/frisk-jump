<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Frisk Jump</title>

    <link rel="stylesheet" href="./css/style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=IBM+Plex+Mono:wght@300&family=Inter:wght@300&family=Montserrat:wght@500&family=Poppins:ital@1&family=Press+Start+2P&family=Raleway:wght@300&family=Roboto+Mono:wght@500&display=swap" rel="stylesheet">

    <script src="https://kit.fontawesome.com/dc49a974a4.js" crossorigin="anonymous"></script>

</head>
<body id="background">
    <!-- SOUNDS -->
    <audio id="soundgameover">
        <source src="./sounds/GameOver.mp3" type="audio/mpeg">
    </audio>
    <audio id="soundsoulbreak">
        <source src="./sounds/SoulBreak.mp3" type="audio/mpeg">
    </audio>
    <audio id="soundstartscreen">
        <source src="./sounds/StartScreen.mp3" type="audio/mpeg">
    </audio>
    <audio id="selectedbutton">
        <source src="./sounds/SelectedButton.mp3" type="audio/mpeg">
    </audio>

    <audio id="restartsound">
        <source src="./sounds/Restart.mp3" type="audio/mpeg">
    </audio>
    <audio id="fightmusic">
        <source src="./sounds/FightMusic.mp3" type="audio/mpeg">
    </audio>
    <!-- =============== -->

    <main>
        <div class="game-initial" id="start-screen">
            <div class="info">
                <img src="./img/frisk.gif" alt="" class="imgInfo">
                <img src="./img/spearOne.png" alt="" class="imgInfo">

            </div>
            <div class="textEveryone">
            <p>* <span class="yellow">Clique na tela</span> ou pressione a tecla <span class="yellow">"Arrow Up"</span> para pular das lanças! Cuidado para não perder sua <span class="red">alma</span> para Undyne.</p><br>
            <p class="text">Mantenha sua <span class="yellow">DETERMINAÇÃO</span>.</p>
        </div>
            <img src="./img/button.png" alt="" id="start">

        </div>
        <div class="game-board" id="game-board">
            <img src="./img/spears.png" alt="" class="spears">
            <img src="./img/frisk.gif" alt="" class="frisk">
            <img src="./img/spearOne.png" class="spear">
        </div>

        <div >
            <h1 id="textOver">Game Over</h1>
            <p id="textOverD">Frisk! <br><br>Você deve se manter <span class="yellow">DETERMINADO</span>.</p>
            <h1 id="playAgain">Jogar novamente?</h1>
        </div>

        <div class="points" id="table-points">
            <p>Score: </p><br><h1 id="score">0</h1>
        </div>

        <div class="user" id="warning">
            <p class="warning">For a better experience, click in the headphones to allow sounds =)</p>
            <i class="fa-solid fa-headphones" id="clickAccept"></i>
        </div>
    </main>

    <p class="copyright">&copy; Frisk Jump Game, Cauê Guise Mondek, <span id="ano"></span></p>
    <script>
            const year = document.querySelector('#ano');
            ano.innerHTML = new Date().getFullYear();
    </script>
    <script src="./js/index.js"></script>
</body>
</html>
