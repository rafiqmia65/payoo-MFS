document.getElementById("login-btn").addEventListener("click",function(event){
    event.preventDefault();

    const loginNumber = document.getElementById("login-number").value;
    const loginPin = document.getElementById("login-pin").value;
    const convertedPin = parseInt(loginPin) 
    
    if(loginNumber.length === 11 && loginNumber[0] === "0" && loginNumber[1] === "1"){
        if(convertedPin === 1234){
            window.location.href="../home.html"
        }else{
            alert("Pin Incorrect");
        }
    }else{
        alert("Number Incorrect");
    }
})