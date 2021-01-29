var a = -5;
var b = -2;
var c = 17;

console.log("The value of a is " + a);
console.log("The value of b is " + b);
console.log("The value of c is " + c);

if(a>b && a>c){
    console.log("a is the greatest number");
} else if (b>a && b>c){
    console.log("b is the greatest number");
} else if (c>a && c>b){
    console.log("c is the greatest number");
} else if (a=b && a>c){
    console.log("a and b are the greatest numbers");
} else if (b=c && b>a){
    console.log("b and c are the greatest numbers");
} else {
    console.log("a and c are the greatest numbers");
}







