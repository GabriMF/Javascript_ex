function sayHi(content, nombre) {
    content.innerHTML = `Hi ${nombre}!`;
    deleteHi(nombre, content);
  }
  
  function deleteHi(element1, element2) {
    if (element1 == "") element2.innerHTML = "";
    console.log(element1);
  }
  
  input.addEventListener("keyup", () => {
    const input = document.getElementById("input");
    const div = document.getElementById("div");
    let value = input.value;
    sayHi(div, value);
  });