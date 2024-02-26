const pw1 = "NicaDaus20";
const pw2 = "NicaDaus20";
const username = "Riggs";

function validatePassword(pw1, pw2){
    const confirmPW1 = pw1;
    var found = 0;

    if(confirmPW1 == pw2 && confirmPW1.length >= 8){
        for(let i = 0; i < confirmPW1.length; i++){
            if(confirmPW1.charAt(i) == confirmPW1.toUpperCase().charAt(i) && isNaN(parseInt(confirmPW1.charAt(i)))){
                found = 1;
                break;
            }else{
                found = 0;
            }
        }

        if(!found){
            return false;
        }
        for(let i = 0; i < confirmPW1.length; i++){
            if(confirmPW1.charAt(i) == confirmPW1.toLowerCase().charAt(i) && isNaN(parseInt(confirmPW1.charAt(i)))){
                found = 1;
                break;
            }else{
                found = 0;
            }
        }

        if(!found){
            return false;
        }

        for(let i = 0; i < confirmPW1.length; i++){
            if(!isNaN(parseInt(confirmPW1.charAt(i)))){
                found = 1;
                break;
            }else{
                found = 0;
            }
        }

        if(!found){
            return false;
        }
        return true;

    }else{
        return false;
    }
}

function reversePassword(pw1){
    const tempStr = pw1;
    var reversedPW = [];

    tempStrArr = tempStr.split(""); 
    for(let i = 0; i < pw1.length; i++){
        reversedPW[i] = tempStrArr.pop();
    }

    var finalRevPW = reversedPW.join("");
    // console.log(finalRevPW);
    return finalRevPW;
}

function storePassword(username, pw1, pw2){
    
    if(validatePassword(pw1, pw2) == true){
        var object = {name: username, newpassword: reversePassword(pw1)};
        console.log(object);
        return(object);
    }else if(pw1.length != pw2.length || pw1 != pw2 ){
        console.log("Wrong Password!")
    }else if(pw1.length < 8){
        console.log("Insufficient Number of Strings!")
    }else{
        console.log("Invalid Password!")
    }
}

validatePassword(pw1, pw2);
reversePassword(pw1);
storePassword(username, pw1, pw2);