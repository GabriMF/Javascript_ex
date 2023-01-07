const sumbutton = document.querySelector("#sumbutton");

function numb1SumNumb2(num1, num2, element) {
  const result = parseInt(num1) + parseInt(num2);
  element.innerHTML = `La suma de ${num1} + ${num2} es ${result}`;
}

sumbutton.addEventListener("click", () => {
  const numb1 = document.querySelector(".numb1").value;
  const numb2 = document.querySelector(".numb2").value;
  const divResult = document.querySelector(".result");
  numb1SumNumb2(numb1, numb2, divResult);
});