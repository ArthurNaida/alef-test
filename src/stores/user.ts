import { defineStore } from "pinia";
import { Person } from "@/types/person";

export const useUserStore = defineStore('user', {
    state: ():{user: Person} => {
        return {
            user: {
                name: '',
                age: null
            }
        }
    },
    actions: {
        updateData(newUser: Person) {
            this.user.name = newUser.name;
            this.user.age = newUser.age
        }
    }
})