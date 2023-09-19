export class Megjelenitsor{
    
    $elem
    $szuloElem
    $index

    constructor(elem, szuloElem, index){
        this.$elem=elem
        this.$szuloElem=szuloElem
        this.index=index

        this.#sor()

        
        this.$sorElem=this.$szuloElem.children("tr:last-child")
        this.$keszElem=this.$sorElem.children(".check")
        
        if(this.$elem.kesz)
            this.$sorElem.children("td").css("background-color","green", "important")
        else
            this.$sorElem.children("td").css("background-color","white", "important")

        this.$keszElem.on("click",()=>{
            this.#checkEsemeny()
        })
        this.$sorElem.children(".cancel").on("click",()=>{
            this.#megseEsemeny()
        })
        this.$sorElem.children(".delete").on("click",()=>{
            this.#torolEsemeny()
        })
    }

    #sor() {
        let tmp=`<tr>`
        for (const kulcs in this.$elem) {
            if (Object.hasOwnProperty.call(this.$elem, kulcs) && kulcs!="kesz") {
                tmp += `<td>${this.$elem[kulcs]}</td>`             
            }
        }
        tmp+=`<td class="check">✔💨</td><td class="cancel">❌💨</td><td class="delete">🗑💨</td>`
        tmp+="</tr>"
        this.$szuloElem.append(tmp)
    }

    #torolEsemeny(){
        window.dispatchEvent(new CustomEvent("torol", {detail:this.index}))
    }
    #checkEsemeny(){
        window.dispatchEvent(new CustomEvent("check", {detail:this.index}))
    }
    #megseEsemeny(){
        window.dispatchEvent(new CustomEvent("megse", {detail:this.index}))
    }
}