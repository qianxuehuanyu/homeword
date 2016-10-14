/**
 * Created by Administrator on 2016/10/14 0014.
 */
(function () {
    var box1=document.getElementById("box1");
    for(var i=0;i<7;i++){
        var inimg=document.createElement("img");
        inimg.src="img/one_"+i+".jpg";
        box1.appendChild(inimg);
    }
    for(var i=10;i<14;i++){
        var inimg=document.createElement("img");
        inimg.src="img/one_"+i+".jpg";
        box1.appendChild(inimg);
    }

})();
