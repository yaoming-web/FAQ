const header = document.getElementsByClassName("down");
const ans = document.getElementsByClassName("UP");


for (let i = 0; i < header.length; i++) {
    header[i].addEventListener('click', dropdown)


    function dropdown(params) {
        if (ans[i].style.display==='block') {
            ans[i].style.display = 'none';
        } else {
            ans[i].style.display = 'block';
        }
    }
}
