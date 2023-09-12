import { Megjelenit } from "./Megjelenit.js"
import {TODOLIST, TODOLIST2} from "./adatok.js";

$(()=>{
    let megjelenit = new Megjelenit("tarolo", TODOLIST2);
    megjelenit.kiIr()
 })