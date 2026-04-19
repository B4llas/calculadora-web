function pegarValores() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  return { n1, n2 };
}

function somar() {
  let { n1, n2 } = pegarValores();
  document.getElementById("resultado").innerText = n1 + n2;
}

function subtrair() {
  let { n1, n2 } = pegarValores();
  document.getElementById("resultado").innerText = n1 - n2;
}

function multiplicar() {
  let { n1, n2 } = pegarValores();
  document.getElementById("resultado").innerText = n1 * n2;
}

function dividir() {
  let { n1, n2 } = pegarValores();
  if (n2 === 0) {
    document.getElementById("resultado").innerText = "Erro: divisão por zero";
    return;
  }
  document.getElementById("resultado").innerText = n1 / n2;
}