let adFound = false;
let videoAdFound = false;
let shouldCloseVideoAd = false;
let adWait = 5000;
let videoWait = 5000;
setInterval(() => {
    const adClose = document.querySelector('.ytp-ad-overlay-close-container .ytp-ad-overlay-close-button');
    const videoAdClose = document.querySelector('.ytp-ad-skip-button-container .ytp-ad-skip-button');
    const videoAdDisplayed = !!document.querySelector('.ytp-ad-skip-button-container');
    if (adClose && !adFound) {
        setTimeout(() => {
            adClose.click();
            adFound = false;
        }, adWait);
        adFound = true;
    }
    if (videoAdDisplayed && !videoAdFound) {
        setTimeout(() => {
            shouldCloseVideoAd = true;
        }, videoWait);
        videoAdFound = true;
    }
    if (videoAdClose && shouldCloseVideoAd) {
        videoAdClose.click();
        shouldCloseVideoAd = false;
        videoAdFound = false;
    }
}, 100);
