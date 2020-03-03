
import Toastr from "toastr2";

import { Playarea } from "./Playarea";

const toastr = new Toastr();

export const init = (cssid_img: string, cssid_wrappanels: string): void => {
    const playarea = new Playarea(cssid_img, cssid_wrappanels, () => {
        toastr.success("Congratulations!!");
    });
    playarea.start();
}

