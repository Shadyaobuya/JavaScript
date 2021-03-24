//Assignment2

var fruitPrice={
    
    cost:function (quantity,fruitName){
        var price= 30;
        return quantity+" "+fruitName +" for KES "+ price*quantity;
    }
    
    }
   console.log(fruitPrice.cost(2, "oranges"));


/*  FUNCTION-> is a block of code used to perform a set of Tasks
exists independently of objects
    e.g A function to add two numbers*/

   function sum(){
       var a=21;
       var b =43;
       var c=a+b;
       console.log(c);
   }
   sum();

//function to multiply two values
   function price(a, b){
       return a*b;
       
   }
   console.log(price(4,7));


// OBJECT->Data structure that you can set properties
// e.g
var student={
    firstname:"Shadya",
    lastname:"Obuya",
    gender:"female"
};
console.log("The students gender is " +student.gender);   //printing/getting the value of the gender property
student.firstname="Gard";
console.log(student.firstname);

var laptop={
    brand:"lenovo",
    hardDrive:500,
    ram:8,
    operatingSystem:"linux-ubuntu",
}
console.log("The laptop "+laptop.brand+", has a storage of "+laptop.hardDrive+ " and Ram of " +laptop.ram+" and runs on " +laptop.operatingSystem+" OS");





   /*  METHOD-> A method is an object property that contains a function definition
   e.g*/
   var cars={
       name:"RollsRoyce",
       color:"black",
       details:function(){
           return "The car of your dreams is a "+this.name+" "+this.color+ " in color ";

       }
   };
   console.log(cars.details());

   var student={
       firstname:"Shadya",
       lastname:"Obuya",
       fullName:function(){
           return "Your fullname is "+this.firstname+" "+this.lastname
       }
   }
   console.log(student.fullName());

   




   /*PRIMITIVE DATA TYPES-> Data types that are immutable in JavaScript. They Cant be changed
   e.g 
   Strings,
   Boolean,
   Numbers,
   undefined,
   Null
   It is data that is not an object and has no methods*/

   /*NON-PRIMITIVE DATA TYPES-> Data types that can be changed once created
   e.g
   Arrays
   Objects
   Functions
   list*/





   



    
   
    