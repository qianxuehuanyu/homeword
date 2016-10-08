/**
 * Created by liuyujing on 16/10/8.
 */
(function () {

    function Game() {
        //初始的行数
        var rowNum = 2;
        //游戏的背景图
        var backgroundView;
        var changeopacity=0.7;

        //创建游戏界面
        function createView() {

            backgroundView = document.createElement("div");
            backgroundView.id = "backgroundView";
            document.body.appendChild(backgroundView);

            // 颜色的数组
            var colors = ["#9E413B","#33539E","#9E1A8D","#259E2D"];
            //随机抽选颜色
            var arcColorIndex = parseInt(Math.random()*100)%colors.length;

            //色块的数量：行数*行数
            var colorViewNum = rowNum*rowNum;

            // 随机的色块标识
            var specialColorViewID = parseInt(Math.random()*10000)%colorViewNum;

            for (var i=0;i<colorViewNum;i++){
                //创建色块
                var colorView = ColorView(rowNum,colors[arcColorIndex],1.0);
                backgroundView.appendChild(colorView);

                //找到特殊的色块 给他一个点击事件
                if (i===specialColorViewID){
                    colorView.style.opacity = changeopacity;
                    colorView.onclick = function () {
                        success();
                    };
                }else {
                    // 普通色块的点击事件
                    colorView.onclick = function () {
                        failed();
                    };
                }
            }
        }

        var dengjilist=["初级","中级","高级"];
        var guanka=1;
        var nandu=0;
        var intext=document.createElement("a");
        intext.id="inp";
        intext.innerHTML="关卡："+guanka+"\n"+"难度："+dengjilist[nandu]+"\n"+"等级："+(parseInt(guanka/5)+1);
        document.body.appendChild(intext);

        for(var i=0;i<3;i++){
            var button_three=document.createElement("button");
            button_three.value=i;
            button_three.innerHTML=dengjilist[i];
            button_three.onclick=function(){
                nandu=parseInt(this.value);
                console.log(nandu);
            };
            document.body.appendChild(button_three);
        }


        //成功
        function success() {
            // 让行数+1
            switch (nandu){
                case 0:{
                    guanka++;
                    if(guanka%5==1){
                        rowNum++;
                        changeopacity+=0.01;
                        console.log(changeopacity);
                    }
                }break;
                case 1:{
                    guanka++;
                    if(guanka%3==1){
                        rowNum++;
                        changeopacity+=0.01;
                        console.log(changeopacity);
                    }
                }break;
                case 2:{
                    guanka++;
                    rowNum++;
                    changeopacity+=0.01;
                    console.log(changeopacity);
                }break;
            }
           finish();
        }
        //失败
        function failed() {
            // 让行数重置
            rowNum = 2;
            finish();
        }
        //游戏完成
        function finish() {
            // 替换上一个界面
            //移除
            document.body.removeChild(backgroundView);
            //重新加载游戏界面
            createView();
            var changetext=document.getElementById("inp");
            changetext.innerHTML="关卡："+guanka+"\n"+"难度："+dengjilist[nandu]+"\n"+"等级："+(parseInt(guanka/5)+1);
        }
        createView();
    }
    window.Game = Game;
})();
