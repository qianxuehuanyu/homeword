/**
 * Created by Administrator on 2016/10/29 0029.
 */
(function(){
    "use strict";
function textchange (str) {
    var outlist=[];
    //console.log(str);
    var char="", currentStr = "", value="";
    var time=/\d{1,2}\:\d{2}/;
    for (var i = 0; i < str.length; i++) {
        var obj = {};
        char = str.charAt(i);
        //console.log(char);
        switch (char) {
            case "&":
                value = currentStr;
                obj["song"] = value;
                obj["time"]=time.exec(value)[0];
                //console.log(time.exec(value));
                //console.log(time.exec(value).index);
                obj["song"] = value.substr(0,time.exec(value).index);
                currentStr = "";
                outlist.push(obj);
                break;
            default:
                currentStr += char;
                break;
        }
    }
    value = currentStr;
    //console.log(currentStr.length);
    if(value.length!=0){
        var end={};
        end["time"]=time.exec(value)[0];
        end["song"] = value.substr(0,time.exec(value).index);
        outlist.push(end);
    }
    return outlist;
}
    window.textchange=textchange;
})();