import Model from "../model/Model.js";
import Megjelenit from "../view/Megjelenit.js";

class Controller{
    constructor(){
        const szuloELEM = $(".tarolo")
        const MODEL= new Model();
        const MEGJELENIT = new Megjelenit(szuloELEM, MODEL.list);
    
        $(window).on("torol", event =>{
            MODEL.torol(event.detail)
            szuloELEM.empty()
            new Megjelenit(szuloELEM, MODEL.list)
        })
        $(window).on("check", event =>{
            MODEL.check(event.detail)
            szuloELEM.empty()
            new Megjelenit(szuloELEM, MODEL.list)
        })
        $(window).on("megse", event =>{
            MODEL.megse(event.detail)
            szuloELEM.empty()
            new Megjelenit(szuloELEM, MODEL.list)
        })
    }
}

export default Controller