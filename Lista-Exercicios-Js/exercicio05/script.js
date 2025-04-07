document.addEventListener("DOMContentLoaded", () => {
  const botaoCalcular = document.getElementById("botao-calcular");

  botaoCalcular.addEventListener("click", () => {
    const nome = document.getElementById("nome").value;
    const altura = Number(document.getElementById("altura").value) / 100;
    const peso = Number(document.getElementById("peso").value);
    const resultado = document.getElementById("resultado");
    let imc = 0;
    imc = peso / altura ** 2;
    let classificacao = "";

    if (imc < 16) {
      classificacao = "Baixo peso muito grave";
    } else if (imc < 17) {
      classificacao = "Baixo peso grave";
    } else if (imc < 18.5) {
      classificacao = "Baixo peso";
    } else if (imc < 25) {
      classificacao = "Peso normal";
    } else if (imc < 30) {
      classificacao = "Sobrepeso";
    } else if (imc < 35) {
      classificacao = "Obesidade grau I";
    } else if (imc < 40) {
      classificacao = "Obesidade grau II";
    } else {
      classificacao = "Obesidade grau III";
    }

    resultado.innerHTML = `<p>${nome} possui índice de massa corporal igual a ${imc.toFixed(
      2
    )}, sendo classificado como:<br><strong>${classificacao}</strong>.</p>`;
  });
});
