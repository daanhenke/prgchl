enum ExecutionModes {
    MODE_BROWSER,
    MODE_ELECTRON
}

class Game {
    private canvas: HTMLCanvasElement;
    private context2D: CanvasRenderingContext2D;
    private mode: ExecutionModes;

    private graphics;

    public version: number = 0.01;

    constructor (canvas: HTMLElement, mode: ExecutionModes) {
        this.canvas = <HTMLCanvasElement> canvas;
        this.context2D = this.canvas.getContext("2d");
        this.mode = mode;

        this.graphics = new ConsoleGraphics(16, 16, 7, 0, 0, ResourceLoader.getImage("font"), 8, 12);

        //Graphics test
        this.graphics.setTileFull(7, 7, this.graphics.getChar("'"), 3, 1);
        this.graphics.setHorizontalLine(0, 0, 7, this.graphics.getChar("@"), 2, 0);
        this.graphics.setVerticalLine(0, 0, 7, this.graphics.getChar("#"), 2, 0);
        this.graphics.setBeautifulRectangle(2, 2, 10, 7);
        this.graphics.setString(3, 5, "Hello!", 2, 0);
        this.graphics.setString(3, 6, "420@69", 2, 0)
    }

    //Dummy function
    public test() {
        this.context2D.fillStyle = "#ff00ff";
        this.context2D.fillRect(0, 0, 500, 500);
    }

    public start() {
        let self = this;
        var anim = function () {
            self.tick();
            requestAnimationFrame(anim);
        };

        requestAnimationFrame(anim);
    }

    public tick() {
        this.context2D.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.graphics.draw(0, 0, this.context2D);
    }

    public getCanvas() {
        return this.canvas;
    }

    public getMode() {
        return this.mode;
    }
}