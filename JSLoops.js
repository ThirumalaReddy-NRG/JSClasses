JSloop.


function print(input){
    for (i=0;i<input;i++){
        console.log(i);
    }
}

print(5)

//iffi//
(function(){
    console.log('iffi - no name to this function');
}())



//generators//
function * print(input){
    for (i=0;i<input;i++){
        yield i
    }
}

print(5)

Output:
var data=print(5)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: undefined, done: true}

fuction * print(input){
    for (i=1;i<input;i++){
        yeild i;
    }
}

var output=print(5)