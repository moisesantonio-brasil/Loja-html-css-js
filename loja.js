let drt = document.querySelector(".drt")
let esq = document.querySelector(".esq")
let drt2 = document.querySelector(".drt2")
let esq2 = document.querySelector(".esq2")

let icone_exb = document.querySelector(".icones_exibiçao")
let icone_exb2 = document.querySelector(".icones_exibiçao2")

esq.addEventListener("click",()=>{
icone_exb.style = "display:none;"
icone_exb2.style = "display:flex;"
})
drt.addEventListener("click",()=>{
    icone_exb.style = "display:none;"
    icone_exb2.style = "display:flex;"
    })

    drt2.addEventListener("click",()=>{
        icone_exb.style = "display:flex;"
icone_exb2.style = "display:none;"
    })
    esq2.addEventListener("click",()=>{
        icone_exb.style = "display:flex;"
icone_exb2.style = "display:none;"
    })
