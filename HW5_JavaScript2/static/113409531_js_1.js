let answer = Math.floor(Math.random() * 101);
let tries = 0;
let seconds = 0;
let timer = null;
const clock = document.getElementById('clock');
const records = document.getElementById('records');
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
        const elapsed = seconds;
        alert(`答對了！你總共猜了 ${tries} 次，耗時 ${elapsed} 秒`);

        const li = document.createElement('li');
        li.textContent = `猜了 ${tries} 次，耗時 ${elapsed} 秒，時間 ${new Date().toLocaleTimeString()}`;
        records.appendChild(li);

        answer = Math.floor(Math.random() * 101);
        hint.innerText = "數字已經重置再玩一次吧";
        tries = 0;
        clearInterval(timer);
        timer = null;
        seconds = 0;
    }
}