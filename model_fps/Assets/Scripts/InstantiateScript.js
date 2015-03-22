#pragma strict
var resum : GameObject;
var restart : GameObject;
var tomain : GameObject;
function Start () {

}

function Update () {
if(Time.timeScale==0&&Time.time>1){
   var cloneresum : GameObject = Instantiate(resum);
   var clonerest : GameObject = Instantiate(restart);
   var clonetomain : GameObject = Instantiate(tomain);
   Destroy(gameObject,0);
}

}