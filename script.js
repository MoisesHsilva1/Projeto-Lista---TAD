const ItemInput =  document.getElementById('ItemInput');
const ButonFiliar =  document.getElementById('FiliarButon');
const ButtonTirarFila = document.getElementById('Desenfilirear');
const ElementoFila = document.getElementById('FilaLista');

function validarInput () {
    if(ItemInput.value == '') {
        window.alert('Digite um valor correto');
        return false;
    } else {
        return true;
    }

}

ButonFiliar.addEventListener('click', function(){
    validarInput()
})
