#pragma strict
var coinDisplay :GameObject;
function Start () {

}

function Update () {

}
function OnTriggerEnter (other : Collider) {
		if(other.gameObject.transform.tag != "Bullet"){
		   Destroy(gameObject);
		   coinDisplay.transform.SendMessage("IncreaseCoinNo",SendMessageOptions.DontRequireReceiver);
		   
		}
		}