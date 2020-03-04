export class Panelcanvas {
    public canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    /**
     * 行/列のパネル数。総パネル数はこの二乗。
     */
    public panelcount: number;
    /**
     * 正解の位置。左上から横→縦の順。0スタート。Playarea.panelcanvasesのindexと自然と一致するはず。
     */
    public index: number;
    /**
     * 現在の位置。配置はindexと同じ。
     */
    public position: number;

    /**
     * @param img nullであればepmty
     */
    constructor(panelcount: number, index: number, w: number, h: number) {
        this.canvas = document.createElement("canvas");
        this.canvas.classList.add("defanime");
        this.canvas.classList.add("panelcanvas");
        // イベントハンドラでも取得できるようにindexを保存
        this.canvas.dataset.index = index.toString();
        this.ctx = this.canvas.getContext("2d");
        this.panelcount = panelcount;
        this.index = this.position = index; // positionの初期位置は正位置。
        this.canvas.width = w;
        this.canvas.height = h;

        // まずは空で描画
        this.makeEmpty();
    }

    /**
     * 位置情報に従って画像を描画
     */
    public drawImage(img: HTMLImageElement): void {
        const coord = this.coord();
        // cssでnaturalとw/hが変動しているため、natural側の座標とw/hを求める。
        const nw = img.naturalWidth / this.panelcount;
        const nh = img.naturalHeight / this.panelcount;
        const sx = nw * coord.x;
        const sy = nh * coord.y;
        this.ctx.drawImage(img, sx, sy, nw, nh, 0, 0, this.canvas.width, this.canvas.height);
    }
    private makeEmpty(): void {
        this.ctx.fillStyle = "rgb(120, 120, 120)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private coord(): Coord {
        const ret: Coord = new Coord();
        ret.x = this.position % this.panelcount; // 横位置は剰余算。
        ret.y = Math.floor(this.position / this.panelcount); // 縦位置は除算。
        return ret;
    }

    public isEmpty() {
        // panelcountから計算される最大indexであればempty
        const sqcnt = this.panelcount * this.panelcount;
        return sqcnt - 1 === this.index;
    }

    /**
     * 引数のキャンバスが接しているか確認
     */
    public isAdjoin(cav: Panelcanvas): boolean {
        const cavc = cav.coord();
        const myc = this.coord();
        // 片方が同じ位置で、もうひとつが1違い。
        if (myc.x === cavc.x && (myc.y - 1 === cavc.y || myc.y + 1 === cavc.y)) {
            // 上下で接している
            return true;
        } else if (myc.y === cavc.y && (myc.x - 1 === cavc.x || myc.x + 1 === cavc.x)) {
            // 左右で接している
            return true;
        }
        // 接していない
        return false;
    }
}


/******************************************************/
// utility classes
/******************************************************/

/**
 * 座標
 */
class Coord {
    /**
     * 左から右へ0〜
     */
    public x: number;
    /**
     * 上から下へ0〜
     */
    public y: number;
}
