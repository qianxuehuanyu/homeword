/**
 * Created by Administrator on 2016/10/9 0009.
 */
(function(){
    //添加9个span也就是9个点
    var inbox=document.getElementById("lunbo");
    var inimg=inbox.getElementsByTagName("img");
    //创建9个点的父容器
    var inboxdiv=document.createElement("div");
    inboxdiv.style.cssText="height:30px;position:absolute;bottom:0px;width:240px;" +
        "z-index:300;left:180px;";
    inboxdiv.id="inspan";
    inbox.appendChild(inboxdiv);
//加入9个点
    for(var i=0;i<inimg.length;i++){
        var onin=document.createElement("span");
        onin.style.cssText="display:inline-block;width:10px;height:10px;border:2px solid #bbb;" +
            "border-radius:50%;float:left;margin-left:10px;" +
            "z-index:300;";
        //这里和后面相关，给了value后，后面获取下标就不需要用for循环+判断去取直接拿this.value就可以了，每个点都对应自身的this，也就对应获得响应的value
        onin.value=i;
        if(i==0){onin.style.backgroundColor="#f60";}else{onin.style.backgroundColor="#ffe";}
        inboxdiv.appendChild(onin);
    }
})();