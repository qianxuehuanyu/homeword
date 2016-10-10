/**
 * Created by Administrator on 2016/10/9 0009.
 */
(function(){
    var inbox=document.getElementById("lunbo");
    var inimg=inbox.getElementsByTagName("img");
    var inspans=document.getElementById("inspan");
    var spans=inspans.getElementsByTagName("span");
    var lastimg;
    for(var i=0;i<spans.length;i++){
        //给点添加点击事件，点击后，只有点击到的点的背景颜色改变，其他的全部改为#ffe颜色，同img图片，只有对应下标的图片的优先级为30，其余8张全部的优先级全部修改为10
        spans[i].onclick=function(){
            for(var r=0;r<inimg.length;r++){
                if(inimg[r].className=="intop"){
                    lastimg=r;
                }else if(inimg[r].className=="intopfront"){
                    lastimg=r;
                }
            }
                for(var m=0;m<spans.length;m++) {
                    if (m == this.value) {
                        spans[m].style.backgroundColor="#f60";
                    }else{spans[m].style.backgroundColor="#ffe";}
                }
            if(lastimg>this.value){

                for(var j=0;j<spans.length;j++) {
                    if (j == this.value) {
                        inimg[this.value].className="intopfront";
                    }else if(j==lastimg){
                        inimg[j].className="infront";
                    }else{inimg[j].className="inin";}
                }

            }else{
                for(var j=0;j<spans.length;j++) {
                    if (j == this.value) {
                        inimg[this.value].className="intop";
                    }else if(j==lastimg){
                        inimg[j].className="infront";
                    }else{inimg[j].className="inin";}
                }
            }
                console.log(inimg[this.value]);
                clearInterval(inrongd);
        };
    }
    //添加鼠标移入溢出，移入截断时间循环，移除重新时间循环

        inbox.onmouseover=function(){
            clearInterval(inrongd);
        };
        inbox.onmouseout=function(){
            timeround();
        };




})();