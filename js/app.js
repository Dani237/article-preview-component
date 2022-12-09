let sharePop = document.querySelector('.share-content');
let shareBtn = document.querySelector('.share');
let opacityC = document.querySelector('.opacityC');
let shareSvg = document.querySelector('.share-svg');

let pulsado = true;

shareBtn.addEventListener('click', () => {
    pulsado = !pulsado;
    
    if (pulsado == false) {
        opacityC.setAttribute("style", "opacity: 1; transition: all .2s ease");
        shareSvg.setAttribute("style", "fill: white; transition: all .1s ease-in");
        shareBtn.setAttribute("style", "background-color: #6E8098; transition: all .3s ease-out .2s")
    } else {
        opacityC.setAttribute("style", "opacity: 0; transition: all .2s ease");
        shareSvg.setAttribute("style", "fill: #6E8098; transition: all .2s ease-out");
        shareBtn.setAttribute("style", "background-color: hsl(210, 46%, 95%); transition: all .3s ease-out .2s")
    }
});

