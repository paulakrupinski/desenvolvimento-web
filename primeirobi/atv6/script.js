const inputTarefa = document.getElementById("tarefaInput");
const botaoAdicionar = document.getElementById("addBtn");
const listaTarefas = document.getElementById("listaTarefas");

botaoAdicionar.addEventListener("click", adicionarTarefa);

function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim();

    if (textoTarefa === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const item = document.createElement("li");

    item.innerHTML = `
        <input type="checkbox" class="check">
        <span>${textoTarefa}</span>
    `;

    listaTarefas.appendChild(item);

    inputTarefa.value = "";
}

listaTarefas.addEventListener("click", manipularCliqueNaLista);

function manipularCliqueNaLista(event) {

    if (event.target.classList.contains("check")) {
        const texto = event.target.nextElementSibling;
        texto.classList.toggle("concluida");
        return;
    }

    if (event.target.tagName === "LI") {
        event.target.remove();
    }
}