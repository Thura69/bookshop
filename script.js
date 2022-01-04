const search_icon = document.getElementById('search-btn');
const search_form = document.querySelector('.search-form');
const login_form = document.querySelector('.login-form-container');

search_icon.addEventListener('click',()=>{
    search_form.classList.toggle('search-active')
})




window.addEventListener('scroll',()=>{
    search_form.classList.remove('search-active')
    if(this.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active')
    }else{
        document.querySelector('.header .header-2').classList.remove('active')
    }
})

window.addEventListener('onload',()=>{
   
   
    if(this.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active')
    }else{
        document.querySelector('.header .header-2').classList.remove('active')
    }
  
})





document.getElementById('login-btn').onclick=()=>{
    login_form.classList.add('login_active');
}
document.getElementById('close-login-btn').onclick=()=>{
    login_form.classList.remove('login_active');
}

var swiper = new Swiper(".books-slider",{
   loop:true,
   centeredSlides:true,
   autoplay:{
       delay:5000,
       disableOnInteraction:false,
   },   
   breakpoints: {
       0:{
           slidesPerView:2,
       },
       768:{
           slidesPerView: 2,
       },
       1024:{
           slidesPerView: 3,
       }
   }
    

})

var swiper = new Swiper(".featured-slider",{
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },   
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        450:{
            slidesPerView: 2,
        },
        768:{
            slidesPerView: 3,
        },
        1024:{
            slidesPerView:4,
        }
    }
 })
 
 var oswiper = new Swiper(".arrivals-slider",{
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },   
  
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView:3,
        }
    }
 })
 var oswiper = new Swiper(".reviews-slider",{
    loop:true,
    centeredSlides:true,
    spaceBetween:10,
    grabCursor:true,
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },   
  
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView:3,
        }
    }
 })
 var oswiper = new Swiper(".blogs-slider",{
    loop:true,
    centeredSlides:true,
    spaceBetween:10,
    grabCursor:true,
    autoplay:{
        delay:5000,
        disableOnInteraction:false,
    },   
  
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView:3,
        }
    }
 })
 