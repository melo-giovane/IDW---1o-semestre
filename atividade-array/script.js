document.addEventListener("DOMContentLoaded", () => {
  let frutas = ["Banana", "Maça", "Morango", "Uva"];

  const botaoInserir = document.getElementById("botaoInserir");
  const botaoRemover = document.getElementById("botaoRemover");
  const botaoOrdenar = document.getElementById("botaoOrdenar");

  botaoInserir.addEventListener("click", adicionar);
  botaoRemover.addEventListener("click", remover);
  botaoOrdenar.addEventListener("click", ordenar);
  
  listarFrutas();

  function listarFrutas() {
    const lista = document.getElementById("frutas");
    lista.innerHTML = "";

    frutas.forEach((fruta) => {
      const novaFruta = document.createElement("li");
      novaFruta.textContent = fruta;
      lista.appendChild(novaFruta);
    });
  }

  function adicionar() {
    const input = document.getElementById("novaFruta");
    const novaFruta = input.value.trim();
    if (novaFruta !== "") {
      frutas.push(novaFruta);
      listarFrutas();
      input.value = "";
    }
  }

  function remover() {
    const input = document.getElementById("novaFruta");
    const frutaParaRemover = input.value.trim();

    if (frutaParaRemover !== "") {
      frutas = frutas.filter(
        (fruta) => fruta.toLowerCase() !== frutaParaRemover.toLowerCase()
      );

      listarFrutas();
      input.value = "";
    }
  }

  function ordenar(){
    frutas = frutas.sort();
    listarFrutas();
  }


});
