let gameInstance;

window.onload = function () {
    gameInstance = new Game(document.getElementById("canvas-game"), ExecutionModes.MODE_BROWSER);
    setTimeout(function () {
        gameInstance.start();
    }, 10);
}