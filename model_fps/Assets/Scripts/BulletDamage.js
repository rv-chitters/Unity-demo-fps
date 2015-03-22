#pragma strict
var  strikes :int =0;
public var enemyNo:int =0;

function Start () {

}

function Update () {
  // print(strikes);
 //  print(enemyN0);
     if (strikes==2){
       Destroy(gameObject,0);
       enemyNo=enemyNo+1;
       
    }
}
function OnCollisionEnter (collision:Collision){
   if((collision.transform.tag=="Bullet")){
      strikes=strikes+1;
}
}
function Destroy(transformOther:Transform){
   if( Vector3.Distance(transformOther.position, transform.position)<10){
       Destroy(gameObject);
   }
	 
	
}