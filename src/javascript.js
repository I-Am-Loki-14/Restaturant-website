const navbars = document.getElementById('navbars');
console.log(navbars);
const menubars = document.getElementById('menubars');
console.log(menubars);


menubars.addEventListener('click', ()=>{

    navbars.classList.toggle('active');
})
