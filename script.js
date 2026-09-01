const target = 20000000;

let saldo = Number(localStorage.getItem("saldoVario")) || 0;

function formatRupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
}

function updateTampilan() {
    const persentase = Math.min((saldo / target) * 100, 100);
    const sisa = Math.max(target - saldo, 0);

    document.getElementById("saldo").textContent = formatRupiah(saldo);
    document.getElementById("sisa").textContent = formatRupiah(sisa);
    document.getElementById("persentase").textContent =
        persentase.toFixed(1) + "%";

    document.getElementById("progress").style.width =
        persentase + "%";
}

function tambahTabungan() {
    const input = document.getElementById("jumlah");
    const jumlah = Number(input.value);

    if (jumlah <= 0) {
        alert("Masukkan jumlah tabungan yang benar.");
        return;
    }

    saldo += jumlah;

    if (saldo > target) {
        saldo = target;
    }

    localStorage.setItem("saldoVario", saldo);

    input.value = "";

    updateTampilan();
}

updateTampilan();
