let hole = index => document.getElementById(`hole${index}`);
let lostMole = document.getElementById('lost')
let deadMole = document.getElementById('dead')
let wings = parseInt(deadMole.textContent);
let losts = parseInt(lostMole.textContent);

function checkGame (deadMole, lostMole) {
    console.log(deadMole, lostMole);
    if (lostMole === 5) {
        alert('You lose!')
        location.reload();
    }
    if (deadMole === 10) {
        alert('You win!');
        location.reload();
    }
}

for (i = 1; i <= 9; i++) {
    hole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            wings += 1;
            deadMole.textContent = wings;
        } else {
            losts += 1;
            lostMole.textContent = losts;
        }

        checkGame(wings, losts)
    }
}