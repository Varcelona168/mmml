let pass = document.getElementById(`pass`)
let koz = document.getElementById(`eye`)
let modmeid = document.getElementById(`modmeid`)
let btn = document.getElementById(`btn`)


let isEye = false
koz.addEventListener(`click`, () => {
    isEye = !isEye

    if (isEye) {
        koz.classList.add("fa-eye")
        koz.classList.remove("fa-eye-slash")
        pass.type = "text"
    }else{
        koz.classList.add("fa-eye-slash")
        koz.classList.remove("fa-eye")
        pass.type = "password"
    }
})

function chackActive() {
    if(pass.value && modmeid.value){
         btn.style.backgroundColor = "#F0400F"

    }else{
        btn.style.backgroundColor = "#F69E86"
    }
   
}
pass.addEventListener(`input`, () => {
    chackActive()
})
modmeid.addEventListener(`input`, () => {
    chackActive()
})

btn.addEventListener(`click` ,()=>{
    if (pass.value == `1234` && modmeid.value == `1234`) {
        window.location.href = `./home.html`

    }else{

        pass.style.borderColor = `red`
        modmeid.style.borderColor = `red`
        setTimeout(() =>{
              pass.style.borderColor = `black`
        modmeid.style.borderColor = `black`
        }, 2000)
    }
})