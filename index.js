const submenu = document.getElementById('submenu');
const input = document.getElementById('inputsubmenu');
const exit = document.getElementById('exit');
const head = document.getElementById('navegador');
const product = document.getElementById('product');
const productone = document.getElementById('productone');
const company = document.getElementById('company');
const connect = document.getElementById('connect');

function mostrar(){
    submenu.classList.add('show');
}
function quitar(){
    submenu.classList.remove('show');
}

input.addEventListener('click', mostrar);
exit.addEventListener('click', quitar);



