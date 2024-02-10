let num1 =121
let rem;
let rev=0
let temp=num1


 while(num1>0)
 {
        rem=num1%10
        rev=rev*10+rem
        num1=num1/10
 }
console.log(rev)
 if(temp==rev)
 {
     console.log("This is Pelindrome")
 }
 else{
    console.log("This is  not Pelimdrome Number")
 }