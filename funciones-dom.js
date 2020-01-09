const mostrarLista = () => {
    const ul = document.querySelector("#todo-list");
    getTodos().then(data => { //hago esto aca para llamar al get todos y en el get todos tengo un return
        lista.map(item => {
            const ul = document.querySelector("#todo-list")
            const li = document.createElement("li");
            const titulo = document.createElement("span");
            const user = document.createElement("span");
            const completed = documentcreatElement("span")
            titulo.setAttribute("class", "todo-title");
            title.innerHTML = item.title;
            usuario.setAttribute("class", "todo-user");
            user.innerHTML = item.user;
            completar.setAttribute("class", "todo-completed");
            completed.innerHTML = item.completed;

            li.appendChild(titulo); //Se lo agrego al li
            ul.appendChild(li); //Y luego se lo agrega al ul
            li.appendChild(user);
            li.appendChild(completed);
            //crear li con los span correspondientes y un button 
            // recorrer con el map. Hago map para recorrer el array
        })
    })
}

const crearBotonEliminar = () => {
    let button = document.createElement("input");
    button.innerHTML = "Eliminar";
    button.addEventListener("click", (event) => {
        const button = event.target;

    })
    return button;
}

// otra forma resuelto el ejercicio con Fede

const armarHTML = () => {
    const ul = document.querySelector("#todo-list");
    for (let todo of lista) {
        const li = document.createElement("li");
        const title = document.createElement("span");

        li.className = "todo-item";
        // title.className ="todo-title";
        title.setAttribute("class", "todo-title");

        const titleText = document.createElement(todo.title)

        title.appendChild(titleText);
        titler.innerText(todo.title);

        li.appendChild()

    }
}