document.write(`
  <h2>最新型橫式計算機</h2>
  <input id="typeBar" type="text"><br>
`);

for (let i = 0; i <= 9; i++) {
    document.write('<button onclick="add(' + i + ')">' + i + '</button>');
}

document.write(`
  <br>
  <button onclick="add('+')">+</button>
  <button onclick="add('-')">-</button>
  <button onclick="add('*')">*</button>
  <button onclick="add('/')">/</button>
  <button onclick="slove()">=</button>
  <button onclick="clear()">clear</button>
`);

function add(input) {
    const bar = document.getElementById('typeBar');
    bar.value += input;
}

function slove() {
}

function clear() {
}