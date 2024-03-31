import { defineStore } from "pinia";
import {ref,computed} from 'vue'


export const useisCollapseStore = defineStore('isCollapse',()=>{
    //state
    const isCollapse = ref(false)
    getters: {}
    // const fullName = computed(
    // )
    //action
    const changeisCollapse = () =>{
        isCollapse.value = !isCollapse.value
        console.log("isCollapse:",isCollapse.value)
    }

    return {isCollapse,changeisCollapse}
    }
)

export const useisCollapseStore2 = defineStore('isCollapse',{
    //state
    state: ()=>{
        return {
            isCollapse: false
        }
    },
    getters: {},
    actions: {
        changeisCollapse(){
            this.isCollapse = !this.isCollapse
            console.log("isCollapse:",this.isCollapse)
        }
    }
    }

)