class ListaTAD {
    constructor() {
        this.ItemInput = document.getElementById('ItemInput');
        this.ButonFiliar = document.getElementById('FiliarButton');
        this.ButtonTirarFila = document.getElementById('Desenfilirear');
        this.ElementoFila = document.getElementById('FilaLista');
    }
    validarInput() {
        if (ItemInput.value == '') {
            window.alert('Digite um valor correto');
            return false;
        } 
            return true;
    }
    addEventListeners() {
        this.ButonFiliar.addEventListener('click', () => this.validarInput());
        this.ButtonTirarFila.addEventListener('click', () => this.ButtonTirarFila());
    }
}
let listaTad =  new ListaTAD();
listaTad.addEventListeners();




