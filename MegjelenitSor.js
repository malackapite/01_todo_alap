export class Megjelenitsor{
    
    $elem
    $szuloElem

    constructor(elem, szuloElem){
        this.$elem=elem
        this.$szuloElem=szuloElem
        this.#sor()
        this.$sorElem=this.$szuloElem.children("tr:last-child")
        this.$keszElem=this.$sorElem.children(".check")
        
        this.$keszElem.on("click",()=>{
            this.$sorElem.children("td").css("background-color","green", "important")
        })
        this.$sorElem.children(".cancel").on("click",()=>{
            this.$sorElem.children("td").css("background-color","white", "important")
        })
        this.$sorElem.children(".delete").on("click",()=>{
            this.$sorElem.children("td").css("display","none", "important")
        })
    }

    #sor() {
        let tmp=`<tr>`
        for (const kulcs in this.$elem) {
            if (Object.hasOwnProperty.call(this.$elem, kulcs)) {
                tmp += `<td>${this.$elem[kulcs]}</td>`             
            }
        }
        tmp+=`<td class="check">✔💨</td><td class="cancel">❌💨</td><td class="delete">🗑💨</td>`
        tmp+="</tr>"
        this.$szuloElem.append(tmp)
    }
}