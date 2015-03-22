#pragma strict

function Start () {

}

function Update () {
  if(Time.timeScale==1)
     Destroy(gameObject,0);
}
function OnGUI () {
		if (GUI.Button (Rect (180,10,150,100), "RESTART"))
			Application.LoadLevel(Application.loadedLevel);
	}