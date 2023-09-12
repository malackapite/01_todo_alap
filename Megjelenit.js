import { Megjelenitsor } from "./MegjelenitSor.js";

export class Megjelenit{
    
    $tarolo
    $lista

    constructor(tarolo, lista){
        this.$tarolo=tarolo
        this.$lista=lista
    }

    kiIr() {
        $("."+this.$tarolo).eq(0).html(`<table class="table"><thead></thead><tbody></tbody></table>`)
        this.$lista.forEach(elem => {
            new Megjelenitsor(elem, $(`.${this.$tarolo}>table>tbody`).eq(0))
        }); 
    }
}