import axios from "axios";

const userService = {

        async getAllUsers() {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                this.users = response.data;
                return response.data;
            } catch (error) {
                console.log(error);
                return [];
            }
        },

        async deleteUser(userId) {
            await axios.delete("https://jsonplaceholder.typicode.com/users/" + userId)
                .then(response => {
                    console.log('user deleted!', response.data)
                })
                .catch(err => console.log(err))
        },
        async editUser(user) {
            await axios.put("https://jsonplaceholder.typicode.com/users/" + user.id, user)
                .then(response => {
                    console.log('trying to update this user', response.data)
                })
                .catch(err => console.log(err))
        },
        async createUser(user) { // form
            await axios.post("https://jsonplaceholder.typicode.com/users", {
                user
            })
                .then(response => {
                    console.log('new user created', response.data)
                })
                .catch(err => console.log(err))
        }
    }

export { userService }
