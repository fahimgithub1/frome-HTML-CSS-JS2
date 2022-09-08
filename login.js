let loginfromid = document.querySelector(".login-from");
let singfromid = document.querySelector(".singup-from");
singfromid.style.display = "none";
let isValid = true;

function fromhideshow (){
    if(isValid){
        singfromid.style.display = "none";
        loginfromid.style.display = "block";
        isValid = false;
    }else{
        loginfromid.style.display = "none";
        singfromid.style.display = "block";
        isValid = true;

    }
}
