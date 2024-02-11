class S1                 // this is single inheritance 
{
     disp()
     {
          console.log("this is disp method ")
     }
}

  let obj=new S1()
   obj.disp() 


   class S2                   // this is  Multilevel inheritance 
   {
      disp1()
      {
        console.log("this is disp method 1")

      }
   }
    class S3 extends S2
    {
        disp2()
        {
            console.log("this is disp method 2")

        }
    }

    let obj1 =new S3()
    obj1.disp1()
    obj1.disp2()