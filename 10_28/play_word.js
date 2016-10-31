/**
 * Created by Administrator on 2016/10/29 0029.
 */

(function () {

    function inplay(str,list){
        "use strict";
        var inid,inid2,inid3;
        if(str=="chinese"){
            inid="inChinese";
            inid2="inChinese2";
            inid3="inChinese3";

        }else if(str=="japanese"){
            inid="inJapanese";
            inid2="inJapanese2";
            inid3="inJapanese3";
        }
        var k=0;
        var indiv=document.getElementById(inid);
        var indiv2=document.getElementById(inid2);
        var indiv3=document.getElementById(inid3);
        for(var i=0;i<5;i++){
            var div_addinp=document.createElement("p");
            div_addinp=document.createElement("p");
            div_addinp.className="addp";
            div_addinp.innerText=list[i].song;
            indiv3.appendChild(div_addinp);
        }
        var inplayer=document.getElementById("player");
        var intime=setInterval(function () {
            var now_time=inplayer.currentTime;
            if(k<list.length){
                var list_time=parseInt(list[k].time.substr(0,1))*60+parseInt(list[k].time.substr(2,4))+0.5;
                if(now_time>=list_time){
                    var div_addp=indiv2.getElementsByTagName("p");
                    if(div_addp.length!=0){
                        div_addp[div_addp.length-1].className="addp";
                    }
                    var div_roundp=indiv3.getElementsByTagName("p");
                    if(k<3){
                        if(k==0){
                            div_roundp[k].className="addinp";
                        }else{
                            div_roundp[k-1].className="addp";
                            div_roundp[k].className="addinp";
                        }
                    }else if(k<list.length-2){
                        div_roundp[0].remove();
                        div_roundp[1].className="addp";
                        div_roundp[2].className="addinp";
                        var div_addroundp=document.createElement("p");
                        div_addroundp.className="addp";
                        div_addroundp.innerText=list[k+2].song;
                        indiv3.appendChild(div_addroundp);
                        console.log(k);
                    }else{
                        div_roundp[k-29].className="addp";
                        div_roundp[k-28].className="addinp";
                    }
                    var div_addinp=document.createElement("p");
                    div_addinp.className="addinp";
                    div_addinp.innerText=list[k].song;
                    indiv2.appendChild(div_addinp);
                    indiv.innerHTML=list[k].song;
                    k++;
                }
            }else{
                clearInterval(intime);
                var div_addp=indiv2.getElementsByTagName("p");
                div_addp[div_addp.length-1].className="addp";
            }
console.log("0.1");
        },100);
    }

window.inplay=inplay;

})();