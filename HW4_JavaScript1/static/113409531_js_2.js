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
  <button onclick="add('(')">(</button>
  <button onclick="add(')')">)</button>
  <button onclick="solve()">=</button>
  <button onclick="clearbtn()">clear</button>
`);

function add(input) {
    const bar = document.getElementById('typeBar');
    bar.value += input;
}

function solve() {
    const bar = document.getElementById('typeBar');
    const result = eval(bar.value);  // 直接用 bar.value
    alert(`${bar.value} = ${result}`);
    bar.value = result;
}

function clearbtn() {
    const bar = document.getElementById('typeBar');
    bar.value = ("");
}