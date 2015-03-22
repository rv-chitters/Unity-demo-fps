#pragma strict
var coinNo : int =0;
function Start () {

}

function Update () {
   GetComponent(GUIText).text=coinNo.ToString();
}
function IncreaseCoinNo(){
    coinNo = coinNo +1;
}
