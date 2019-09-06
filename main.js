class Lista {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class ListaTarefas extends Lista {

}

var MinhaLista = new ListaTarefas();

document.getElementById('novatarefa').onclick = function () {
    MinhaLista.add('Nova Tarefa');
}