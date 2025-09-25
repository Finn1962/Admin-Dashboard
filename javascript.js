let mousedown = false;
let mouseoverNavResizer = false;
let mouseoverKopfResizer = false

const navigationsleiste = document.getElementById("navigationsleiste");
const navigationsleisteResizer = document.getElementById("navigationsleisteResizer");
const kopfleiste = document.getElementById("kopfleiste");
const kopfleisteResizer = document.getElementById("kopfleisteResizer");



//////////////////////////////////////////////////////////////////////////Abschnitt für Resizing//
document.addEventListener("DOMContentLoaded",()=> {
    navigationsleisteResizer.style.left = navigationsleiste.offsetWidth + "px";
    navigationsleisteResizer.style.height = (document.body.offsetHeight - kopfleiste.offsetHeight) + "px";
    kopfleisteResizer.style.top = kopfleiste.offsetHeight + "px";
});
window.addEventListener("resize",()=> {
    navigationsleisteResizer.style.left = navigationsleiste.offsetWidth + "px";
    navigationsleisteResizer.style.height = (document.body.offsetHeight - kopfleiste.offsetHeight) + "px";
    kopfleisteResizer.style.top = kopfleiste.offsetHeight + "px";
});

navigationsleisteResizer.addEventListener("mouseenter", ()=> {
    mouseoverNavResizer = true
    mouseoverKopfResizer = false
});
kopfleisteResizer.addEventListener("mouseenter", ()=> {
    mouseoverKopfResizer = true
    mouseoverNavResizer = false
});
document.addEventListener("mousedown", ()=> mousedown = true);
document.addEventListener("mouseup", ()=> {
    mousedown = false; 
    mouseoverNavResizer = false; 
    mouseoverKopfResizer = false
});

document.addEventListener("mousemove",(ereigniss)=>{ 
    if (!mousedown || (!mouseoverNavResizer && !mouseoverKopfResizer)) return;
    if (mouseoverNavResizer) {
        const neueWeite = ereigniss.clientX;
        navigationsleiste.style.width = neueWeite  + "px";
        const abstand = navigationsleisteResizer.getBoundingClientRect();
        if (abstand.left > 140){ //Ohne die drei Ifabfragen, bugt das Programm und der Resizer fährt sich fest
            navigationsleisteResizer.style.left = neueWeite  + "px";
        } else if (ereigniss.clientX > 140){
            navigationsleisteResizer.style.left = neueWeite  + "px";
        } else if (abstand.left < 140){
            navigationsleisteResizer.style.left = 140 + "px";
        }
    } 
    if (mouseoverKopfResizer) {
        const neueWeite = ereigniss.clientY + "px";
        kopfleiste.style.height = neueWeite;
        kopfleisteResizer.style.top = neueWeite;
        navigationsleisteResizer.style.height = (document.body.offsetHeight - kopfleiste.offsetHeight) + "px";
    }
});


//////////////////////////////////////////////////////////////////////////Abschnitt für Resizing//