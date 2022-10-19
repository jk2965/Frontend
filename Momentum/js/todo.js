const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.getElementById("todo-list");

const TODOS_KEY="todos"

const toDos=[];

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos));
    
}

function deleteToDo(event){
    const li=event.target.parentElement;
    li.remove();
}

function paintTodo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText="❌";
    button.addEventListener('click',deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}
function handleToDOSubmit(event){
    event.preventDefault();
    const newTODO = toDoInput.value;
    toDoInput.value="";
    toDos.push(newTODO);
    paintTodo(newTODO);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDOSubmit);
const savedToDos=localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(saveToDos);
    parsedToDos.forEach();
} 