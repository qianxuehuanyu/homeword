/**
 * Created by Administrator on 2016/10/13 0013.
 */
var bfObj= function () {
    this.x;
    this.y;
    this.bfEye=new Image();
    this.bfBody=new Image();
    this.bfTail=new Image();
};
bfObj.prototype.init= function () {
    this.x=canWidth/2;
    this.y=canHeight/2;
    this.bfEye.src="src/bigEye0.png";
    this.bfBody.src="src/bigSwim0.png";
    this.bfTail.src="src/bigTail0.png";

};
bfObj.prototype.draw=function(){
    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.drawImage(this.bfEye,-this.bfEye.width/2,-this.bfEye.height/2);
    ctx1.drawImage(this.bfBody,-this.bfBody.width/2,-this.bfBody.height/2);
    ctx1.drawImage(this.bfTail,-this.bfTail.width/2+30,-this.bfTail.height/2);
    ctx1.restore();
};