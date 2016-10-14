/**
 * Created by Administrator on 2016/10/14 0014.
 */
(function () {
    var box2=document.getElementById("box2");
    var inbox2=document.getElementById("inbox2");
    var spans=inbox2.getElementsByTagName("span");
    for (var i = 0; i < spans.length; i++) {
        spans[i].value = i;
    }

    box2.style.background="url(img/two_0.png)";
    spans[0].style.backgroundColor="#f40";
    var box2Invale;
    var inimg_kind=0;
    function timerun(){
        box2Invale=setInterval(function () {
                inimg_kind=(inimg_kind+1)%4;
                box2.style.background="url(img/two_"+inimg_kind+".png)";
            for(var i=0;i<spans.length;i++){
                if(i==inimg_kind){
                    spans[i].style.backgroundColor="#f40";
                }else{
                    spans[i].style.backgroundColor="#fff";
                }
            }
        },2000)
    }
    timerun();

    function changebg(obj){
        for(var i=0;i<spans.length;i++){
            if(i==obj.value){
                box2.style.background="url(img/two_"+i+".png)";
                spans[i].style.backgroundColor="#f40";
                clearInterval(box2Invale);
                inimg_kind=i;
                timerun();
            }else{
                spans[i].style.backgroundColor="#fff";
            }
        }
    }
    function changefront(){
        var inchange=inimg_kind;
        for(var i=0;i<spans.length;i++){
            if(i==((inchange+3)%4)){
                box2.style.background="url(img/two_"+i+".png)";
                spans[i].style.backgroundColor="#f40";
                clearInterval(box2Invale);
                inimg_kind=(inimg_kind+3)%4;
                timerun();
            }else{
                spans[i].style.backgroundColor="#fff";
            }
        }
    }
    function changenext(){
        var inchange=inimg_kind;
        for(var i=0;i<spans.length;i++){
            if(i==((inchange+1)%4)){
                box2.style.background="url(img/two_"+i+".png)";
                spans[i].style.backgroundColor="#f40";
                clearInterval(box2Invale);
                inimg_kind=(inimg_kind+1)%4;
                timerun();
            }else{
                spans[i].style.backgroundColor="#fff";
            }
        }
    }
    window.changefront=changefront;
    window.changenext=changenext;
    window.changebg=changebg;
    
    var b2a_front=document.getElementById("b2_front");
    var b2a_next=document.getElementById("b2_next");
    b2a_front.onmouseover= function () {
        clearInterval(box2Invale);
    };
    b2a_front.onmouseout= function () {
        timerun();
    };
    b2a_next.onmouseover= function () {
        clearInterval(box2Invale);
    };
    b2a_next.onmouseout= function () {
        timerun();
    }
})();