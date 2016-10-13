/**
 * Created by Administrator on 2016/10/13 0013.
 */
var aneObj=function(){

    this.x=[];
    this.h=[];
};
aneObj.prototype.num=50;
aneObj.prototype.init=function(){
    for(var i=0;i<this.num;i++){
        this.x[i]=i*16+Math.random()*7;
        this.h[i]=200+Math.random()*70;
    }
};
aneObj.prototype.draw=function(){
    ctx2.save();//控制样式save()+restore()
    ctx2.globalAlpha=0.55;
    ctx2.strokeStyle="#4C1671";
    ctx2.lineWidth=16;
    ctx2.lineCap="round";
    for(var i=0;i<this.num;i++){
        //beginPath,moveTo,lineTo,stroke,strokestyle,lineWidth,lineCap(特殊样式),globalAlpha(透明度)

        ctx2.beginPath();
        ctx2.moveTo(this.x[i],canHeight);
        ctx2.lineTo(this.x[i],canHeight-this.h[i]);
        ctx2.stroke();
    }
    ctx2.restore();
};