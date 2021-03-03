import { videoInCenter } from '../storage/elementsValues.js';

const autoplay = () => {

    let centerY = document.documentElement.clientHeight / 2;
    let centerX = (document.documentElement.clientWidth / 2) + 100;
    let el = document.elementFromPoint(centerX, centerY);

    if (el.nodeName == 'VIDEO') {
        if (!videoInCenter.el || !el.isSameNode(videoInCenter.el)) {
            videoInCenter.el = el;
            el.play();
        }
    } else {
        if (videoInCenter.el) {
            videoInCenter.el.pause();
            videoInCenter.el = '';
        }
    }

}

export default autoplay;