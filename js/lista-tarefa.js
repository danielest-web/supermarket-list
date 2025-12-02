(function () {
  const criarTarefa = (evento) => {
    evento.preventDefault(); //Previne comportamento padrão do formulário

    const lista = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    const valor = input.value; //pega texto digitado pelo usuario

    //cria um elemento <li> para a nova tarefa
    const tarefa = document.createElement("li");
    tarefa.classList.add("task");

    //cria o conteudo HTML da tarefa
    const conteudo = `<span class="content">${valor}</span>`;
    tarefa.innerHTML = conteudo;
    // Adiciona botões à tarefa
    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta()); //Adicionar esta função depois

    lista.appendChild(tarefa); //add um filho na ul que e li
    input.value = "";
  };
  const novaTarefa = document.querySelector("[data-form-button]");
  novaTarefa.addEventListener("click", criarTarefa);

  const BotaoConclui = () => {
    const botaoConclui = document.createElement("button");
    botaoConclui.classList.add("check-button");
    botaoConclui.innerText = "Concluir";

    botaoConclui.addEventListener("click", concluirTarefa);
    return botaoConclui;
  };

  const concluirTarefa = (evento) => {
    const botaoConclui = evento.target;
    const tarefaCompleta = botaoConclui.parentElement;
    tarefaCompleta.classList.toggle("done");
  };

  const BotaoDeleta = () => {
    const botaoDeleta = document.createElement("button");

    botaoDeleta.innerText = "Deletar";
    botaoDeleta.addEventListener("click", deletarTarefa);
    return botaoDeleta;
  };

  const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target;
    const tarefaCompleta = botaoDeleta.parentElement;
    tarefaCompleta.remove();
    return botaoDeleta;
  };
})();
