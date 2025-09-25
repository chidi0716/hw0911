let answer = Math.floor(Math.random() * 101);
let tries = 0;

const input = document.getElementById('guess');

function Guess() {
    const value = Number(input.value);
    tries++;

    if (value > answer) {
        alert("太大了")
    } else if (value < answer) {
        alert("太小了")
    } else {
        alert(`答對了 你總共猜了 ${tries} 次`);
        answer = Math.floor(Math.random() * 101); // 換新題目
        tries = 0;
    }
}