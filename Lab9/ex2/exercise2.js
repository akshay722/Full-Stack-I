function DisplayMessage(message){
    if (message==null){
        console.log("message is null");
    } else if (message==""){
        console.log("message is empty");
    } else if (message==true){
        console.log(false);
    } else {
        console.log(message);
    }
}