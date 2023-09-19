import { TODOLIST2 } from "./adatok.js"

class Model{
    #list=[]

    constructor(){
        this.#list=TODOLIST2
    }

    get list(){
        return this.#list;
    }

    torol(nth){
        TODOLIST2.splice(nth, 1)
    }

    check(nth){
        TODOLIST2[nth].kesz=true
    }
    megse(nth){
        TODOLIST2[nth].kesz=false
    }
}

export default Model