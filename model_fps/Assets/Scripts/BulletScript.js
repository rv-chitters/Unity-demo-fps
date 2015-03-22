#pragma strict
var bullet1 : GameObject;
var Timelap:float = 0.02;
internal var nextTime : float;
var count :int =40;
var reciever : GameObject;

function Start () {}

function Update () {
if(Input.GetButton("Fire1")&&(Time.time>nextTime)&&count>0){
  nextTime=Time.time + Timelap;
  var cloneBullet : GameObject = Instantiate (bullet1,transform.position,transform.rotation);
  cloneBullet.GetComponent.<Rigidbody>().velocity = transform.TransformDirection(Vector3(0,0,30));
  Physics.IgnoreCollision(cloneBullet.GetComponent.<Collider>(),transform.root.GetComponent.<Collider>());
   count=count-1;
   reciever.transform.SendMessage("decrease",SendMessageOptions.DontRequireReceiver);
   
}


}
function IncreaseBulletNo(p :int){
 count = count +p;
}


