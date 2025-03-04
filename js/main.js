document.getElementById("cash-out-section").style.display = "none";

document.getElementById("add-money").addEventListener("click", function(){
    document.getElementById("add-money-section").style.display = "block";
    document.getElementById("cash-out-section").style.display = "none";
})

document.getElementById("cashout").addEventListener("click", function(){
    document.getElementById("add-money-section").style.display = "none";
    document.getElementById("cash-out-section").style.display = "block";
})


document.getElementById("add-money-btn").addEventListener("click",function(event){
    event.preventDefault();
    const loginNumber = document.getElementById("login-number").value;
    const amount = parseFloat(document.getElementById("add-amount").value);
    const loginPin = parseInt(document.getElementById("login-pin").value);
    const mainBalance = parseFloat(document.getElementById("main-balance").innerText);

    if(loginNumber.length === 11 && loginNumber[0] === "0" && loginNumber[1] === "1"){
        if(loginPin === 1234){
            const sum=mainBalance + amount;
            document.getElementById("main-balance").innerText = sum;
            alert("Current Balance "+ sum);
        }else{
            alert("Incorrect Pin Number")
        }
    }else{
        alert("Incorrect Number");
    }
})
