import { createRouter, createWebHistory} from 'vue-router';
import HomeView from "@/views/HomeView";
import UsersView from "@/views/UsersView";
import TodosView from "@/views/TodosView";
import NewUserView from "@/views/NewUserView";
import UsersTodosView from "@/views/UsersTodosView";
import NewTodoView from "@/views/NewTodoView";


const routes = [
    {
        path: '/home',
        name: 'Homepage',
        component: HomeView
    },
    {
        path: '/users',
        name: 'Users',
        component: UsersView
    },
    {
        path: '/todos',
        name: 'Todos',
        component: TodosView
    },
    {
        path: '/new-user',
        name: 'UserForm',
        component: NewUserView
    },
    {
        path: '/todos-users',
        name: 'UsersTodos',
        component: UsersTodosView
    },

    {
        path: '/new-todo',
        name: 'TodoForm',
        component: NewTodoView,
    },
    {
        path: '',
        component: HomeView
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
}) // setta dinamicamente il path sul quale stiamo hostando il progetto tipo localhost:8080/hello
console.log(process.env.BASE_URL)
export default router