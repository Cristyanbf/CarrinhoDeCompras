let totalGeral = 0 
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$: 0,00';
document.getElementById('quantidade').value = 0;

function adicionar(){
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0];
let valorProduto = produto.split('R$')[1];
let quantidade = document.getElementById('quantidade').value;

if(quantidade < 1 ) {
    alert("A quantidade não deve ser 0!");
    carrinho.innerHTML = carrinho.innerHTML;
}

let preço = valorProduto * quantidade 
let carrinho = document.getElementById('lista-produtos')
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidade}x</span>${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>`

totalGeral = totalGeral + preço;
campoTotal = document.getElementById('valor-total');
campoTotal.textContent = `R$${totalGeral}`;
document.getElementById('quantidade').value = 0;

}

function limpar(){
    let totalGeral = 0 ;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$: 0,00' ;
document.getElementById('quantidade').value = 0;   
    }