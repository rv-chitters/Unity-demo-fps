#pragma strict

function Start () {

}

function Update () {
    if(Time.timeScale==1){
      Destroy(gameObject,0);
      }
}
	function OnGUI () {
		if (GUI.Button (Rect (10,180,150,100), "TO MAIN MENU"))
			Application.LoadLevel(0);
	}