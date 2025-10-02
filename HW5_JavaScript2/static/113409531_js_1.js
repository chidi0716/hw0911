let answer = Math.floor(Math.random() * 101);
let tries = 0;
let seconds = 0;
let timer = null;
const clock = document.getElementById('clock');

const input = document.getElementById('guess');
const hint = document.getElementById('hint');

function Guess() {
    const value = Number(input.value);
    tries++;
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            clock.innerText = String(seconds);
        }, 1000);
    }
    if (value > answer) {
        hint.innerText = "太大了！";
    } else if (value < answer) {
        hint.innerText = "太小了！";
    } else {
        hint.innerText = `答對了！你總共猜了 ${tries} 次`;
        answer = Math.floor(Math.random() * 101); // 換新題目
        tries = 0;
        clearInterval(timer); // 停止計時
        timer = null;         // 清空，讓下一局能重新開始
        seconds = 0;          // 歸零
    }
}