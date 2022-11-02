const header = document.querySelector(".down");
const ans = document.querySelector(".UP");

function dropdown(params) {
    if (ans.style.display==='block') {
        ans.style.display = 'none';
    } else {
        ans.style.display = 'block';
    }
}
header.addEventListener('click', dropdown)