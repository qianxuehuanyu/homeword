/**
 * Created by Administrator on 2016/10/9 0009.
 */
var inrongd;
(function(){
    //获取id为lunbo的div对象
    var inbox=document.getElementById("lunbo");
    //获取lunbo所属div里面的img元素对象数组
    var inimg=inbox.getElementsByTagName("img");
    //获取id为inspan的div对象
    var inspans=document.getElementById("inspan");
    //获取inspan所属div里面的span元素对象数组
    var spans=inspans.getElementsByTagName("span");
    //给所有的img添加属性，本来应该是写在图片添加的js里面的，不过我图片是直接添加好的，所以就在这里写上，主要是为了节省功夫，用for循环添加共有属性
    for(var i=0;i<inimg.length;i++){
        inimg[i].id="a"+i;
        inimg[i].style.position="absolute";
        inimg[i].style.left="0px";
    }
    //默认的第一张图片的属性，老师好像是用if判断的，我就不用了，直接给相应的属性赋值好。
    inimg[0].style.zIndex="200";
    var inchar=0;
    var lastinchar=0;
    //timeround函数，
    function timeround(){
        //将全局对象inrongd定义，定义为setInterval的循环函数，每1.5秒一循环，
        inrongd=setInterval(function(){
            //在循环中，首先获取页面上正在显示的图片的下标，赋值给inchar
            for(var i=0;i<inimg.length;i++){
                if(inimg[i].className=="intop"){
                    inchar=i;
                }else if(inimg[i].className=="intopfront"){
                    inchar=i;
                }
            }
            //判断inchar的值
            switch (inchar){
                case 8:{
                    //如果为最后一张，将最后一张的属性和对应点的背景颜色修改
                    // 然后将下标修改为0，也就是跳到第一张然后修改第一张的属性和第一个点的背景颜色
                    lastinchar=inchar;
                    inchar=0;
                    for(var j=0;j<spans.length;j++) {
                        if (j == inchar) {
                            inimg[j].className="intop";
                        }else if(j==lastinchar){
                            inimg[j].className="infront";
                        }else{inimg[j].className="inin";}
                    }
                    for(var m=0;m<spans.length;m++) {
                        if (m == inchar) {
                            spans[m].style.backgroundColor="#f60";
                        }else{spans[m].style.backgroundColor="#ffe";}
                    }
                }break;
                default:{
                    //如果不是最后一张，也就是0-7下标，我是9张图片，也就是前8张，修改前一张属性
                    //自加1后修好后一张图片的属性，从而跳到下一张图片
                    lastinchar=inchar;
                    inchar++;
                    for(var j=0;j<spans.length;j++) {
                        if (j == inchar) {
                            inimg[j].className="intop";
                        }else if(j==lastinchar){
                            inimg[j].className="infront";
                            console.log("front")
                        }else{inimg[j].className="inin";}
                    }
                    for(var m=0;m<spans.length;m++) {
                        if (m == inchar) {
                            spans[m].style.backgroundColor="#f60";
                        }else{spans[m].style.backgroundColor="#ffe";}
                    }
                }break;
            }
            console.log("123")
        },1800);
    }
    //让图片往前一张的函数，和html里的a的onclick对应，闭包获取不到，所以在最后加了window进行全局化
    function front(){
        for(var i=0;i<inimg.length;i++){
            if(inimg[i].className=="intop"){
                inchar=i;
            }else if(inimg[i].className=="intopfront"){
                inchar=i;
            }
        }
        switch (inchar){
            case 0:{
                inchar=8;
                lastinchar=0;
                for(var j=0;j<spans.length;j++) {
                    if (j == inchar) {
                        inimg[j].className="intopfront";
                    }else if(j==lastinchar){
                        inimg[j].className="infront";
                    }else{inimg[j].className="inin";}
                }
                for(var m=0;m<spans.length;m++) {
                    if (m == inchar) {
                        spans[m].style.backgroundColor="#f60";
                    }else{spans[m].style.backgroundColor="#ffe";}
                }
            }break;
            default:{
                lastinchar=inchar;
                inchar--;
                for(var j=0;j<spans.length;j++) {
                    if (j == inchar) {
                        inimg[j].className="intop";
                    }else if(j==lastinchar){
                        inimg[j].className="infront";
                        console.log("front")
                    }else{inimg[j].className="inin";}
                };
            }break;
        }
        //结束时间循环，再重新开始循环，避免时间差；如果在1.5秒的间隔中点击后，如果不重新开始时间循环，跳入下一张图片的时间就少于1.5秒，
        clearInterval(inrongd);
    }
    //让图片往hou一张的函数，和html里的a的onclick对应，闭包获取不到，所以在最后加了window进行全局化
    function next(){
        for(var i=0;i<inimg.length;i++){
            if(inimg[i].className=="intop"){
                inchar=i;
            }else if(inimg[i].className=="intopfront"){
                inchar=i;
            }
        }
        switch (inchar){
            case 8:{
                inchar=0;
                lastinchar=8;
                for(var j=0;j<spans.length;j++) {
                    if (j == inchar) {
                        inimg[j].className="intop";
                    }else if(j==lastinchar){
                        inimg[j].className="infront";
                    }else{inimg[j].className="inin";}
                }
                for(var m=0;m<spans.length;m++) {
                    if (m == inchar) {
                        spans[m].style.backgroundColor="#f60";
                    }else{spans[m].style.backgroundColor="#ffe";}
                }
            }break;
            default:{
                lastinchar=inchar;
                inchar++;
                for(var j=0;j<spans.length;j++) {
                    if (j == inchar) {
                        inimg[j].className="intop";
                    }else if(j==lastinchar){
                        inimg[j].className="infront";
                    }else{inimg[j].className="inin";}
                }
                for(var m=0;m<spans.length;m++) {
                    if (m == inchar) {
                        spans[m].style.backgroundColor="#f60";
                    }else{spans[m].style.backgroundColor="#ffe";}
                }
            }break;
        }
        //同front的相关注释
        clearInterval(inrongd);
        console.log("111");
    }
    //全局
    window.front=front;
    window.next=next;
    window.timeround=timeround;
    //调用开始
    timeround();

    })();
