// for faq-sec1
const header1 = document.querySelector('.icon-arrow1');
const ans1 = document.querySelector('.ans1');
const head1= document.querySelector('.head1')

function dropdown1(params) {
    if (ans1.style.display==='block') {
        ans1.style.display= 'none';
        header1.style.transform = 'rotate(0deg)';
        head1.style.color= 'black';
    } else {
        ans1.style.display= 'block';
        header1.style.transform = 'rotate(180deg)';
        head1.style.color= 'red';
    }
}

header1.addEventListener('click', dropdown1)

// for faq-sec2
const header2 = document.querySelector('.icon-arrow2');
const ans2 = document.querySelector('.ans2');
const head2= document.querySelector('.head2')

function dropdown2(params) {
    if (ans2.style.display==='block') {
        ans2.style.display= 'none';
        header2.style.transform = 'rotate(0deg)';
        head2.style.color= 'black';
    } else {
        ans2.style.display= 'block';
        header2.style.transform = 'rotate(180deg)';
        head2.style.color= 'red';
    }
}

header2.addEventListener('click', dropdown2)

// for faq-sec3
const header3 = document.querySelector('.icon-arrow3');
const ans3 = document.querySelector('.ans3');
const head3= document.querySelector('.head3')

function dropdown3(params) {
    if (ans3.style.display==='block') {
        ans3.style.display= 'none';
        header3.style.transform = 'rotate(0deg)';
        head3.style.color= 'black';
    } else {
        ans3.style.display= 'block';
        header3.style.transform = 'rotate(180deg)';
        head3.style.color= 'red';
    }
}

header3.addEventListener('click', dropdown3)

// for faq-sec4
const header4 = document.querySelector('.icon-arrow4');
const ans4 = document.querySelector('.ans4');
const head4= document.querySelector('.head4')

function dropdown4(params) {
    if (ans4.style.display==='block') {
        ans4.style.display= 'none';
        header4.style.transform = 'rotate(0deg)';
        head4.style.color= 'black';
    } else {
        ans4.style.display= 'block';
        header4.style.transform = 'rotate(180deg)';
        head4.style.color= 'red';
    }
}

header4.addEventListener('click', dropdown4)

// for faq-sec5
const header5 = document.querySelector('.icon-arrow5');
const ans5 = document.querySelector('.ans5');
const head5= document.querySelector('.head5')
function dropdown5(params) {
    if (ans5.style.display==='block') {
        ans5.style.display= 'none';
        header5.style.transform = 'rotate(0deg)';
        head5.style.color= 'black';
    } else {
        ans5.style.display= 'block';
        header5.style.transform = 'rotate(180deg)';
        head5.style.color= 'red';
    }
}

header5.addEventListener('click', dropdown5)