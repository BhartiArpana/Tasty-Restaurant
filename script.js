
// Animation
let t1=gsap.timeline()
// nav-bar
t1.from(".nav .logo",{
    y:-30,
    duration:1,
    delay:0.5,
    opacity:0
})
t1.from('.nav .nav-menu',{
    y:-30,
    // duration:0.5,
    opacity:0,
    stagger:1,
    // delay:0.5
})

// for home
t1.from(".home .home-left h1",{
    y:-30,
    duration:0.2,
    // stagger:1,
    opacity:0
})
t1.from(".home .home-left h3",{
    y:30,
    duration:0.2,
    opacity:0
})
t1.from(".home .home-left p",{
    opacity:0,
    duration:1
})
t1.from(".home .home-left a",{
    opacity:0,
    // duration:0.2
})
// t1.from(".starters-container .starters h1",{
//     y:50,
//     duration:1,
//     opacity:0
// })


const LoginIcon=document.querySelector('.wrapper i')
const registrationIcon=document.querySelector('.registration i')
let login=document.querySelector("#login")
let loginForm=document.querySelector(".wrapper")
let registrationForm=document.querySelector('.registration')
let loginRegister=document.querySelector('.register a')
let registerationLogin=document.querySelector('.register-login a')
let register=document.querySelector('.registration button')
let loginButton=document.querySelector(".login button")
let ForgotCloseIcon=document.querySelector(".forgotPasswordPage i")
let forgotPasswordPage=document.querySelector('.forgotPasswordPage')
let loginForgotPassword=document.querySelector('.accessPassword a')
let forgotPasswordSubmitButton=document.querySelector('.forgotPasswordPage button')
let forgotPasswordSubmitPage=document.querySelector('.forgotPasswordSubmitPage')
let forgotPasswordSubmitPageCloseIcon=document.querySelector('.forgotPasswordSubmitPage i')
let cursor=document.querySelector('.cursor')
let container=document.querySelector('.container')

// console.log(login)
// console.log(loginForm)
// console.log(LoginIcon)
// console.log(registrationIcon)
// console.log(registrationForm)
// console.log(register)
// console.log(registerationLogin)
// console.log(register)
// console.log(ForgotCloseIcon)
// console.log(loginForgotPassword)
// console.log(forgotPasswordSubmitPageCloseIcon)
// console.log(cursor)
// console.log(body)

// cursor animation
container.addEventListener('mousemove',(dets)=>{
    // console.log(dets.x)
    // console.log(dets.y)
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.4,
        // ease: "elastic.out(1,0.3)"
    })
})



 


LoginIcon.addEventListener('click',()=>{
    loginForm.style.display="none"
})

registrationIcon.addEventListener('click',()=>{
    registrationForm.style.display="none"
})
login.addEventListener('click',(event)=>{
    event.preventDefault();
      loginForm.classList.toggle('hidden')
})

loginRegister.addEventListener('click',()=>{
    registrationForm.classList.toggle('hidden')
    // loginForm.classList.toggle('hidden')
})

register.addEventListener("click",()=>{
    alert("You registerd successfully !")
    registrationForm.classList.toggle('hidden')
})
registerationLogin.addEventListener("click",()=>{
    registrationForm.classList.toggle('hidden')
})
loginButton.addEventListener("click",()=>{
    alert("You login successfully !")
    loginForm.classList.toggle('hidden')
})

ForgotCloseIcon.addEventListener('click',()=>{
    forgotPasswordPage.style.display="none"
})

loginForgotPassword.addEventListener("click",()=>{
    forgotPasswordPage.classList.toggle('hidden')
})

forgotPasswordSubmitButton.addEventListener('click',()=>{
    forgotPasswordSubmitPage.classList.toggle('hidden')
    forgotPasswordPage.classList.toggle('hidden')
})

forgotPasswordSubmitPageCloseIcon.addEventListener('click',()=>{
    forgotPasswordSubmitPage.classList.toggle('hidden')
})