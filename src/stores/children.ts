import { defineStore } from "pinia";
import { Person } from "@/types/person";

export const useChildrenStore = defineStore('children', {
    state: ():{children: Person[]} => {
        return {
            children: []
        }
    },
    actions: {
        add(newChild: Person) {
            this.children.push(newChild);
        },
        clear() {
            this.children = new Array;
        }
    }
})