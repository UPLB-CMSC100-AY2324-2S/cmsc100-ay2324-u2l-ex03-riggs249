//define two passwords and a username
const pw1 = "NicaDaus20";
const pw2 = "NicaDaus20";
const username = "Riggs";

//function to validate the password
function validatePassword(pw1, pw2){
    //create a copy of the first password for confirmation
    const confirmPW1 = pw1;
    var found = 0;                  //initialize a variable to track whether a specific conditions are met

    //check if the passwords match and if the length of the password is at least 8 characters
    if(confirmPW1 == pw2 && confirmPW1.length >= 8){
        //check if the password contains at least one uppercase letter
        for(let i = 0; i < confirmPW1.length; i++){
            if(confirmPW1.charAt(i) == confirmPW1.toUpperCase().charAt(i) && isNaN(parseInt(confirmPW1.charAt(i)))){
                found = 1;          //set found to 1 if an uppercase letter is found
                break;              //exit the loop as soon as an uppercase letter is found
            }else{
                found = 0;          //reset found to 0 if no uppercase letter is found
            }
        }

        //if an uppercase letter is not found, return false
        if(!found){
            return false;
        }

        //check if the password contains at least one lowercase letter
        for(let i = 0; i < confirmPW1.length; i++){
            if(confirmPW1.charAt(i) == confirmPW1.toLowerCase().charAt(i) && isNaN(parseInt(confirmPW1.charAt(i)))){
                found = 1;          //set found to 1 if a lowercase letter is found
                break;              //exit the loop as soon as a lowercase letter is found
            }else{
                found = 0;          //reset found to 0 if no lowercase letter is found
            }
        }

        //if a lowercase letter is not found, return false
        if(!found){
            return false;
        }
        
        //check if the password contains at least one digit
        for(let i = 0; i < confirmPW1.length; i++){
            if(!isNaN(parseInt(confirmPW1.charAt(i)))){
                found = 1;          //set found to 1 if a digit is found
                break;              //exit the loop as soon as a digit is found
            }else{
                found = 0;          //reset found to 0 if no digit is found
            }
        }

        //if a digit is not found, return false
        if(!found){
            return false;
        }
        //if all conditions are met, return true
        return true;
    }else{
        return false;               //return false if the passwords don't match or if the length is less than 8
    }
}

//funtion to reverse the password
function reversePassword(pw1){
    const tempStr = pw1;            //create a copy of the password
    var reversedPW = [];            //initialize an array to store the reversed password

    //split the password into an array of characters
    tempStrArr = tempStr.split(""); 
    //loop through each characther of the password and store it in reversedPW array in reversed order
    for(let i = 0; i < pw1.length; i++){
        reversedPW[i] = tempStrArr.pop(); //remove the last character from tempStrArr and add it to the reversedPW
    }

    //join the characters of reversedPW array to form the reversed password
    var finalRevPW = reversedPW.join("");

    return finalRevPW;              //return the reversed password
}

//function to store the password
function storePassword(username, pw1, pw2){
    //validate the password
    if(validatePassword(pw1, pw2) == true){
        //if the password is valid, create an object with username and reversed password
        var object = {name: username, newpassword: reversePassword(pw1)};
        return(object);             //return the object
    }else if(pw1.length != pw2.length || pw1 != pw2 ){ 
        console.log("Wrong Password!")                  //print the error message if passwords don't match
    }else if(pw1.length < 8){
        console.log("Insufficient Number of Strings!")  //if password length is less than 8
    }else{
        console.log("Invalid Password!")                //if password is invalid
    }
}

//call the storePassword function to store the password
var user = storePassword(username, pw1, pw2);
console.log(user);      //output the stored user object
