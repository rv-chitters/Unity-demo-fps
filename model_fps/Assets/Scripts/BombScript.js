#pragma strict
var bomb1 : GameObject;
var Timelap:float = 5;
internal var nextTime : float;
var num :int =10; 
var reciever :GameObject;
function Start () {

}

function Update () {
if(Input.GetButton("Fire2")&&Time.time>nextTime&&num>0){
  nextTime=Time.time + Timelap;
  var cloneBomb : GameObject = Instantiate (bomb1,transform.position,transform.rotation);
  cloneBomb.GetComponent.<Rigidbody>().velocity = transform.TransformDirection(Vector3(0,0,15));
  Physics.IgnoreCollision(cloneBomb.GetComponent.<Collider>(),transform.root.GetComponent.<Collider>());
  num=num-1;
  reciever.SendMessage("BombDecrease",SendMessageOptions.DontRequireReceiver);
  
}
}
function IncreaseBombNo(p:int){

num=num+p;
}