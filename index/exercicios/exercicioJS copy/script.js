document.addEventListener("DOMContentLoaded", function () {
  const botao = document.querySelector(".botao");
  const resultadoDiv = document.getElementById("resultado");
  
  botao.addEventListener("click", function () {
    const numero1 = parseFloat(prompt("Digite o primeiro número: "));
    const numero2 = parseFloat(prompt("Digite o primeiro número: "));

    if (isNaN(numero1) || isNaN(numero2)) {
      resultadoDiv.textContent = "Por favor, insira números válidos.";
  } else {
    const soma = numero1 + numero2;
    resultadoDiv.textContent = "Resultado: " + soma;
      }
    });
  });