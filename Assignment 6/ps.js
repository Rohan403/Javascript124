//write a program to check given number is perfect square are not.

var a=prompt("enter any number");

var flag=0;
for(var i=1; i<a;i=i+1){
   if(a%i==0 && a/i==i){
     flag=1;
     break;
   }
}
if(flag==1){
   console.log("Perfect Square Number");
}else{
    console.log(" not a Perfect Square Number");
} 