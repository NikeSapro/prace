// INTERAKTIVNÍ ZÁLOŽKY (TABS)
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Odstranění aktivních tříd
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Přidání aktivní třídy zvolené záložce
        button.classList.add('active');
        const targetId = button.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// INTERAKTIVNÍ PLÁNOVAČ ROZPOČTU
const calculateBtn = document.getElementById('calculate-btn');
const styleSelect = document.getElementById('style');
const daysInput = document.getElementById('days');
const resultBox = document.getElementById('result-box');

calculateBtn.addEventListener('click', () => {
    const dailyRate = parseInt(styleSelect.value);
    const days = parseInt(daysInput.value);

    if (isNaN(days) || days <= 0) {
        resultBox.innerHTML = `<p style="color: #ef4444;">Zadejte platný počet dní (alespoň 1).</p>`;
        return;
    }

    const totalCost = dailyRate * days;
    resultBox.innerHTML = `<p>Odhadovaný celkový rozpočet na <strong>${days}</strong> dny/dní činí přibližně <strong>${totalCost} €</strong>.</p>`;
});