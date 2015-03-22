#pragma strict

function Start () {
 Time.timeScale=1;
}

function Update () {
if(Input.GetKeyDown("escape")){
    Time.timeScale=0;
}


}