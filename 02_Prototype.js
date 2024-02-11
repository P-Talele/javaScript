function  Student(id,name)
{
       this.id=id
       this.name=name
}


Student.prototype.getInformation=function(){
       return this.id+""+this.name;
}

let obj= new Student(111,"kartik")
let obj1=new Student(123,"Rohini")
console.log(obj.getInformation()) 
console.log(obj1.getInformation()) 
