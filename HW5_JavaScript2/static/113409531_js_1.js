let answer = Math.floor(Math.random() * 101);
let tries = 0;

const input = document.getElementById('guess');
const hint = document.getElementById('hint');

function Guess() {
    const value = Number(input.value);
    tries++;

    if (value > answer) {
        hint.innerText = "太大了！";
    } else if (value < answer) {
        hint.innerText = "太小了！";
    } else {
        hint.innerText = `答對了！你總共猜了 ${tries} 次`;
        answer = Math.floor(Math.random() * 101); // 換新題目
        tries = 0;
    }
}