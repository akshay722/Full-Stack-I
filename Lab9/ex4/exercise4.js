function addNumbers(a,b){
    console.log("Adding two numbers "+ a +" and "+ b);
    console.log("The sum is "+ (a+b))
}

function subtractNumbers(a,b){
    console.log("Subtracting two numbers "+ a +" and "+ b);
    console.log("The difference is "+ (a-b))
}

function userPrompt(){
    input=window.prompt("Would you like to add or subtract?");

    if (input=="add"){
        a=window.prompt("Enter the first number");
        b=window.prompt("Enter the second number");
        addNumbers(parseInt(a),parseInt(b));
    } else if (input=="subtract"){
        a=window.prompt("Enter the first number");
        b=window.prompt("Enter the second number");
        subtractNumbers(parseInt(a),parseInt(b));
    } else {
        console.log("Unkown operation entered!");
    }
}