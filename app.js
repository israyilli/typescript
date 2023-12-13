console.log("Typescript");
var inp = document.querySelector(".inp");
var form = document.querySelector(".submit");
var todo = document.querySelector(".todo");
var arr = [];
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (e) {
    e.preventDefault();
    todo.innerHTML = "";
    arr.push(inp.value);
    arr.forEach(function (elem, index) {
        todo.innerHTML += "<li>".concat(elem, "</li>");
    });
    inp.value = "";
});
