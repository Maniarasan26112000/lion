// // __________________________________change navbar style on scroll _______________________________///





//  window.addEventListener('scroll',()=>{
//      document.querySelector('nav').classList.toggle
//      ('window-scroll', window.scrollY >100 )
//  })





// // ______________________showw/hide faq answers______________________________///

//  const faqs = document.querySelectorAll('.faq');

//  faqs.forEach(faq => {
//     faq.addEventListener('click', () => {
//         faq.classList.toggle('open');

//         //change icon
//         const icon = faq.querySelector('.faq__icon i');
//         if(icon.className === 'fa-solid fa-plus')
//             {
//                 icon.className = "fa-solid fa-minus"
//             }
//             else{
//                 icon.className = "fa-solid fa-plus";
//             }
//     })
// })  




// // show hide nav menu______________________________________________________________________________

// const menu = document.querySelector(".nav__menu");
// const menuBtn = document.querySelector("#open-menu-btn");
// const closeBtn = document.querySelector("#close-menu-btn");

// menuBtn.addEventListener('click', () =>{
//     menu.style.display = "flex";
//     closeBtn.style.display = "inline-block";
//     menuBtn.style.display = "none";
// })