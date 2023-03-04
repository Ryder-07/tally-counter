let count=0;
let increment=1;
document.getElementById("plus").addEventListener("click", () =>{
    count=count+increment;
    console.log(count);
    document.getElementById("num").innerHTML=count;
    color();
})
document.getElementById("minus").addEventListener("click", () =>{
    count=count-increment;
    console.log(count);
    document.getElementById("num").innerHTML=count;
    color();
})
document.getElementById("reset").addEventListener("click", () =>{
    count=0;
    increment=1;
    console.log(count);
    document.getElementById("num").innerHTML=count;
    color();
})
document.getElementById("increment").addEventListener("click", () =>{
    increment=increment+1;
    console.log(count);
    document.getElementById("num").innerHTML=count;
    color();
})
function color(){
if(count<0){
    document.getElementById("num").style.color= "#eb3461";
}
else if(count>=0){
    document.getElementById("num").style.color= "rgb(109,81,232)";
}
}
