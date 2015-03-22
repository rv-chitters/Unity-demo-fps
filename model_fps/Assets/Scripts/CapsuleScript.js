#pragma strict

function Start () {

}

function Update () {
if (Input.GetButton("Fire3")){
  Destroy(gameObject,1);
}

}