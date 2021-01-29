var d = window.prompt("Input the First integer");
var e = window.prompt("Input the Second integer");
if (Number(d)>Number(e)){
    console.log("The larger of "+ d +" and "+ e +" is "+ d);
} else if (Number(e)>Number(d)){
    console.log("The larger of "+ d +" and "+ e +" is "+ e);
} else{
    console.log("Both inputs are equal to each other")
}