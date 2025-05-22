document.addEventListener("DOMContentLoaded", () => {
  /*   if (num1 === "" || operacao === "" || num2 === "")
  {
  alert("Preencha o numero 1, a operação se é adição ou subtração e depois o numero 2");
  } */
 
 document.addEventListener('click', (e) => {
   if (e.target.tagName === 'BUTTON'){
    num1 = document.getElementById("num1").value;
    operacao = document.getElementById("operacao").value;
    num2 = document.getElementById("num2").value;
    resultado = 0;
      if (operacao.toUpperCase() === 'ADIÇÃO' || operacao.toUpperCase() === 'ADICAO'){
       resultado = adi(Number(num1), Number(num2));
       document.getElementById('resultado').innerText = resultado;
      }
      else if (operacao.toUpperCase() === 'SUBTRAÇÃO' || operacao.toUpperCase() === 'SUBTRACAO'){
           resultado = sub(Number(num1), Number(num2));
           document.getElementById('resultado').innerText = resultado;
          }
    }
  })

  function adi(num1, num2){
    return num1 + num2
    
  }
  function sub(num1, num2){
    return num1 - num2;
    
  }
});
