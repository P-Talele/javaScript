const myArr=[1,2,3,4,5]
const myArr1=new Array("prashant","Arun","Talele")

console.log(myArr)
console.log(myArr1)    

//Array Method   

const myArr2=new Array(1,2,3,4,5)
const myArr3=new Array(10,11,12,14)
myArr2.push(6)
myArr2.push(7)
myArr2.push(8)
//myArr2.pop()                        // remove last value   
//myArr2.unshift(10)                 //  
console.log(myArr2)                      
console.log(myArr2.includes(3))
console.log(myArr2.includes(13))
console.log("Concanate of Two Array"+myArr2.concat(myArr3))
console.log(myArr2)

  console.log(":Join method ")
  const newArry = myArr2.join()

    console.log(myArr2)
    console.log(newArry.of)

