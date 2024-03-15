// import definePinia from "../definePinia.vue";

import { defineStore } from "pinia";
import {ref,computed} from 'vue'

export const useUserdemoStore = defineStore('Userdemo',()=>{
    //state
    const name = ref('sunqinjian')
    const email = ref('123@qq.com')
    //getters
    const fullName = computed(
        ()=> {
            return `${name.value} (${email.value})`
        }
    )
    //action
    const updateName = (newName) =>{
        name.value = newName
    }
    const updateEmial = (newEmail) =>{
        email.value = newEmail
    }
    return {name,email,fullName,updateName,updateEmial}
}

)