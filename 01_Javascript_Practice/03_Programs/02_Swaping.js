
function Swapping1()
{
    console.log("Using Third Varibale")

    let num1=20
    let num2=30
    console.log("Befor Swapping num1="+num1)          // Without Swapping 
    console.log("Befor Swapping num2="+num2)   
    
    
    let num3=num1                                       // Using Third Variable 
        num2=num2+num1
        num1=num2-num1 
        num2=num3
    
         console.log(" After Swapping Num1="+num1)    
         console.log(" After Swapping Num2="+num2)
    
}



 function Swapping2()
 {
    console.log("Without Using Third  Varibale")


    let num1=20
    let num2=30

    console.log(" Befor Swapping  num1="+num1)          // Without Swapping 
    console.log(" Befiore Swapping  num2="+num2)   
   
      num2=num2+num1
      num1=num2-num1
      num2=num2-num1
      
      console.log("After Swapping num1="+num1) 
      console.log("After Swapping num2="+num2) 
 }


  Swapping1()
  Swapping2()




