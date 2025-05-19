addEventListener("DOMContentLoaded", () => {
  num1 = document.getElementById("num1").value;
  operacao = document.getElementById("operacao").value;
  num2 = document.getElementById("num2").value;
  resultado = "";
/*   if (num1 === "" || operacao === "" || num2 === "")
  {
    alert("Preencha o numero 1, a operação se é adição ou subtração e depois o numero 2");
  } */



  function adi(){
    resultado = num1 + num2;
  }
  function sub(){
    resultado = num1 - num2;
  }
});
