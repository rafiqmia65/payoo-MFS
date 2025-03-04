document.getElementById("cash-out-section").style.display='none';

document.getElementById("cashout").addEventListener("click",function(){
    toggleButton("add-money-section","none");
    toggleButton("cash-out-section","block");
    toggleButton("tranSection","none");
    toggleButton("transfer-section","none");
    toggleButton("bonus-section","none");
    toggleButton("pay-bill-section","none");
})

document.getElementById("cashout-money-btn").addEventListener("click", function(event){
    event.preventDefault();

    const accountNumber = document.getElementById("cashout-number").value;
    const amount = getInputValueByID("cashout-amount");
    const pin = getInputValueByID("cashout-pin")
    const mainBalance = getInnerTextByID("main-balance");

    if(accountNumber.length === 11 && accountNumber[0]=== "0" && accountNumber[1] === "1" ){
        if(pin===1234){
            const sum = mainBalance - amount;
    
            setInnerTextByIDandValue("main-balance",sum);
            alert("CashOut $ " + amount)

            const tranSectionContainer= document.getElementById("tranSection-container");
            const Bank=document.getElementById("CashOut-bank").value;

            const div = document.createElement("div");

            div.innerHTML=`
                <div class="mb-5 border-b">
                    <h4 class="text-purple-400">${Bank}</h4>
                    <div class="flex justify-between">
                        <p>${accountNumber}</p>
                        <h4 class="text-red-400">$ ${amount} CashOut</h4>
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