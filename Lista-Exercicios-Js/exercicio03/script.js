document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let novoTexto = document.getElementById("novo-texto").value;
      document.getElementById("paragrafo").textContent = novoTexto;
    }
  });
});
