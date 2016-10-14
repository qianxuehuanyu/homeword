/**
 * Created by Administrator on 2016/10/14 0014.
 */
(function() {
    var box1 = document.getElementById("box1");
    var imgs = box1.getElementsByTagName("img");
    var inbox1 = document.getElementById("inbox1");
    var spans = inbox1.getElementsByTagName("span");
    for (var i = 0; i < spans.length; i++) {
        spans[i].value = i;
    }


    imgs[0].style.zIndex = "300";
    spans[0].style.backgroundColor = "#f40";
    var box1Invale;

    function timerun() {
    box1Invale = setInterval(function () {
        var inzindex;
        for (var i = 0; i < imgs.length; i++) {
            if (imgs[i].style.zIndex == "300") {
                inzindex = i;
            }
        }
        if (inzindex == 10) {
            imgs[0].style.zIndex = "300";
            spans[0].style.backgroundColor = "#f40";
            imgs[10].style.zIndex = "100";
            spans[10].style.backgroundColor = "#fff";
        } else {
            imgs[inzindex+1].style.zIndex = "300";
            spans[inzindex+1].style.backgroundColor = "#f40";
            imgs[inzindex].style.zIndex = "100";
            spans[inzindex].style.backgroundColor = "#fff";
        }
    }, 1000);
    }

    function choose(obj){
        for(var i=0;i<spans.length;i++){
            if(i==obj.value){
                spans[i].style.backgroundColor="#f40";
                imgs[i].style.zIndex="300";
                clearInterval(box1Invale);
                timerun();
            }else{
                spans[i].style.backgroundColor="#fff";
                imgs[i].style.zIndex="100";
                clearInterval(box1Invale);
                timerun();
            }
        }
    }
    function box1_front(){
        var inzindex;
        for (var i = 0; i < imgs.length; i++) {
            if (imgs[i].style.zIndex == "300") {
                inzindex = i;
            }
        }
        if (inzindex == 0) {
            imgs[10].style.zIndex = "300";
            spans[10].style.backgroundColor = "#f40";
            imgs[0].style.zIndex = "100";
            spans[0].style.backgroundColor = "#fff";
            clearInterval(box1Invale);
            timerun();
        } else {
            imgs[inzindex-1].style.zIndex = "300";
            spans[inzindex-1].style.backgroundColor = "#f40";
            imgs[inzindex].style.zIndex = "100";
            spans[inzindex].style.backgroundColor = "#fff";
            clearInterval(box1Invale);
            timerun();
        }
    }
    function box1_next(){
        var inzindex;
        for (var i = 0; i < imgs.length; i++) {
            if (imgs[i].style.zIndex == "300") {
                inzindex = i;
            }
        }
        if (inzindex == 10) {
            imgs[0].style.zIndex = "300";
            spans[0].style.backgroundColor = "#f40";
            imgs[10].style.zIndex = "100";
            spans[10].style.backgroundColor = "#fff";
            clearInterval(box1Invale);
            timerun();
        } else {
            imgs[inzindex+1].style.zIndex = "300";
            spans[inzindex+1].style.backgroundColor = "#f40";
            imgs[inzindex].style.zIndex = "100";
            spans[inzindex].style.backgroundColor = "#fff";
            clearInterval(box1Invale);
            timerun();
        }
    }
    window.box1_front=box1_front;
    window.box1_next=box1_next;
    window.choose=choose;
    timerun();

    var b1a_front=document.getElementById("b1_front");
    var b1a_next=document.getElementById("b1_next");
    b1a_front.onmouseover= function () {
        clearInterval(box1Invale);
    };
    b1a_front.onmouseout= function () {
        timerun();
    };
    b1a_next.onmouseover= function () {
        clearInterval(box1Invale);
    };
    b1a_next.onmouseout= function () {
        timerun();
    }
})();
