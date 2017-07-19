class ConsoleGraphics {
    private tileID = [];
    private fColorID = [];
    private bColorID = [];

    private tileWidth;
    private tileHeight;
    private fontResource;

    constructor(width, height, defaultForeground, defaultBackground, defaultTile, fontResource, tileWidth, tileHeight) {
        for (let i = 0; i < width; i++) {
            let tileRow = [];
            let fColorRow = [];
            let bColorRow = [];

            for (let j = 0; j < height; j++) {
                tileRow.push(defaultTile);
                fColorRow.push(defaultForeground);
                bColorRow.push(defaultBackground);
            }

            this.tileID.push(tileRow);
            this.fColorID.push(fColorRow);
            this.bColorID.push(bColorRow);
        }

        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;

        this.fontResource = fontResource;
    }

    public getForegroundColor(x: number, y: number) {
        return this.fColorID[x][y];
    }

    public getBackgroundColor(x: number, y: number) {
        return this.bColorID[x][y];
    }

    public getTile(x: number, y: number) {
        return this.tileID[x][y];
    }

    public setForegroundColor(x: number, y: number, color: number) {
        this.fColorID[x][y] = color;
    }

    public setBackgroundColor(x: number, y: number, color: number) {
        this.bColorID[x][y] = color;
    }

    public setTile(x: number, y: number, tile: number) {
        this.tileID[x][y] = tile;
    }

    public draw(x, y, context: CanvasRenderingContext2D) {
        for (let i = 0; i < this.tileID.length; i++) {
            for (let j = 0; j < this.tileID[i].length; j++) {
                context.drawImage(this.fontResource, this.tileID[i][j] * this.tileWidth, (this.bColorID[i][j] * 16 + this.fColorID[i][j]) * this.tileHeight, this.tileWidth, this.tileHeight, x + i * this.tileWidth, y + j * this.tileHeight, this.tileWidth, this.tileHeight);
            }
        }
    }

    public setVerticalLine(x, y, h, tile, fg, bg) {
        for (let j = 0; j < h; j++) {
            this.setTileFull(x, y + j, tile, fg, bg)
        }
    }

    public setHorizontalLine(x, y, w, tile, fg, bg) {
        for (let i = 0; i < w; i++) {
            this.setTileFull(x + i, y, tile, fg, bg)
        }
    }

    public setTileFull(x, y, tile, fg, bg) {
        this.tileID[x][y] = tile;
        this.bColorID[x][y] = bg;
        this.fColorID[x][y] = fg;
    }

    public setBeautifulRectangle(x, y, w, h) {
        //Corners
        this.setTileFull(x, y, 685, 7, 0);
        this.setTileFull(x + w, y, 688, 7, 0);
        this.setTileFull(x, y + h, 691, 7, 0);
        this.setTileFull(x + w, y + h, 694, 7, 0);

        //Vertical
        this.setVerticalLine(x, y + 1, h - 1, 682, 7, 0);
        this.setVerticalLine(x + w, y + 1, h - 1, 682, 7, 0);

        //Horizontal
        this.setHorizontalLine(x + 1, y, w - 1, 681, 7, 0);
        this.setHorizontalLine(x + 1, y + h, w - 1, 681, 7, 0);
    }

    public setString(x, y, string, fg, bg) {
        let i = 0;
        for (let letter in string) {
            this.setTileFull(x + i, y, this.asciiToTileID(string.charCodeAt(i)), fg, bg);
            i++;
        }
    }

    public setChar(x, y, char, fg, bg) {
        this.setTileFull(x, y, this.asciiToTileID(char.charCodeAt(0)), fg, bg);
    }

    public getChar(char) {
        console.log(this.asciiToTileID(char.charCodeAt()))
        return this.asciiToTileID(char.charCodeAt());
    }

    public asciiToTileID (ascii) {
        ascii -= 32;
        if (ascii > 126 || ascii < 0)
            return 0;
        else
            return ascii;
    }
}