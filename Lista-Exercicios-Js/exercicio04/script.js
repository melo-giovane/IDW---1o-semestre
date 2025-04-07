document.addEventListener("DOMContentLoaded", () => {

  document.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let num1 = document.getElementById("numero1").value;
      let num2 = document.getElementById("numero2").value;

      let soma = Number(num1) + Number(num2);

      document.getElementById("soma").innerHTML = `${soma}`;
      document.getElementById("numero1").value = "";
      document.getElementById("numero2").value = "";


    }
  })


})