let btn = document.querySelector(".btn1")
let msg = document.querySelector(".message")


let C = document.getElementById("captcha")
let E = document.getElementById("captchaEntered")

btn.addEventListener("click",()=>{
    if(C.value== E.value ){
        msg.textContent ="Entered Captcha is Correct"
    }
    else{
        msg.textContent = "Wrong type correctly"
    }
})