var click=0;
function reduce() {
    if(click==0){
    var a = document.getElementById("welcome");
    var top=150;
    a.style.fontSize='2em';
    a.style.top='20%';
    a.style.bottom='80%';
    a.style.left='47%';
    a.style.right='45%';
    a=document.getElementById("main");
    var id = setInterval(frame, 5);
    function frame() {
        if (top == 20) {
            clearInterval(id);
            click++;
            document.getElementsByClassName('link').style.opacity='1';
        } else {
            top-=1;
            a.style.top=top+'%';
        }
    }
}

}