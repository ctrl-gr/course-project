import {defineStore} from "pinia";
import {todoService} from "@/service/todo-service";


export const useTodosStore = defineStore('todosStore', {
    state: () => ({
        todos: [],
        mapHeaderTable: [
            {field: "userId", header: "User Id"},
            {field: "title", header: "ToDo title"},
            {field: "completed", header: "Is Completed"},
            {field: "id", header: "ToDo id"}
        ],
        selectedTodo: {}
    }),
    getters: {
        getTodos: (state) => state.todos,
        getMapHeaderTable: (state) => state.mapHeaderTable,
        getSelectedTodo: (state) => state.selectedTodo
    },
    actions: {
        async getAllTodos() {
            try {
                const todos = await todoService.getAllTodos();
                this.todos = todos;
            } catch (error) {
                console.log(error);
            }
        },
        async deleteTodo(todoId) {
            await todoService.deleteTodo(todoId);

        },
        async editTodo(todoId, todoData) {
            await todoService.editTodo(todoId, todoData);

        },
        async createTodo(todo) {
            await todoService.createTodo(todo);
        },
        setSelectedTodo(todo) {
            this.selectedTodo = todo;
        }
    },
})