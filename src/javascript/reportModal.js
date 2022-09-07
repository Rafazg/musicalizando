const fadewindow = document.getElementById('fade-content');
const btnOpen = document.querySelector('.report-open');
const sendReport = document.getElementById('reportButton');
const btnClose = document.getElementById('backButton');

btnOpen.addEventListener("click", openReport);
btnClose.addEventListener("click", closeReport);

function openReport() {
    fadewindow.style.display = 'block';
}

function closeReport() {
    fadewindow.style.display = 'none';
}