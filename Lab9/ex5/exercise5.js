var add = function(a,b){
    console.log("Adding two numbers "+ a +" and "+ b);
    console.log("The sum is "+ (a+b));
}

var sub = function(a,b){
    console.log("Subtracting two numbers "+ a +" and "+ b);
    console.log("The difference is "+ (a-b));
}

var mul = function(a,b){
    console.log("Multiplying two numbers "+ a +" and "+ b);
    console.log("The product is "+ (a*b));
}

var div = function(a,b){
    console.log("Dividing two numbers "+ a +" and "+ b);
    console.log("The divident is "+ (a/b));
}

var userPrompt = function(){
    input=window.prompt("Would you like to add, subtract, multiply or divide?");

    if (input=="+"){
        a=Number(window.prompt("Enter the first number"));
        b=Number(window.prompt("Enter the second number"));
        if (Number.isInteger(a) && Number.isInteger(b)){
        add(a,b);
        } else {
            console.log("Enter only numeric values!");
        }
    } else if (input=="-"){
        a=Number(window.prompt("Enter the first number"));
        b=Number(window.prompt("Enter the second number"));
        if (Number.isInteger(a) && Number.isInteger(b)){
        sub(a,b);
        } else {
            console.log("Enter only numeric values!");
        }
    } else if (input=="*"){
        a=Number(window.prompt("Enter the first number"));
        b=Number(window.prompt("Enter the second number"));
        if (Number.isInteger(a) && Number.isInteger(b)){
        mul(a,b);
        } else {
            console.log("Enter only numeric values!");
        }
    } else if (input=="/"){
        a=Number(window.prompt("Enter the first number"));
        b=Number(window.prompt("Enter the second number"));
        if (Number.isInteger(a) && Number.isInteger(b)){
        div(a,b);
        } else {
            console.log("Enter only numeric values!");
        }
    } else {
        console.log("Unkown operation entered!");
    }
}