import { Megjelenitsor } from "./MegjelenitSor.js";

class Megjelenit{
    
    $tarolo
    $lista

    constructor(tarolo, lista){
        this.$tarolo=tarolo
        this.$lista=lista
        this.kiIr()
    }

    kiIr() {
        $(this.$tarolo).eq(0).html(`<table class="table"><thead></thead><tbody></tbody></table>`)
        this.$lista.forEach((elem, ix) => {
            new Megjelenitsor(elem, this.$tarolo.eq(0).children("table").eq(0).children("tbody").eq(0), ix)
        }); 
    }
}

export default Megjelenit