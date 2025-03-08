
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
    duration:0.5,
    // stagger:1,
    opacity:0
    // delay:1,

})
t1.from(".home .home-left h3",{
    y:30,
    // delay:1,
    duration:0.5,
    opacity:0
})
t1.from(".home .home-left p",{
    opacity:0,
    duration:.4
    // delay:1,
})
t1.from(".home .home-left a",{
    opacity:0,
    // duration:0.3
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
let navStarters=document.querySelector("#nav-starters")
let navMenu=document.querySelector("#nav-menu")
let navContact=document.querySelector("#nav-contact")
let navHome=document.querySelector('#nav-home')
let directOrderNow=document.querySelectorAll(".directOrderNow")
let restaurantItem=document.querySelectorAll(".restaurant-item")
let restaurantPizzaItem=document.querySelectorAll(".restaurant-pizza-item")
let pizzaSize=document.querySelectorAll(".pizza-size")
let confirmOrder=document.querySelector("#confirm-order")
let shakeOrder=document.querySelector("#shake-order")
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



 
navStarters.addEventListener("click",()=>{
    navStarters.style.color="blue";
    navMenu.style.color="white";
    navContact.style.color="white";
})

navMenu.addEventListener("click",()=>{
    navMenu.style.color="blue";
    navStarters.style.color="white";
    navContact.style.color="white"
})
navContact.addEventListener("click",()=>{
    navContact.style.color="blue";
    navMenu.style.color="white";
    navStarters.style.color="white";
})
navHome.addEventListener("click",()=>{
    // navHome.atyle.color="blue";
    navContact.style.color="white";
    navMenu.style.color="white";
    navStarters.style.color="white";
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

// order Now working

directOrderNow.forEach(button =>{
    button.addEventListener("click",()=>{
        alert("Order confirmed !");
        // directOrderNow.style.color="green"
    });
});

restaurantItem.forEach(item=>{
    item.addEventListener("click",()=>{
        item.style.color="blue";
    });
});

//pizza items

restaurantPizzaItem.forEach(item=>{
    item.addEventListener("click",function(){
        //  console.log(event);
        // alert("choose pizza size !");
        item.style.color="blue";
        pizzaSize.forEach(button=>{
            button.addEventListener('click',()=>{
                button.style.backgroundColor='blue';
            })
        })
    })
})


//confirm order
confirmOrder.addEventListener("click",()=>{
    alert("Order Confirmed !");
    restaurantItem.forEach(item=>{
        item.style.color="white";

    })
    restaurantPizzaItem.forEach(ele=>{
        ele.style.color="white";
        pizzaSize.forEach(button=>{
            
                button.style.backgroundColor='orange';
             })
    })
})

shakeOrder.addEventListener("click",()=>{
    alert("Order Confirmed !");
    restaurantItem.forEach(item=>{
        item.style.color="white";

    })
})