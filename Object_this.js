/*var firstName,lastName;
firstName="Thirumala";
lastName="Reddy";

var name={
     firstName:'Narasa',
     lastName:'Reddy',
    greet:function(){
    return `First Name:${firstName} last Name:${lastName}`;
} }

console.log(name.greet());
//Output;
First Name:Thirumala last Name:Reddy*/

//Using this object;
var firstName,lastName;
firstName="Thirumala";
lastName="Reddy";

//var name = new Object(); // without object declaration also work;
var name={
     firstName:'Narasa',
     lastName:'Reddy',
    nameFunction:function(){
    return `Name:${this.firstName} ${this.lastName}`;
} }

console.log(name.nameFunction());

//Output;
//Name:Narasa Reddy;

