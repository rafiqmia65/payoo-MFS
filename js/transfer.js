document.getElementById("transfer-section").style.display='none';

document.getElementById("transfer-money").addEventListener("click",function(){
    toggleButton("add-money-section","none");
    toggleButton("cash-out-section","none");
    toggleButton("tranSection","none");
    toggleButton("transfer-section","block");
    toggleButton("bonus-section","none");
    toggleButton("pay-bill-section","none");
})

document.getElementById("transfer-money-btn").addEventListener("click", function(event){
    event.preventDefault();

    const accountNumber = document.getElementById("transfer-number").value;
    const amount = getInputValueByID("transfer-amount");
    const pin = getInputValueByID("transfer-pin")
    const mainBalance = getInnerTextByID("main-balance");

    if(accountNumber.length === 11 && accountNumber[0]=== "0" && accountNumber[1] === "1" ){
        if(pin===1234){
            const sum = mainBalance - amount;
    
            setInnerTextByIDandValue("main-balance",sum);
            alert("Transfer Money $ " + amount)

            const tranSectionContainer= document.getElementById("tranSection-container");
            const Bank=document.getElementById("transfer-bank").value;

            const div = document.createElement("div");

            div.innerHTML=`
                <div class="mb-5 border-b">
                    <h4 class="text-purple-400">${Bank}</h4>
                    <div class="flex justify-between">
                        <p>${accountNumber}</p>
                        <h4 class="text-red-400">$ ${amount} Transfer Money</h4>
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