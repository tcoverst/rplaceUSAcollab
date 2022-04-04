// ==UserScript==
// @name         USA Flag Collab
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  USA Outline!
// @author       cover - script, cover - image
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/tcoverst/rplaceUSAcollab/main/rplaceUSA.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
            i.id = "usaFlagOverlay";
            console.log(i);
            return i;
        })())

    }, false);

}

setInterval(function(){
    // Refresh overlay every 10 minutes
    document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].getElementsByTagName("img")[0].src = "https://s3.us-east-2.amazonaws.com/cdn.danielflanagan/images/rplaceUSA.png?t=" + new Date().getTime(); // Cache buster
    console.log("Refreshed USA Flag Overlay at " + new Date());
}, 100000);
