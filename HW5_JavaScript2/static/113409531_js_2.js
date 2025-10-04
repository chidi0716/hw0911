const checkAll = document.getElementById('check_all');
const checkItems = document.querySelectorAll('.check_item');
const total = document.getElementById('total');
const rows = document.querySelectorAll('#cart tbody tr');

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

rows.forEach(row => {
    const plus = row.querySelector('.btn_plus');
    const minus = row.querySelector('.btn_minus');
    const qtyInput = row.querySelector('.input_qty');
    const price = Number(row.querySelector('.price').textContent);
    const stock = Number(row.dataset.stock || row.querySelector('.stock').textContent);
    const subtotalCell = row.querySelector('.subtotal');

    function updateSubtotal() {
        const q = Number(qtyInput.value) || 0;
        subtotalCell.textContent = String(q * price);
        recalc();
    }

    plus.addEventListener('click', () => {
        let q = Number(qtyInput.value) || 0;
        if (q < stock) q++;
        qtyInput.value = q;
        updateSubtotal();
    });

    minus.addEventListener('click', () => {
        let q = Number(qtyInput.value) || 0;
        if (q > 0) q--;
        qtyInput.value = q;
        updateSubtotal();
    });
});