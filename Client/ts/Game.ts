enum ExecutionModes {
    MODE_BROWSER,
    MODE_ELECTRON
}

class Game {
    private canvas: HTMLCanvasElement;
    private context2D: CanvasRenderingContext2D;
    private mode: ExecutionModes;

    public version: number = 0.01;

    constructor (canvas: HTMLElement, mode: ExecutionModes) {
        this.canvas = <HTMLCanvasElement> canvas;
        this.context2D = this.canvas.getContext("2d");
        this.mode = mode;
    }

    //Dummy function
    public test() {
        this.context2D.fillStyle = "#ff00ff";
        this.context2D.fillRect(0, 0, 500, 500);
    }

    public getCanvas() {
        return this.canvas;
    }

    public getMode() {
        return this.mode;
    }
}