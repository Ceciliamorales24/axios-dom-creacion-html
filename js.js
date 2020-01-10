const baseUrl = "https://jsonplaceholder.typicode.com/todos";
let lista = [];

let todo = {
    title: "",
    userId: null,
    completed: false
};

const handleError = err => {
    alert(`Hubo un error. ${err}`);
};

const getTodos = () => {
    return axios.get(baseUrl)
        .then(res => {
            lista = res.data;
        })
        .catch(handleError);
};


const getTodo = id => {
    axios.get(`${baseUrl}/${id}`)
        .then(res => {
            todo = res.data;
        })
        .catch(handleError);
};
const createTodo = (title, userId) => {
    let data = {
        title,
        userId,
        completed: false
    }
    return axios.post(baseUrl, data)
        .then(res => {
            lista.push(res.data);
        })
        .catch(handleError);
};

const deleteTodo = id => {
    return axios.delete(`${baseUrl}/${id}`)
        .then(res => {
            const index = lista.findIndex(todo => { //busca el elemento en la lista y me devuelve el indice y con el splice lo borro
                return todo.id == id;
            })
            lista.splice(index, 1);
        })
        .catch(handleError);
};

const modifyTodo = (id, title, userId, completed) => {
    let data = {
        id,
        title,
        userId,
        completed
    };
   return axios.put(`${baseUrl}/${id}`, data)
        .then(res => {
            for (let i = 0; i < lista.length; i++) {
                if (lista[i].id == id) {
                    lista[i] = res.data;
                }
            }
        })
        .catch(handleError);
};

// MI CODIGO

const mostrarLista = () => {
    const ul = document.querySelector("#todo-list");
    ul.innerHTML = "";
    //hago esto aca para llamar al get todos y en el get todos tengo un return
    lista.map(item => {
        const ul = document.querySelector("#todo-list")
        const li = document.createElement("li");
        const title = crearSpan(item.title, "todo-title");
        const user = crearSpan(item.userId, "todo-user");
        const completed = crearSpan(item.completed, "todo-completed");
        const buttonDelete = crearBotonEliminar(item.id);
        li.appendChild(title); //Se lo agrego al li
        li.appendChild(user);
        li.appendChild(completed);
        li.appendChild(buttonDelete);
        ul.appendChild(li); // Y luego se lo agrega al ul

        //crear li con los span correspondientes y un button 
        // recorrer con el map. Hago map para recorrer el array
    })
}

// Fabrica de span  me crea directamente los span los cales los tengo que llamar en mostrarLista
const crearSpan = (text, nameClass) => {
    const span = document.createElement("span");
    span.setAttribute("class", nameClass);
    span.innerHTML = text;

    return span;
}

const crearBotonEliminar = (id) => {
    let button = document.createElement("button");
    button.innerHTML = "Eliminar";
    button.setAttribute("class", "todo-delete"); //asigno la clase que tiene el button
    button.addEventListener("click", (event) => { //el evento o accion que va hacer
        deleteTodo(id).then(mostrarLista);
    });
    return button;
}

//Agregar toDo a la lista
const buttonAgregar = document.querySelector("#todo-create");
buttonAgregar.addEventListener("click", (event) => {
    const titulo = document.querySelector("#todo-title-create").value;
    const user = document.querySelector("#todo-user-create").value;

    createTodo(titulo, user).then(mostrarLista);

})

const modificar

getTodos().then(mostrarLista);

