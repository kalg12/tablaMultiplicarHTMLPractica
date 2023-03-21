const multiplicar = () => {
  const numeroaMulticar = document.getElementById("numero").value;
  const numeroHastaMultiplicar =
    document.getElementById("multiplicarHasta").value;
  for (let index = 1; index <= numeroHastaMultiplicar; index++) {
    document.getElementById("resultado").innerHTML +=
      //ALT + 96 - template String
      `${numeroaMulticar} x ${index} = ${numeroaMulticar * index}
    <br>`;
  }
};
