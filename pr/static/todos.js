document.addEventListener("DOMContentLoaded",()=>{
const todoinput = document.getElementById("todoInput");
const error = document.getElementById("error");
const sInput = document.getElementById("searchInput");
const todosList = document.getElementById("todolist");
const addbtn = document.getElementById("addBtn");

let todos = JSON.parse(localStorage.getItem("todosItems")) || [];
// 

function saveTodos(){
localStorage.setItem("todosItems",JSON.stringify(todos))

}
function displayTodos(list=todos){
   todosList.innerHTML=""
   list.forEach((todo,index)=>{
        const li=document.createElement("li")
        li.innerHTML=`
        <span>${todo.text}</span>
        <button onclick="">Edit</button>
        <button class="delete-btn" data-index=${index}>Delete</button>
        `
        todosList.append(li)
   })

   
 document.querySelectorAll(".delete-btn").forEach(btn => {
      btn.onclick = () => {
        const index = btn.getAttribute("data-index");
        todos.splice(index, 1);
        saveTodos();
        displayTodos();
      };
    });
}
  displayTodos();
addbtn.onclick = () => {
  const text = todoinput.value.trim();
  if (!text) {
    showError("task cant be empty");
    return;
  }
todos.push({text})
saveTodos()
displayTodos()
};


function showError(msg) {
  error.textContent = msg;
  setTimeout(() => {
    error.textContent = "";
  }, 2000);
}

sInput.onkeyup=()=>{
    const term=sInput.value.toLowerCase()
    const filtredTodos=todos.filter(todo=>{
      return  todo.text.toLowerCase().includes(term)

    })
     displayTodos(filtredTodos);
}





})