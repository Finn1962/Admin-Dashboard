let mousedown = false;
let mouseoverNavResizer = false;
let mouseoverKopfResizer = false

const navigationsleiste = document.getElementById("navigationsleiste");
const navigationsleisteResizer = document.getElementById("navigationsleisteResizer");
const kopfleiste = document.getElementById("kopfleiste");
const kopfleisteResizer = document.getElementById("kopfleisteResizer");


document.addEventListener("DOMContentLoaded",()=> {navigationsleisteResizer.style.left = navigationsleiste.offsetWidth + "px"
                                                    kopfleisteResizer.style.top = kopfleiste.offsetHeight + "px"});
window.addEventListener("resize",()=> {navigationsleisteResizer.style.left = navigationsleiste.offsetWidth + "px"
                                        kopfleisteResizer.style.top = kopfleiste.offsetHeight + "px"});

document.addEventListener("mousedown", ()=> mousedown = true);
navigationsleisteResizer.addEventListener("mouseenter", ()=> mouseoverNavResizer = true);
kopfleiste.addEventListener("mouseenter", ()=> mouseoverKopfResizer = true);
document.addEventListener("mouseup", ()=> {mousedown = false, mouseoverNavResizer = false, mouseoverKopfResizer = false});

document.addEventListener("mousemove",(ereigniss)=>{ 
    if (!mousedown || !mouseoverNavResizer && !mouseoverKopfResizer) return;
    if (mouseoverNavResizer) {
        const neueWeite = ereigniss.clientX + "px";
        navigationsleiste.style.width = neueWeite;
        navigationsleisteResizer.style.left = neueWeite;
    }
    if (mouseoverKopfResizer) {
        const neueWeite = ereigniss.clientY + "px";
        kopfleiste.style.height = neueWeite;
        kopfleisteResizer.style.top = neueWeite;
    }
});