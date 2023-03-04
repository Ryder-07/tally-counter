let count=0;
let increment=1;
document.getElementById("plus").addEventListener("click", () =>{
    count=count+increment;
    console.log(count);
    document.getElementById("num").innerHTML=count
})
document.getElementById("minus").addEventListener("click", () =>{
    count=count-increment;
    console.log(count);
    document.getElementById("num").innerHTML=count
})
document.getElementById("reset").addEventListener("click", () =>{
    count=0;
    increment=1;
    console.log(count);
    document.getElementById("num").innerHTML=count
})
document.getElementById("increment").addEventListener("click", () =>{
    increment=increment+1;
    console.log(count);
    document.getElementById("num").innerHTML=count
})
