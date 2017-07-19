var ExecutionModes;
(function (ExecutionModes) {
    ExecutionModes[ExecutionModes["MODE_BROWSER"] = 0] = "MODE_BROWSER";
    ExecutionModes[ExecutionModes["MODE_ELECTRON"] = 1] = "MODE_ELECTRON";
})(ExecutionModes || (ExecutionModes = {}));
var Game = (function () {
    function Game(canvas, mode) {
        this.version = 0.01;
        this.canvas = canvas;
        this.context2D = this.canvas.getContext("2d");
        this.mode = mode;
    }
    //Dummy function
    Game.prototype.test = function () {
        this.context2D.fillStyle = "#ff00ff";
        this.context2D.fillRect(0, 0, 500, 500);
    };
    Game.prototype.getCanvas = function () {
        return this.canvas;
    };
    Game.prototype.getMode = function () {
        return this.mode;
    };
    return Game;
}());
//# sourceMappingURL=Game.js.map