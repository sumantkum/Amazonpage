
let flag = 2;

function controller(x) {
    flag = flag + x;
    slideShow(flag);

}

slideShow(flag);


function slideShow(num) {
    let slide = document.getElementsByClassName('slide');
    if (num == slide.length) {
        flag = 0;
        num = 0;
    }
    if(num < 0){
        flag=slide.length-1;
        num=slide.length+1;
    }

    for(let y of slide){
        y.style1.display = "block";
    }
    console.log(num)
    slide[num].style1.display = "block";

}