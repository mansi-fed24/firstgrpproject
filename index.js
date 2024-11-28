// select html
const todoInput = document.querySelector("#todo");
const addTodoBtn = document.querySelector("#addtodo")
const todoList = document.querySelector("#todolist")

addTodoBtn.addEventListener("click", () => {
    if(document.querySelectorAll("#todolist li").length < 5){
        let toDo = todoInput.value
        const li = document.createElement("li")
        li.innerText = toDo;

        let delBtn = document.createElement("button");
        delBtn.textContent= "Clear Task";
        delBtn.style.marginLeft = "10px";
        
        delBtn.addEventListener("click", (event) =>{
            event.target.parentElement.remove();
        })

        li.append(delBtn);
        todoList.append(li);
    }else {
        alert("Too many todos! Get some stuff done first");
    }
   // Clear the input field
   todoInput.value = "";
})