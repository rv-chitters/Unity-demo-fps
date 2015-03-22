#pragma strict
var buletDisplay :GameObject;
var realBullet : GameObject;

function Start () {

}

function Update () {

}
function OnTriggerEnter (other : Collider) {
		if((other.gameObject.transform.tag != "Bullet")&&(other.gameObject.transform.tag != "bomb")){
		   Destroy(gameObject);
		   buletDisplay.transform.SendMessage("IncreaseBulletNo",40,SendMessageOptions.DontRequireReceiver);
		   realBullet.transform.SendMessage("IncreaseBulletNo",40,SendMessageOptions.DontRequireReceiver);
		   buletDisplay.transform.SendMessage("IncreaseBombNo",10,SendMessageOptions.DontRequireReceiver);
		   realBullet.transform.SendMessage("IncreaseBombNo",10,SendMessageOptions.DontRequireReceiver);
		   
		}
		}