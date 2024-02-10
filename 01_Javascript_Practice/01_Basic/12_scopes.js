const number1=20
var number2=30;
let number3=40;

if(true)
{
                const number1=50;
                var  number2=60;
                let number3=70;


                 console.log("inner",number1)
                 console.log("inner",number2)
                 console.log("inner",number3)
}

if(true)
{
                 const number1=50;
                 var  number2=60;
                 let number3=70;
}


       console.log(number1)
       console.log(number2)
       console.log(number3)

    function user()
       {
          const  user1="prashant"

               function client ()
               {
                      const server="youtube"
                      console.log(user1)
               }
             client()
       }
       user()

    
    
       if(true)
          {
               const username="prashant"
               if(username==="prashant")
               {
                       const talele="talele"
                       console.log(username + talele)
               }
          }
