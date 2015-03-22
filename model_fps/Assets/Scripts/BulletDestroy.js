#pragma strict

function Start () {
  Destroy(gameObject,5);
}

function Update () {

}
function OnCollisionEnter(collision:Collision){
 Destroy(gameObject,1);

}