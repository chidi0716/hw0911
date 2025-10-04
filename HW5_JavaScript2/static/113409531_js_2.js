const checkAll = document.getElementById('check_all');
const checkItems = document.querySelectorAll('.check_item');
const total = document.getElementById('total');
checkAll.addEventListener('change', () => {
    checkItems.forEach(item => item.checked = checkAll.checked);
    recalc();
});