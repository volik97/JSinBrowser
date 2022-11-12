// //Таймер обратного отсчёта
// let timer = document.getElementById('timer');
// let interval;
//
// function countdown() {
//     timer.textContent -= 1;
//     if (timer.textContent === '0'){
//         alert('Timer!')
//         clearInterval(interval)
//     }
// }
//
// interval = setInterval(countdown, 1000);

//Повышенный уровень сложности #1
let time = document.getElementById('hh:mm:ss')
let interval;

function timeConverter(){
    const [hours, minutes, seconds] = time.textContent.split(':');

    return (+hours * 60 * 60) + (+minutes * 60) + (+seconds)
}

function countdownTimer() {
    convtime = timeConverter();
    convtime--;
    if (convtime === 0){
        clearInterval(interval);
        alert("Timer!");
    }

    const hh = Math.floor(convtime / 60 / 60);
    const mm = Math.floor((convtime / 60) - (hh * 60));
    const ss = Math.floor(convtime % 60);
    console.log(time.textContent)
    return time.textContent = (hh < 10? '0' + hh : hh) + ':' + (mm < 10? '0' + mm : mm) + ':' + (ss < 10? '0' + ss : ss);
}

interval = setInterval(countdownTimer, 1000)

