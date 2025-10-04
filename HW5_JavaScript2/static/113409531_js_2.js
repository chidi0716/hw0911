const checkAll = document.getElementById('check_all');
const checkItems = document.querySelectorAll('.check_item');
const total = document.getElementById('total');
const rows = [...document.querySelectorAll('#cart tbody tr')].filter(r => r.querySelector('.price'));
const checkoutBtn = document.getElementById('btn_checkout');

checkAll.addEventListener('change', () => {
    checkItems.forEach(item => item.checked = checkAll.checked);
    recalc();
});

checkItems.forEach(item => {
    item.addEventListener('change', () => {
        checkAll.checked = [...checkItems].every(i => i.checked);
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
function getStock() {
    return Number(row.querySelector('.stock').textContent);
}
rows.forEach(row => {
    const plus = row.querySelector('.btn_plus');
    const minus = row.querySelector('.btn_minus');
    const qtyInput = row.querySelector('.input_qty');
    const price = Number(row.querySelector('.price').textContent);
    const subtotalCell = row.querySelector('.subtotal');

    function updateSubtotal() {
        const q = Number(qtyInput.value) || 0;
        subtotalCell.textContent = String(q * price);
        recalc();
    }

    plus.addEventListener('click', () => {
        let q = Number(qtyInput.value) || 0;
        const stock = getStock();
        if (stock === 0) q = 0;
        else if (q < stock) q++;
        qtyInput.value = q;
        updateSubtotal();
    });

    minus.addEventListener('click', () => {
        let q = Number(qtyInput.value) || 0;
        const stock = getStock();
        if (stock === 0) q = 0;
        else if (q > 1) q--;
        qtyInput.value = q;
        updateSubtotal();
    });
    qtyInput.addEventListener('blur', () => {
        let q = Number(qtyInput.value);
        const stock = getStock();
        if (!Number.isFinite(q)) q = 0;
        q = Math.floor(q);
        if (stock === 0) q = 0;
        else if (q < 1) q = 1;
        else if (q > stock) q = stock;
        qtyInput.value = q;
        updateSubtotal();
    });

    updateSubtotal();
});


checkoutBtn.onclick = function () {
    let sum = 0;
    let detail = "";

    rows.forEach(row => {
        const cb = row.querySelector(".check_item");
        if (cb.checked) {
            const name = row.children[1].innerText.trim();
            const price = Number(row.querySelector(".price").textContent);
            const qty = Number(row.querySelector(".input_qty").value);
            const subtotal = price * qty;
            sum += subtotal;
            detail += `${name} x ${qty} = ${subtotal}\n`;
        }
    });

    if (sum <= 0) return; // 沒選任何商品就不動作

    alert("購買成功\n"+detail + `\n總金額：${sum}`);

    // 結帳後處理
    rows.forEach(row => {
        const cb = row.querySelector(".check_item");
        if (cb.checked) {
            const stockCell = row.querySelector(".stock");
            const qtyInput = row.querySelector(".input_qty");
            const price = Number(row.querySelector(".price").textContent);
            let stock = Number(stockCell.textContent);
            const qty = Number(qtyInput.value);

            stock -= qty;
            if (stock < 0) stock = 0;
            stockCell.textContent = String(stock);

            qtyInput.value = stock > 0 ? 1 : 0;
            row.querySelector(".subtotal").textContent = String(qtyInput.value * price);
            cb.checked = false;
        }
    });

    checkAll.checked = false;
    recalc();
};