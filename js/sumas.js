/*
*https://www.w3resource.com/javascript-exercises/bit-manipulation/bit-manipulation-exercise-13.php
*/
function myFunction() {  
    let x,y,suma,text;  
    x = document.getElementById("num1").value;  
    y = document.getElementById("num2").value;  
    if (isNaN(x) || isNaN(y)) {  
         text = "Es necesarios introducir dos números válidos";  
    } else {  
          //si no ponemos parseFloat concatenaría x con y  
          suma=parseFloat(x)+parseFloat(y);  
          text= suma;  
    }  
    document.getElementById("sumando").innerHTML = text;  
  }