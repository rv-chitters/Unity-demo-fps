#pragma strict
var insti :GameObject;
function Start () {
 
}

function Update () {

}
function OnGUI () {
		if (GUI.Button (Rect (10,10,150,100), "Resume")){
			Time.timeScale=1;
			Destroy(gameObject,0);
			var clonInsti : GameObject = Instantiate(insti);
	}
	}