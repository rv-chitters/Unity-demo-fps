#pragma strict
var startTime : int;
function Start () {
startTime = Time.time;
}

function Update () {
GetComponent(GUIText).text=parseInt((Time.time)-startTime).ToString();

}