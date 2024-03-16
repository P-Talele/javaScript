function pune_1 ()    // Without Asynt Function 
{
    setTimeout(()=>{
          console.log("Pune=20")
    },3000)
}

function  Mumbai_1()
{
     setTimeout(()=>{
         console.log("Mumbai=30")
   },2000)
}
pune_1()    // calling function 
Mumbai_1()  // Calling function 







async function  Pune()                     // Using Async Function 
{
       let puneTime=new Promise((resolve , reject)=>{
           setTimeout(()=>{
                 resolve("pune=20")
           },7000);
       })

        let mumbaiTime=new Promise((resolve , reject)=>{
            setTimeout(()=>{
               resolve("Mumbai=30")
         },1000);
    })


       let Pune= await    puneTime
       let Mumbai= await  mumbaiTime   
       console.log(Pune)
       console.log(Mumbai)
}

  Pune()   // function Calling 




