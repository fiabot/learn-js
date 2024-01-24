// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
const logMsg = function(){
    console.log(this.errMsg);
} 

const err = {
    errMsg: "YOU HAVE MADE A GRAVE MISTAKE"
}


logMsg.call(err); 