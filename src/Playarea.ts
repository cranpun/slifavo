import { Panelcanvas } from "./Panelcanvas";

export class Playarea {

    private cssid_img: string;
    private cssid_wrappanels: string;
    private img: HTMLImageElement;
    private panelcanvases: Panelcanvas[];
    private goalhandler: () => void;

    constructor(cssid_img: string, cssid_wrappanels: string, goalhandler: () => void) {
        this.cssid_img = cssid_img;
        this.cssid_wrappanels = cssid_wrappanels;
        this.img = document.querySelector(cssid_img);
        this.panelcanvases = [];
        this.goalhandler = goalhandler;
    }

    /**
     * canvasesのpositionに従ってcanvasをwrapに追加。
     */
    private drawCanvases(): void {
        const canvases: HTMLDivElement = document.querySelector(this.cssid_wrappanels);
        const panelcount = Math.sqrt(this.panelcanvases.length);

        // 前回のパネルは全て削除
        while (canvases.firstChild) {
            canvases.removeChild(canvases.firstChild);
        }

        let nowidx = 0;
        // キャンバスを表示
        for (let r = 0; r < panelcount; r++) {
            const rowdiv: HTMLDivElement = document.createElement("div");
            for (let c = 0; c < panelcount; c++) {
                for (let cv of this.panelcanvases) {
                    if (cv.position === nowidx) {
                        // この位置のキャンバス
                        rowdiv.append(cv.canvas);
                        nowidx++;
                        break; // 次のパネルへ
                    }
                }
            }
            canvases.append(rowdiv);
        }
    }

    public start(): void {

        const panelcount: number = 3;
        const canvases: HTMLDivElement = document.querySelector(this.cssid_wrappanels);

        // パネルキャンバスを生成
        const pw = this.img.width / panelcount;
        const ph = this.img.height / panelcount;

        for (let i = 0; i < panelcount * panelcount; i++) {
            const cv = new Panelcanvas(panelcount, i, pw, ph);
            cv.canvas.addEventListener("click", this.evclickPanelcanvas);
            if (i !== (panelcount * panelcount) - 1) {
                // 最後の一つはスライド用のemptyのため描画しない
                cv.drawImage(this.img);
            }
            this.panelcanvases.push(cv);
        }

        // 問題作成：emptyをランダムで移動。移動回数はpanelcountに応じて増加
        let nowemptyindex = (panelcount * panelcount) - 1;
        let premove = nowemptyindex; // 前回と同じパネルは動かさない。初回はありえないnowempty
        let cntshuffle = panelcount * 100;
        for (let i = 0; i < cntshuffle; i++) {
            // 全てのパネルから移動可能なパネルを抽出
            const movable: number[] = [];
            for (let pc of this.panelcanvases) {
                const nowcav = this.panelcanvases[nowemptyindex];
                // 前回のパネル以外かつ移動可能なもの
                if (pc.isAdjoin(nowcav) && pc.index !== premove) {
                    movable.push(pc.index);
                }
            }

            if (movable.length <= 0) {
                // 抽選失敗
                continue;
            }
            // 今回移動するパネルを決定
            const moveindex = Math.floor(Math.random() * (movable.length));
            console.log(movable);
            console.log(movable[moveindex]);
            this.move(movable[moveindex]);

            // 現在の空きパネルが移動したので状態を更新
            premove = nowemptyindex; // 前回移動したパネル＝前回のempty
            nowemptyindex = movable[moveindex];
        }

        // 描画
        this.img.style.display = "none";
        canvases.style.display = "block";
        this.drawCanvases();
    }

    /**
     * panelcanvasに設定するクリックハンドラ。移動。
     */
    public evclickPanelcanvas = (ev: Event): void => {
        const index: number = parseInt((<HTMLCanvasElement>ev.target).dataset.index);
        this.move(index);
        this.drawCanvases();

        // ゴール判定
        if (this.isGoal()) {
            (<HTMLElement>document.querySelector(this.cssid_wrappanels)).style.display = "none";
            const img: HTMLElement = document.querySelector(this.cssid_img);
            img.style.display = "inline";

            // アニメーション
            // アニメーション用のクラスを追加
            img.classList.add("beforemove");
            // 実行後、少ししてからアニメ発火
            setTimeout(() => {
                img.classList.remove("beforemove");
            }, 100);

            this.goalhandler();
        }
    }

    /**
     * panelcanvases中のindex。
     */
    public findEmptyPanelcanvasArri(): number {
        for (let i = 0; i < this.panelcanvases.length; i++) {
            if (this.panelcanvases[i].isEmpty()) {
                // 配列の添字を返すが、添字とプロパティのindexは一致している。
                return i;
            }
        }

        // error
        throw new Error("not found empty panel.");
    }
    private move(index: number): void {
        // 現在のemptyパネルを取得
        const emptyi = this.findEmptyPanelcanvasArri();

        if (!this.panelcanvases[emptyi].isAdjoin(this.panelcanvases[index])) {
            // 接していないので移動しない
            return;
        }

        // 移動させるパネルとのindexを差し替え
        const swap = this.panelcanvases[index].position;
        this.panelcanvases[index].position = this.panelcanvases[emptyi].position;
        this.panelcanvases[emptyi].position = swap;

        // アニメーション用のクラスを追加
        this.panelcanvases[index].canvas.classList.add("beforemove");
        // 実行後、少ししてからアニメ発火
        setTimeout(() => {
            const cv: HTMLCanvasElement = document.querySelector(".panelcanvas.beforemove");
            if (cv !== null) {
                cv.classList.remove("beforemove");
            }
        }, 100);
    }

    private isGoal(): boolean {
        for (let cv of this.panelcanvases) {
            if (cv.index !== cv.position) {
                // 順番通りでない
                return false;
            }
        }

        // 順番どおりのためゴール
        return true;
    }
}
