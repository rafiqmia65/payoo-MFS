document.getElementById("add-money").addEventListener("click",function(){
    toggleButton("add-money-section","block");
    toggleButton("cash-out-section","none");
    toggleButton("tranSection","none");
    toggleButton("transfer-section","none");
    toggleButton("bonus-section","none");
    toggleButton("pay-bill-section","none");
})

document.getElementById("add-money-btn").addEventListener("click", function(event){
    event.preventDefault();

    const accountNumber = document.getElementById("add-money-number").value;
    const amount = getInputValueByID("add-amount");
    const pin = getInputValueByID("add-login-pin")
    const mainBalance = getInnerTextByID("main-balance");
    

    if(accountNumber.length === 11 && accountNumber[0]=== "0" && accountNumber[1] === "1" ){
        if(pin===1234){
            const sum = mainBalance + amount;
            // document.getElementById("main-balance").innerText = sum;
            setInnerTextByIDandValue("main-balance",sum);
            alert("Added $ " + amount)

            const tranSectionContainer= document.getElementById("tranSection-container");
            const Bank=document.getElementById("added-Bank").value;

            const div = document.createElement("div");

            div.innerHTML=`
                <div class="mb-5 border-b">
                    <h4 class="text-purple-400">${Bank}</h4>
                    <div class="flex justify-between">
                        <p>${accountNumber}</p>
                        <h4 class="text-green-400">$ ${amount} Added</h4>
                    </div>
                </div>
            `;

            tranSectionContainer.appendChild(div);

        }else{
            alert("Incorrect Pin Number :")
        }
    }else{
        alert("Please Enter Valid Number :")
    }
})