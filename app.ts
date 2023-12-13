console.log("Typescript");

let inp = document.querySelector(".inp")! as HTMLInputElement;
let form = document.querySelector(".submit") as HTMLFormElement;
let todo = document.querySelector(".todo")! as HTMLUListElement;
let arr: string[] = [];
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  todo.innerHTML = "";

  arr.push(inp.value);
  arr.forEach((elem, index) => {
    todo.innerHTML += `<li>${elem}</li>`;
  });
  inp.value = "";
});
