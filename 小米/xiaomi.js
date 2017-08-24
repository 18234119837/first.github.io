{
    const bannerList=document.querySelectorAll(".banner li");
    const dianList=document.querySelectorAll(".dianbox li");
    const bannerbox=document.querySelector(".bannerbox");
    const prev=document.querySelector(".prev");
    const next=document.querySelector(".next");

    dianList.forEach(function (ele, index) {
        ele.onmouseover=function () {
            dianList.forEach(function (ele, index) {
                ele.classList.remove("active");
                bannerList[index].classList.remove("active");
            });
            ele.classList.add("active");
            bannerList[index].classList.add("active");
            num=index;
        }
    });

    var num=0;
    function fn() {
        num++;
        if(num==dianList.length){
            num=0;
        }
        if(num==-1){
            num=dianList.length-1;
        }
        dianList.forEach(function (ele, index) {
            ele.classList.remove("active");
            bannerList[index].classList.remove("active");
        });
        dianList[num].classList.add("active");
        bannerList[num].classList.add("active");
    }

    var st=setInterval(fn,3000);

    bannerbox.onmouseover=function () {
        clearInterval(st);
    }
    bannerbox.onmouseout=function () {
        st=setInterval(fn,3000);
    }

    next.onclick=function () {
        fn();
    }
    prev.onclick=function () {
        num-=2;
        fn();
    }
    next.onmouseover.style.background=""
}