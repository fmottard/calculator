var result = +'10';
var left = '0';
var right = '0';
var operateur = '';
function add(valeur) {
    if (operateur.length > 0) {
        right = right + valeur;
        document.getElementById('texte').textContent = left + operateur + right;
    }
    else {
        left = left + valeur;
        document.getElementById('texte').textContent = left;
    }
}
function reset() {
    left = '0';
    right = '0';
    operateur = '';
    document.getElementById('texte').textContent = '--';
}
function operation(symbole) {
    operateur = symbole;
    document.getElementById('texte').textContent = left + operateur + right;
}
function additionne() {
    operation('+');
    document.getElementById('texte').textContent = left + operateur + right;
}
function soustrait() {
    operation('-');
    document.getElementById('texte').textContent = left + operateur + right;
}
function multiplie() {
    operation('*');
    document.getElementById('texte').textContent = left + operateur + right;
}
function divise() {
    operation('/');
    document.getElementById('texte').textContent = left + operateur + right;
}
function egal() {
    if (operateur === '+') {
        var total = Number(left) + Number(right);
        document.getElementById('texte').textContent = total.toString();
    }
    if (operateur === '-') {
        var total = Number(left) - Number(right);
        document.getElementById('texte').textContent = total.toString();
    }
    if (operateur === '*') {
        var total = Number(left) * Number(right);
        document.getElementById('texte').textContent = total.toString();
    }
    if (operateur === '/') {
        var total = Number(left) / Number(right);
        document.getElementById('texte').textContent = total.toString();
    }
}
