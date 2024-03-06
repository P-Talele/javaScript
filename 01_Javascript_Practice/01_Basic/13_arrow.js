function cofee()
{
        console.log(this)
}
cofee()
const chai=()=>{ 
       const user="prashant"
       console.log(this)
}
chai()
const AddTwoNumber =(number1, number2)=>
{
        return number1+number2     
}
console.log(AddTwoNumber(2,4))
const  subtractionTwoNumber =(number1, number2)=>(number1-number2)
console.log(subtractionTwoNumber(60,20))
  
const employeName=()=>({username:"prashant"})
console.log(employeName())    


   