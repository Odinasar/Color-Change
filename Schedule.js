
var today= new Date();
//var today= new Date('june 12,2019 21:00:59'); //to test 
var hour=today.getHours();
var day=today.getDay();


var schedule=function(){
   
    if(day!=6 && day!=0){
    
    if(hour<9||hour>=19){

        return false;
   
    }else{
        return true; 
 
    }
    
    }
     
        return false;
}
var x= schedule();


var changeColor = function (tag) {
    
  var days = document.getElementsByTagName(tag);
   for(var i=0;i<days.length;i++){
      if(day==0 && i==0){
          days[6].style.color = "red";
      }else if
       (i==day-1 && x){
        days[i].style.color = "green";  
           
       }else if(i==day-1 && x==false){
          days[i].style.color = "red";
       }
   }
  
}

changeColor("tr");
