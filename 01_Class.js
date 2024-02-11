class s1 
{
      disp()                                       // Method 
      {
           console.log("today we learn Class And Object")
      }
 }

let  obj=new s1()
obj.disp()

   

class s2 
{
      disp1()                                     // Method
     {
           console.log("Disp1")
     } 
      disp2()                                     // Method
     {
           console.log("Disp2")
     }
}

let obj1=new s2()                                // object Declaration 
obj1.disp1()                                     // object Calling 
obj1.disp2()                                     // Object Calling 


       
class s3                                          // Using Constructor 
{  
    

     constructor(id, name)                        // this is Constructor 
     {
         this.id=id
         this.name=name
     }

     disp3()
     {
        console.log("Student ID="+this.id)
        console.log("Student name="+this.name)

     }
}

 let  obj2 = new  s3(111,"Aniket")              // Constructor Object Declaration  
 obj2.disp3()                                   //  method calling 

 class s4                                       // Withoud  Using Constructor Declaration 
 {
     disp5(id,name)
     {
        console.log("id="+id)
        console.log("Name="+name)
     }
 }

let obj4= new   s4()
    obj4.disp5(121,"Kashi")




  

