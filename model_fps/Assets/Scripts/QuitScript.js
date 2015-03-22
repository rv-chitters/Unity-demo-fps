#pragma strict

function Start () {

}

function Update () {

}
	function OnGUI () {
		if (GUI.Button (Rect (180,10,150,100), "QUIT"))
			Application.Quit();
	}