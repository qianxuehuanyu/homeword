/**
 * Created by Administrator on 2016/10/17 0017.
 */
(function () {
    var one=["1","2","3","4","5","6","7","8","9","0"];
    var two=["q","w","e","r","t","y","u","i","o","p"];
    var two_tab=["Q","W","E","R","T","Y","U","I","O","P"];
    var three=["a","s","d","f","g","h","j","k","l"];
    var three_tab=["A","S","D","F","G","H","J","K","L"];
    var four=["z","x","c","v","b","n","m"];
    var four_tab=["Z","X","C","V","B","N","M"];
    var tab=0;
    var all=["1","2","3","4","5","6","7","8","9","0","q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
    var all_tab=["1","2","3","4","5","6","7","8","9","0","Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
    console.log(all.length);
    console.log(all_tab.length);
    var inshow=$("#in_show");
    var intextshow=$("#in_textshow");
    inshow.toggle();
    intextshow.toggle();
    var keytext=true;
    var keyin=true;
    $("#show").click(function () {
        inshow.toggle("slow");
        keyin=keyin==true?false:true;console.log(keyin);
});
    $("#changefide").click(function () {
        inshow.hide("slow");
        keyin=true;
    });
    var inkeypassword=[49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86, 66, 78, 77];

    $("#password").keypress(function (event) {
        if(event.keyCode==20){
            tab=tab==0?1:0;
            tabChange("line");
        }
        if(keyin){
            if(tab==0){
                var number=111111;
                for(var i=0;i<inkeypassword.length;i++){
                    if(event.keyCode==inkeypassword[i]){
                        number=i;
                    }
                }
                if(number!=111111){
                    var lastchar = $("#password").val();
                    var lc_l=lastchar.length-1;
                    var lastlist=lastchar.split("");
                    lastchar="";
                    for(var i=0;i<lc_l;i++){
                        lastchar+=lastlist[i];
                    }
                    if(lc_l<0){
                        $("#password").val("");
                    }else{
                        $("#password").val(lastchar+all_tab[number]);
                    }
                    console.log($("#password").val());
                }
            }else{
                var number=111111;
                for(var i=0;i<inkeypassword.length;i++){
                    if(event.keyCode==inkeypassword[i]){
                        number=i;
                    }
                }
                if(number!=111111){
                var lastchar = $("#password").val();
                var lc_l=lc_l=lastchar.length-1;
                var lastlist=lastchar.split("");
                lastchar="";
                for(var i=0;i<lc_l;i++){
                    lastchar+=lastlist[i];
                }
                if(lc_l<0){
                    $("#password").val("");
                }else{
                    $("#password").val(lastchar+all[number]);
                }
                }
            }
        }else{
            event.preventDefault();
        }
    });

    $("#text_show").click(function () {
        intextshow.toggle("slow");
        keytext=keytext==true?false:true;
    });

    $("#textchangefide").click(function () {
        intextshow.hide("slow");
        keytext=true;
        $("#password").focus();
    });

    //$("#text_input").keypress(function (event) {
    //
    //};

    function open(value) {
        for (var i = 0; i < one.length; i++) {
            $("#"+value+"_one").append("<a></a>");
        }
        for (var i = 0; i < two.length; i++) {
            $("#"+value+"_two").append("<a></a>");
        }
        for (var i = 0; i < three.length; i++) {
            $("#"+value+"_three").append("<a></a>");
        }
        for (var i = 0; i < four.length; i++) {
            $("#"+value+"_four").append("<a></a>");
        }
        if (value == "line") {
            $("#"+value+"_one").find("a").each(function (index, element) {
                $(element).html(one[index]);
                $(element).val(one[index]);
                //console.log($(element).val());
                $(element).click(function (e) {
                    var last = $("#password").val();
                    $("#password").val(last + $(element).val());
                });
            });
            $("#"+value+"_two").find("a").each(function (index, element) {
                $(element).html(two[index]);
                $(element).val(two[index]);
                //console.log($(element).val());
                $(element).click(function (e) {
                    var last = $("#password").val();
                    $("#password").val(last + $(element).val());
                });
            });
            $("#"+value+"_three").find("a").each(function (index, element) {
                $(element).html(three[index]);
                $(element).val(three[index]);
                $(element).click(function (e) {
                    var last = $("#password").val();
                    $("#password").val(last + $(element).val());
                });
            });
            $("#"+value+"_four").find("a").each(function (index, element) {
                $(element).html(four[index]);
                $(element).val(four[index]);
                $(element).click(function (e) {
                    var last = $("#password").val();
                    $("#password").val(last + $(element).val());
                });
            });
    }else{
            $("#"+value+"_one").find("a").each(function (index, element) {
                $(element).html(one[index]);
                $(element).val(one[index]);
                $(element).click(function (e) {
                    var last = $("#text_input").val();
                    $("#text_input").val(last + $(element).val());
                    var password= $("#text_input").val();
                    var inpassword="";
                    for(var j=0;j<password.length;j++){
                        inpassword+="*";
                    }
                    $("#text_input").html(inpassword);
                });
            });
            $("#"+value+"_two").find("a").each(function (index, element) {
                $(element).html(two[index]);
                $(element).val(two[index]);
                $(element).click(function (e) {
                    var last = $("#text_input").val();
                    $("#text_input").val(last + $(element).val());
                    var password= $("#text_input").val();
                    var inpassword="";
                    for(var j=0;j<password.length;j++){
                        inpassword+="*";
                    }
                    $("#text_input").html(inpassword);
                });
            });
            $("#"+value+"_three").find("a").each(function (index, element) {
                $(element).html(three[index]);
                $(element).val(three[index]);
                $(element).click(function (e) {
                    var last = $("#text_input").val();
                    $("#text_input").val(last + $(element).val());
                    var password= $("#text_input").val();
                    var inpassword="";
                    for(var j=0;j<password.length;j++){
                        inpassword+="*";
                    }
                    $("#text_input").html(inpassword);
                });
            });
            $("#"+value+"_four").find("a").each(function (index, element) {
                $(element).html(four[index]);
                $(element).val(four[index]);
                $(element).click(function (e) {
                    var last = $("#text_input").val();
                    $("#text_input").val(last + $(element).val());
                    var password= $("#text_input").val();
                    var inpassword="";
                    for(var j=0;j<password.length;j++){
                        inpassword+="*";
                    }
                    $("#text_input").html(inpassword);
                });
            });
        }
    }
    open("line");
    open("text");
    function tabChange(obj){
        console.log(tab);
        tab=(tab+1)%2;
        console.log(tab);
        if(tab==1){
            $("#"+obj.value+"_two").find("a").each(function(index,element){
                $(element).html(two_tab[index]);
                $(element).val(two_tab[index]);
                //console.log($(element).val());
            });
            $("#"+obj.value+"_three").find("a").each(function(index,element){
                $(element).html(three_tab[index]);
                $(element).val(three_tab[index]);
            });
            $("#"+obj.value+"_four").find("a").each(function(index,element){
                $(element).html(four_tab[index]);
                $(element).val(four_tab[index]);
            });
        }else{
            $("#"+obj.value+"_two").find("a").each(function(index,element){
                $(element).html(two[index]);
                $(element).val(two[index]);
            });
            $("#"+obj.value+"_three").find("a").each(function(index,element){
                $(element).html(three[index]);
                $(element).val(three[index]);
            });
            $("#"+obj.value+"_four").find("a").each(function(index,element){
                $(element).html(four[index]);
                $(element).val(four[index]);
            });
        }
    }


    function textdelete(){
        var last = $("#text_input").val();
        var lastlast="";
        for(var j=1;j<last.length;j++){
            lastlast+=last[j-1];
        }
        $("#text_input").val(lastlast);
        var inpassword="";
        for(var j=0;j<lastlast.length;j++){
            inpassword+="*";
        }
        $("#text_input").html(inpassword);
    }
    function indelete(){
        var last = $("#password").val();
        var lastlast="";
        for(var j=1;j<last.length;j++){
            lastlast+=last[j-1];
        }
        $("#password").val(lastlast);
    }
    window.indelete=indelete;
    window.textdelete=textdelete;
    window.tabChange=tabChange;


})();