// Pagina de toDo (subir, modificar, crear y borrar, toDo)
let todos = [];
// Creo un array vacio al que tengo que pushear y se puede hacer de dos formas getTodo() return o hacer un res = todos.push(res)
let toDo;
// Wrappear: termino que se usa mucho

//La lista se debe crear fuera de la funcion porque va a seguir viva para llamarla en otras funciones
// lista = res. data porque la lista no esta creada res significa respuesta. 

const createToDo = (userId, title) => {
    axios.post(`https://jsonplaceholder.typicode.com/todos`, {
        title: title,
        userId: userId,
    }).then(res => { res = todos.push(res) })
        .catch(err => { throw err; });
};

const getTodo = (id) => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    }).then(res => (toDo = res.data))
        // .then(res => (res =todos.push(res))
        .catch(err => { throw err; });
}

const getTodoList = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos', {
    }).then(res => (todos = res.data))
        .catch(err => { throw err; });
}

const modificarToDo = (id, title, userId, completed) => {
    axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        title: title,
        userId: userId,
    }).then(res => (toDo = res.data))
        .catch(err => { throw err; });
}

const modificarToDoList = (title, body, userId, completed) => {
    axios.put('https://jsonplaceholder.typicode.com/todos', {
        title: " NUEVO TITULO",
        body: "Nuevo cuerpo",
        userId: 1
    }).then(res => (toDo.data))
        .catch(err => { throw err; });
}

const deleteTodo = id => {
    axios.delete(`${baseurl}/${id}`)
        .then(res => {
            const index = lista.findIndex(todo)
        })
}

// lo que hizo fede
const baseUrl = "https://jsonplaceholder.typicode.com/todos";
let lista = [];
let todo = {
    title: "",
    userId: null,
    completed: false
};
const handleError = err => {
    alert(`Hubo un error. ${err}`)
    ;
};
const getTodos = () => {
    axios.get(baseUrl)
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



