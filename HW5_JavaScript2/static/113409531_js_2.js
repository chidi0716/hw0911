const checkAll = document.getElementById('check_all');
const checkItems = document.querySelectorAll('.check_item');
const total = document.getElementById('total');
checkAll.addEventListener('change', () => {
    checkItems.forEach(item => item.checked = checkAll.checked);
    recalc();
});
checkItems.forEach(item => {
    item.addEventListener('change', () => {
        if (![...checkItems].every(i => i.checked)) {
            checkAll.checked = false;
        } else {
            checkAll.checked = true;
        }
        recalc();
    });
});
function recalc() {
    let sum = 0;
    checkItems.forEach(item => {
        if (item.checked) {
            const row = item.closest('tr');
            const subtotal = Number(row.querySelector('.subtotal').textContent);
            sum += subtotal;
        }
    });
    total.textContent = sum;
}