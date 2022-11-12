const clickCounter = document.getElementById('clicker__counter');
const img = document.getElementById('cookie');
const speed = document.getElementById('speed');
let start = 0;
let end;

cliker = () => {
    img.onmousedown = () => {
        img.width += 50;
        end = new Date()
        if (start !== 0) {
            diff = 1000 / (end - start);
        }
        start = new Date()
        speed.textContent = diff.toFixed(2).toString()
        clickCounter.textContent = +clickCounter.textContent + 1;
    }
    img.onmouseup = () => {
        img.width -=50;
    }

}
cliker()
