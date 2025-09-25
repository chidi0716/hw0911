document.write('<h2>最新型橫式計算機</h2>');
document.write('<input id="typeBar" type="text"><br>');
for (let i = 0; i <= 9; i++) {
    document.write('<button onclick="add(' + i + ')">' + i + '</button>');
}
