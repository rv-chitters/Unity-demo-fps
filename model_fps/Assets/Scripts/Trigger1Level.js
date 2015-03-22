#pragma strict

function Start () {

}

function Update () {

}
function OnCollisionEnter (collision:Collision){
   if((collision.transform.tag=="Bullet")){
      print("shot");
}
}