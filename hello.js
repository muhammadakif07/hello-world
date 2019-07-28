function bolo(message) {
    console.log(message);
}

function add(a, b) {
    var sum = a + b;
    return sum;
}
function multiply (x,y){
    var product= x * y;
    return product;
}
function sub(a, b) {
    var difference = a-b;
    return difference;
}

function add(a, b, c) {
    var sum = a + b + c;
    return sum;
}

bolo("hello world");


var name = "ali";

var a = 12;
var b = 13;
var x = 14;
var y = 11;


bolo(name);

bolo(add(a, b, 12));

bolo(multiply(x,y));

function c2f(celsius) {
    var farenheit = celsius * 9/5 + 32;
    return farenheit;
}


function f2c(farenheit) {
    var celsius = (farenheit-32)*5/9;

    return celsius;
}
bolo(f2c(44));


bolo(c2f(45));