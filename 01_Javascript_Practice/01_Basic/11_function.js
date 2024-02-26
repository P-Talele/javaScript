function myFunction(){
    console.log("P")
    console.log("R")
    console.log("A")
    console.log("S")
    console.log("H")
    console.log("N") 
    console.log("T")
} 
myFunction()
  function AddTwoNumber (number1,number2)
   {
       console.log(number1+number2)  
       const add=number1+number2
       console.log(add)     
   }
    AddTwoNumber(5,6)

 function AddTwoNumber (number1,number2)
  {
           const add=number1+number2
           return add     
  }
   const add=AddTwoNumber(6,6)
   console.log("result,",add)


function AddTwoNumber (number1,number2)
 {
   return  number1+number2  
 }
 const result=AddTwoNumber(5,5)
 console.log("result,",result)


    function userLogIn (username)
     {
          return `${username} just Logged in`
     }
   console.log(userLogIn("prashant"))  

  
  
   function loggedIn(username)
    {
        if(!username)
        { 
                  console.log("please Enter your username")
                  return 
        } 
               return `${username} just logged in`
        }
      console.log(loggedIn("Sam"))


function calculateCartPrice(...num)
{
      return  num
}     
 console.log(calculateCartPrice(200,300,500.600,700))    


const myNewArray=[10,20,30,40];
function newArray(getArray)
{
    return getArray[2]
}
  console.log(newArray(myNewArray))
  