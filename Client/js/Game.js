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
        this.graphics = new ConsoleGraphics(16, 16, 7, 0, 0, ResourceLoader.getImage("font"), 8, 12);
        //Graphics test
        this.graphics.setTileFull(7, 7, this.graphics.getChar("'"), 3, 1);
        this.graphics.setHorizontalLine(0, 0, 7, this.graphics.getChar("@"), 2, 0);
        this.graphics.setVerticalLine(0, 0, 7, this.graphics.getChar("#"), 2, 0);
        this.graphics.setBeautifulRectangle(2, 2, 10, 7);
        this.graphics.setString(3, 5, "Hello!", 2, 0);
        this.graphics.setString(3, 6, "420@69", 2, 0);
    }
    //Dummy function
    Game.prototype.test = function () {
        this.context2D.fillStyle = "#ff00ff";
        this.context2D.fillRect(0, 0, 500, 500);
    };
    Game.prototype.start = function () {
        var self = this;
        var anim = function () {
            self.tick();
            requestAnimationFrame(anim);
        };
        requestAnimationFrame(anim);
    };
    Game.prototype.tick = function () {
        this.context2D.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.graphics.draw(0, 0, this.context2D);
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