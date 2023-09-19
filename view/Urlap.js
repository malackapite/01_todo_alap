class Urlap{
    $adat={}
    $formElem

    tevekenysegElem
    hataridoElem
    submitElem
    constructor(szuloElem, adat){
        this.$adat=adat
        this.szuloElem=$(szuloElem)
        this.szuloElem.html("<form>")
        this.$formElem=this.szuloElem.children("form")
        this.#urlapLetrejoz()

        this.tevekenysegElem=this.$formElem.children("input").eq(0)
        this.hataridoElem=this.$formElem.children("input").eq(1)
        this.submitElem=this.$formElem.children("input").eq(2)

        this.submitElem.on("click",event=>{
            event.preventDefault()
            this.#kattintasTriger("ujadat")
        })
    }

    #adatgyujt(){
        return { tevekenyseg:this.tevekenysegElem.val(), hatarido:this.hataridoElem.val()}
    }

    #urlapLetrejoz(){
        $(this.$formElem).eq(0).html(`<form><input type="text"> <input type="date"><input type="submit"></form>`)
    }

    #kattintasTriger(nev){
        window.dispatchEvent(new CustomEvent(nev, {detail:this.#adatgyujt()}))
    }
}

export default Urlap