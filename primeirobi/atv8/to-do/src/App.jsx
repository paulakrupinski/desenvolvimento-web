import { useState } from "react";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  function adicionarTarefa() {
    if (input.trim() === "") {
      alert("Digite uma tarefa!");
      return;
    }

    const novaTarefa = {
      id: Date.now(),
      text: input,
      concluida: false
    };

    setTarefas([...tarefas, novaTarefa]);
    setInput("");
  }

  function removerTarefa(id) {
    const novaLista = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novaLista);
  }

  function toggleConcluida(id) {
    const novaLista = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    });

    setTarefas(novaLista);
  }

  return (
    <div className="container">
      <h1>Minha Lista de Tarefas</h1>

      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <input
              type="checkbox"
              checked={tarefa.concluida}
              onChange={() => toggleConcluida(tarefa.id)}
            />

            <span className={tarefa.concluida ? "concluida" : ""}>
              {tarefa.text}
            </span>

            <button onClick={() => removerTarefa(tarefa.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;