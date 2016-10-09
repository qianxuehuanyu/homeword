/**
 * Created by Administrator on 2016/10/9 0009.
 */
(function(){
    var inbox=document.getElementById("lunbo");
    var inimg=inbox.getElementsByTagName("img");
    var inspans=document.getElementById("inspan");
    var spans=inspans.getElementsByTagName("span");

    for(var i=0;i<spans.length;i++){
        //给点添加点击事件，点击后，只有点击到的点的背景颜色改变，其他的全部改为#ffe颜色，同img图片，只有对应下标的图片的优先级为30，其余8张全部的优先级全部修改为10
        spans[i].onclick=function(){
                for(var m=0;m<spans.length;m++) {
                    if (m == this.value) {
                        spans[m].style.backgroundColor="#f60";
                    }else{spans[m].style.backgroundColor="#ffe";}
                }
                for(var j=0;j<spans.length;j++) {
                    if (j == this.value) {
                        inimg[this.value].style.zIndex = "30";
                    }else{inimg[j].style.zIndex = "10";}
                }
                console.log(inimg[this.value]);
                clearInterval(inrongd);
                timeround();
        };
    }
    //添加鼠标移入溢出，移入截断时间循环，移除重新时间循环
    for(var i=0;i<inimg.length;i++){
        inimg[i].onmouseover=function(){
            clearInterval(inrongd);
        };
        inimg[i].onmouseout=function(){
            timeround();
        };
    }



})();