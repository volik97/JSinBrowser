let hole = index => document.getElementById(`hole${index}`);
let lostMole = document.getElementById('lost')
let deadMole = document.getElementById('dead')
let counterHits = parseInt(deadMole.textContent);
let counterLosts = parseInt(lostMole.textContent);


for (i = 1; i <= 9; i++) {
    hole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            if (counterHits === 9) {
                counterLosts = 0;
                counterHits = 0;
                deadMole.textContent = counterHits;
                lostMole.textContent = counterLosts;
                return alert('You win!');
            } else {
                counterHits += 1;
                deadMole.textContent = counterHits;
            }

        } else {
            if (counterLosts === 4) {
                counterLosts = 0;
                counterHits = 0;
                deadMole.textContent = counterHits;
                lostMole.textContent = counterLosts ;
                return alert('You lose!');
            } else{
                counterLosts += 1;
                lostMole.textContent = counterLosts;
            }

        }

        // checkGame(hits, )
    }
}