#pragma strict
var timer:double;
var enmy :GameObject;

//var num 
function Start () {
timer=parseInt(Time.time+4);

}

function Update () {
if(parseInt(Time.time)==timer){
    var objArray :GameObject[];
    objArray=GameObject.FindGameObjectsWithTag("enemy");
    for(var i:int=0;i<objArray.length;i++){
      objArray[i].SendMessage("Destroy",gameObject.transform,SendMessageOptions.DontRequireReceiver);
       //print("lol");
       
       }
       Destroy(gameObject);
       }}
    
  
 
 

