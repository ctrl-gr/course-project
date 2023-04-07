import axios from "axios";

const todoService = {

    async getAllTodos() {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
            this.todos = response.data;
            return response.data;
        } catch (error) {
            console.log(error);
            return [];
        }
    },

    async deleteTodo(todoId) {
        await axios.delete("https://jsonplaceholder.typicode.com/todos/" + todoId)
            .then(response => {
                console.log('todo deleted!', response.data)

            })
            .catch(err => console.log(err))
    },
    async editTodo(todo) {
        await axios.put("https://jsonplaceholder.typicode.com/todos/" + todo.todoId, todo)
            .then(response => {
                console.log('trying to update this todo', response.data)
            })
            .catch(err => console.log(err))
    },

    async createTodo(todo) {
        await axios.post("https://jsonplaceholder.typicode.com/todos",
            todo
        )
            .then(response => {
                console.log('new todo created', response.data)
            })
            .catch(err => console.log(err))
    }
}

export {todoService}