let promise=new Promise((resolve, reject)=>{
    console.log("i am Promise ")
    resolve("order complted")
    reject("some error")
})
//console.log(promise)

function  getInformation(student_id) {
           let promise =new Promise((resolve ,reject)=>{
           setTimeout(()=>{
                    console.log("Student ID="+student_id)
                    resolve("succsess")
                
               },2000)
         })
        }

             console.log(promise)
   getInformation(123)



   let promise2 = new Promise(function (resolve, reject) {
	const x = "geeksforgeeks";
	const y = "geeksforgeeks"
	if (x === y) {
		resolve();
	} else {
		reject();
	}
});

promise2.
	then(function () {
		console.log('Success, You are a GEEK');
	}).
	catch(function () {
		console.log('Some error has occurred');
	});




  // how to handle promise    -------->    using then can catch Method Using 

  const getPromise = () => {
      return new Promise((resolve, reject)=>{
       console.log("Print Success")
      resolve("success")
       reject("some technical issue")
      });
  };

  
       promise   =getPromise();

         promise.then((res)=> {
         console.log("My Order Suucessfully Completed "+res)
  });

    promise.catch((err)=>{
    console.log("Some Technical Resones , we can not deleverd our order"+err)
    });



  
    const getPromise1 = () => {
        return new Promise((resolve, reject)=>{
           setTimeout(()=>{
             console.log("Data_1")
             resolve("Success One ")
           },2000)
         });
    };
  
     console.log(" i am Promise ")
         promise   =getPromise1();
  
           promise.then((res)=> {
           console.log(res)
    });
  
      promise.catch((err)=>{
      console.log(err)
      });



   

   
