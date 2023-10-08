for (let index = 0; index <=10; index++) 
     {
       const element = index
       console.log(element)
    
    }
     console.log("*******************Array***************************")
    const arr=new Array(1,2,3,45)
    for (let index = 0; index < arr.length; index++)
    {
          const element =arr[index];
          console.log(element) 
    }
 
    console.log("*******************Array***************************")
    const myArray=["prashant","Arun","Talele"]
    for (let index = 0; index < myArray.length; index++) 
      {
            const element = myArray[index];
              console.log(element)
      }
    console.log("*******************Array***************************")
    const myarray=["prashant","Arun","Talele"]
    for (let index = 0; index < myarray.length; index++) 
     {
          const element = myarray[0];
          console.log(element)
          break;
    }
    console.log("*******************Array***************************") 
   
   
    const n=[1,2]
    for (const ele  of n)
    {
         console.log(ele);
    }
    console.log("*******************function***************************") 

        const  programmming=["c","c++","java","Python","ruby"]
        programmming.forEach(function(item)
      {
                console.log(item);
      });

      console.log("******************* forEach loop Using Arrow Fucton ***************************") 

      const  language=["c","c++","java","Python","ruby"]
      language.forEach((item ,index ,language) =>
        {
           console.log(item ,index, language);
        })
       console.log("******************* forEach loop Using Arrow Fucton ***************************") 
       
         const student =[{
                  Ashish:"Java Developer",
                  Vijay:"India Mart",
                  Prashant:"Java Developer"
                  }]     
                student.forEach((item)=>{
                     console.log(item)
           });

   


 
   
