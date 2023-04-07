import {defineStore} from "pinia";
import {userService} from "@/service/user-service";


export const useUsersStore = defineStore('usersStore', {
    state: () => ({
        users: [],
        mapHeaderTable: [
            {field: "username", header: "Username" },
            {field: "email", header: "Email"},
            {field: "phone", header: "Phone"},
            {field: "id", header: "User Id"}
        ],
        selectedUser: {}
    }),
    getters: {
        getUsers: (state) => state.users,
        getMapHeaderTable: (state) => state.mapHeaderTable,
        getSelectedUser: (state) => state.selectedUser
    },
    actions: {
        async getAllUsers() {
            try {
                const users = await userService.getAllUsers();
                this.users = users;
            } catch (error) {
                console.log(error);
            }
        },
        async deleteUser(userId) {
            await userService.deleteUser(userId);

        },
        async editUser(userData) {
            await userService.editUser(userData);

        },
        async createUser(user) {
            await userService.createUser(user);
        },
        setSelectedUser(user) {
            this.selectedUser = user;
        }
    },
})