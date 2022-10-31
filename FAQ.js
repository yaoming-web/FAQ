// const Header = document.querySelectorAll('.down').length;
// const Ans = document.querySelectorAll('.UP').length;

// for (let i = 0; i < Header; i++) {
//     document.querySelectorAll('.down')[i].addEventListener('click', dropDown);
    
//     function dropDown(params) {
//         if (document.querySelectorAll('.UP')[i].style.display ==='block') {
//             document.querySelectorAll('.UP')[i].style.display= 'none';
//             document.querySelectorAll('.down')[i].style.transform= 'rotate(0deg)';
//         }else{
//             document.querySelectorAll('.UP')[i].style.display= 'block';
//             document.querySelectorAll('.down')[i].style.transform= 'rotate(180deg)';
//         }
//     };  
// }

const Header = document.querySelectorAll('.down').length;
const Ans = document.querySelectorAll('.UP').length;
const head = document.querySelectorAll('h3').length;
for (let i = 0; i < Header; i++) {
    document.querySelectorAll('.down')[i].addEventListener('click', dropdown);

    function dropdown(params) {
        document.querySelectorAll('.down')[i].classList.toggle('mystyle1')
        document.querySelectorAll('.UP')[i].classList.toggle("mystyle");
        document.querySelectorAll('h3')[i].classList.toggle("mystyle2");
      
    }
    
}

