function sum(a,b)
{
       console.log(a+b);            
}
function  calculate(a, b ,callback)        // this is Call Back Function 
{
     callback(a,b);
}
calculate(20,30,sum);


function getdata1(emp_id)
{
 console.log("Emplyee ID="+emp_id)     
}

getdata1(123)
getdata1(12)
getdata1(1)


function getdata( emp_id)
{
       setTimeout(()=>{
         console.log("Emplyee ID="+emp_id)  
       },2000)
}

getdata(123)
getdata(12)
getdata(1)

function information(id , nextinformation)
{
         setTimeout(()=>{
        if(nextinformation) {
              nextinformation()
         }
         console.log("Student Information="+id);
        },2000)
}
information(1,()=>{                             // this is nested call back function 
       information(2,()=>{
             information(3,()=>{
                  information(4,()=>{
                     information(5,()=>{
                        });
                  });
             });
       });     
 });