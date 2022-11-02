// const header = document.getElementsByClassName("down");
// const ans = document.getElementsByClassName("UP");


// for (let i = 0; i < header.length; i++) {
//     header[i].addEventListener('click', dropdown)


//     function dropdown(params) {
//         if (ans[i].style.display==='block') {
//             ans[i].style.display = 'none';
//         } else {
//             ans[i].style.display = 'block';
//         }
//     }
// }




// for faq-sec1
const header1 = document.querySelector('.icon-arrow1');
const ans1 = document.querySelector('.ans1');

function dropdown1(params) {
    if (ans1.style.display==='block') {
        ans1.style.display= 'none';
    } else {
        ans1.style.display= 'block';
    }
}

header1.addEventListener('click', dropdown1)

// for faq-sec2
const header2 = document.querySelector('.icon-arrow2');
const ans2 = document.querySelector('.ans2');

function dropdown2(params) {
    if (ans2.style.display==='block') {
        ans2.style.display= 'none';
    } else {
        ans2.style.display= 'block';
    }
}

header2.addEventListener('click', dropdown2)

// for faq-sec3
const header3 = document.querySelector('.icon-arrow3');
const ans3 = document.querySelector('.ans3');

function dropdown3(params) {
    if (ans3.style.display==='block') {
        ans3.style.display= 'none';
    } else {
        ans3.style.display= 'block';
    }
}

header3.addEventListener('click', dropdown3)

// for faq-sec4
const header4 = document.querySelector('.icon-arrow4');
const ans4 = document.querySelector('.ans4');

function dropdown4(params) {
    if (ans4.style.display==='block') {
        ans4.style.display= 'none';
    } else {
        ans4.style.display= 'block';
    }
}

header4.addEventListener('click', dropdown4)

// for faq-sec5
const header5 = document.querySelector('.icon-arrow5');
const ans5 = document.querySelector('.ans5');

function dropdown5(params) {
    if (ans5.style.display==='block') {
        ans5.style.display= 'none';
    } else {
        ans5.style.display= 'block';
    }
}

header5.addEventListener('click', dropdown5)
