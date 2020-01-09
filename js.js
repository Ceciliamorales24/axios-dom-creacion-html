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
    axios.post(baseUrl, data)
        .then(res => {
            lista.push(res.data);
        })
        .catch(handleError);
};
const deleteTodo = id => {
    axios.delete(`${baseUrl}/${id}`)
        .then(res => {
            const index = lista.findIndex(todo => {
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
    axios.put(`${baseUrl}/${id}`, data)
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
const crearSpan = (text, nameClass) => {
    const span = document.createElement("span");
    span.setAttribute("class", nameClass);
    span.innerHTML = text;

    return span;
}

const mostrarLista = () => {
    const ul = document.querySelector("#todo-list");
    getTodos().then(data => { //hago esto aca para llamar al get todos y en el get todos tengo un return
        lista.map(item => {
            const ul = document.querySelector("#todo-list")
            const li = document.createElement("li");
            const title = crearSpan(item.title, "todo-title");
            const user = crearSpan(item.userId, "todo-user");
            const completed = crearSpan(item.completed, "todo-completed")

            li.appendChild(title); //Se lo agrego al li
            li.appendChild(user);
            li.appendChild(completed);
            ul.appendChild(li); // Y luego se lo agrega al ul
            //crear li con los span correspondientes y un button 
            // recorrer con el map. Hago map para recorrer el array
        })
    })
}


