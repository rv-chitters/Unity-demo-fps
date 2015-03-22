#pragma strict

function Start () {

}

function Update () {

}
function OnGUI () {
		if (GUI.Button (Rect (10,180,150,100), "TO MAIN MENU"))
			Application.LoadLevel(0);
	}