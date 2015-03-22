#pragma strict
var count : int =40;
var bombCount : int =10;
function Start () {

}

function Update () {
    GetComponent(GUIText).text="Bullets:"+count.ToString()+"Bombs:"+bombCount.ToString();
     
    }
function decrease(){
   count=count-1;
}
function IncreaseBulletNo(p :int){
     count = count + p;
}
function BombDecrease(){
  bombCount=bombCount-1;
}
function IncreaseBombNo(t:int){
     bombCount=bombCount+t;
}