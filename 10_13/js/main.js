/**
 * Created by Administrator on 2016/10/12 0012.
 */
document.body.onload=game;
//对象
var can1;
var can2;
//场景
var ctx1;
var ctx2;
//时间间隔问题变量
var lastTime;
var deleteTime;
//背景图片
var bgPic=new Image();
//画布尺寸
var canWidth;
var canHeight;
//海葵
var ane;
//果实
var fruit;
//大鱼
var bigFish;


//游戏入口函数
function game(){
    init();
    lastTime=Date.now();
    deleteTime=0;
    gameloop();
}
//初始化
function init(){
    can1=document.getElementById("canvas1");
    ctx1=can1.getContext('2d');
    can2=document.getElementById("canvas2");
    ctx2=can2.getContext('2d');
    bgPic.src="src/background.jpg";
    canWidth=can1.width;
    canHeight=can1.height;
    ane=new aneObj();
    ane.init();
    fruit=new fruitObj();
    fruit.init();
    bigFish=new bfObj();
    bigFish.init();
}
//游戏帧数变换
function gameloop(){
    requestAnimationFrame(gameloop);
    console.log("111");
    var now=Date.now();
    deleteTime=now-lastTime;
    lastTime=now;



    drawBackground();
    ane.draw();
    fruitMoitor();
    fruit.draw();

    ctx1.clearRect(0,0,canWidth,canHeight);
    bigFish.draw();
}
