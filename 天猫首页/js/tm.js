//左侧导航开始
let leftbar=document.querySelector(".leftbar")
let btns=document.querySelectorAll(".btn")
// console.log(btns)
let floors=document.querySelectorAll(".floor")
console.log(floors)
//监听
var obj;
window.addEventListener("scroll",function () {
    obj=document.documentElement.scrollTop
    ==0?document.body:document.documentElement;

    if(obj.scrollTop>800){
        leftbar.style.cssText="width:35px;height:332px;"
    }else{
        leftbar.style.cssText="width:0;height:0;"
    }
})
//以下是点击的时候跳转
btns.forEach(function (ele,index) {
    ele.onclick=function () {
        var ot=floors[index].offsetTop;
        animate(obj,{scrollTop:ot},500);
        if(index==floors.length-1){
            obj.scrollTop=0;

        }
    }
    
})

const colorArr=["red","green","blue","orange","pink",
    " #a643ff","#16fff2"," #faff0a"," #ABABAB"]
//以下是监听到floor的高度的时候
window.addEventListener("scroll",function () {//获取某个元素内部元素超出值
    let st = obj.scrollTop+53;//得到当前obj内部元素超出它顶部的值
    for(var i = 1; i < floors.length; i++) {
        if (st >= floors[i].offsetTop) {//都有颜色
            //offsetTop前元素的上边缘距离文档的上边缘的值
            btns.forEach(function (ele) {
                ele.style.background = "";//都清除背景色
            })
            btns[i].style.background = colorArr[i];
        }
    }
});
//左侧导航结束
//顶部监听开始
{
    var topbar=document.querySelector(".topbar")
    window.onscroll=function (){
        var obj=document.body.scrollTop==0?document.documentElement:
            document.body;
        if(obj.scrollTop>500){
            topbar.style.top="0";
        }else{
            topbar.style.top=-52+"px";
        }
    }
}
//顶部监听结束




//   视频的右侧开始
{
    var items = document.querySelectorAll(".item");
    var masks = document.querySelectorAll(".item .mask");
    items.forEach(function (ele, index) {
        ele.onmouseover = function () {
            masks[index].style.opacity = "1";
        }
        ele.onmouseout = function () {
            masks[index].style.opacity = "0";
        }
    })
}
//   视频的右侧结束


//    视频的左侧开始
{
    var items_big = document.querySelectorAll(".video-left-top .item-shipin");
    var items_small = document.querySelectorAll(".video-left-center .item-shipin");
    var masks_ = document.querySelectorAll(".video-center-mask");
    var mao_ = document.querySelectorAll(".item-shipin .bofangmao");
// console.log(items_small )


    var mao=document.querySelector(".bofangmao1");
    var bigbox = document.querySelector(".video-left-top");
    bigbox.onmouseover=function () {
        mao.style.animation="scale 1s";
    }
    bigbox.onmouseout=function () {
        mao.style.animation="";
    }

    items_small.forEach(function (ele, index) {
        ele.onmouseover = function () {
            items_big.forEach(function (ele, index) {
                ele.style.display = "none"
                masks_[index].style.display = "none";
                mao_[index].style.display = "none";

            })
            items_big[index].style.display = "block";
            masks_[index].style.display = "block";
            mao_[index].style.display = "block";

        }
    })
    
    //    左右箭头移动图片效果
    const videoleftcenter=document.querySelector(".video-left-center");
    // console.log(videoleftcenter)
    const prev=document.querySelector(".prev");
    const next=document.querySelector(".next");
   
        next.onclick=function () {
            prev.style.display="block";
            next.style.display="none";
            videoleftcenter.style.transition = "all 1s"
            videoleftcenter.style.marginLeft = -492 + "px";
        }
        prev.onclick=function () {
            next.style.display="block";
            prev.style.display="none";
            videoleftcenter.style.transition = "all 1s"
            videoleftcenter.style.marginLeft = 0 + "px";
        }




// })
    
    /*prev.onclick=function(){
        num-=2;
        move();
    }*/
    
}
//视频的左侧结束


//banner--手动切换图片
{
    var banner_pc = document.querySelectorAll(".banner-pcbox li");
    var dian = document.querySelectorAll(".dian-box li");
    var backgrounds = document.querySelector(".banner");
    var colorarr = ["#F8D171", "#FE7295", "#E8E8E8", "#FCDA5C", "#1F92EF", "#E8E8E8"]
    dian.forEach(function (ele, index) {
        ele.onmouseover = function () {
            for (var i = 0; i < dian.length; i++) {
                dian[i].classList.remove("active");
                banner_pc[i].classList.remove("active");
            }



            this.classList.add("active");
            dian[index].classList.add("active");
            banner_pc[index].classList.add("active");
            backgrounds.style.background = colorarr[index];
            // num=index;
        }
    });
//banner---自动切换图片
    let num = 0;
    let move = function () {
    //     function  move() {
        num++;
        if (num == dian.length) {
            num = 0;
        }
        for (var i = 0; i < dian.length; i++) {
            dian[i].classList.remove("active");
            banner_pc[i].classList.remove("active");
        }
        dian[num].classList.add("active");
        banner_pc[num].classList.add("active");
        backgrounds.style.background = colorarr[num];
    }
    let st = setInterval(move, 2000);

    backgrounds.onmouseover = function () {
        clearInterval(st)
    }
    backgrounds.onmouseout = function () {
        st = setInterval(move, 2000)
    }
}
//视频的左面的下面开始
{
    const bottomr_inner= document.querySelector(".bottomr-inner");
    let num=0;
    setInterval(function () {
        num++;
        if(num==2){
            num=0;
        }
        bottomr_inner.style.marginTop=-num*40+"px";
    },2000)
}
//视频的左面的下面结束
//按需加载开始
{
   let imgs=document.images;
        let st=document.body.scrollTop;

        Array.from(imgs).forEach(function (ele) {
            if(st+window.innerHeight>getPosition(ele)){
                ele.src=ele.getAttribute("data-src");
            }
        })
window.addEventListener("scroll",function() {
    let st = document.body.scrollTop;

    Array.from(imgs).forEach(function (ele) {
        if (st + window.innerHeight > getPosition(ele)) {
            ele.src = ele.getAttribute("data-src");
        }
    })
})
    function getPosition(obj) {
        let ot=obj.offsetTop;
        let parent=obj.offsetParent//定位元素的父元素
        while(parent!==null&&parent.nodeName!=="BODY"){
            ot+=parent.offsetTop ;
            parent=parent.offsetParent;
        }
        return ot;
    }
   

}
//按需加载失败





