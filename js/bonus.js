document.getElementById("bonus-section").style.display='none';

document.getElementById("get-bonus").addEventListener("click",function(){
    toggleButton("add-money-section","none");
    toggleButton("cash-out-section","none");
    toggleButton("tranSection","none");
    toggleButton("transfer-section","none");
    toggleButton("bonus-section","block");
    toggleButton("pay-bill-section","none");
})


document.getElementById("get-bonus-btn").addEventListener("click", function(event){
    event.preventDefault();

    const coupon = document.getElementById("coupon").value;
    const mainBalance = getInnerTextByID("main-balance");

        if(coupon === "rafiq500" || coupon === "rayhan500" || coupon === "rubel500" || coupon === "ridoy500"){

            const sum = mainBalance + 500;
    
            setInnerTextByIDandValue("main-balance",sum);

            alert("You get bonus $ " + 500);

            const tranSectionContainer= document.getElementById("tranSection-container");

            const div = document.createElement("div");

            div.innerHTML=`
                <div class="mb-5 border-b">
                    <h4 class="text-purple-400">Get Bonus</h4>
                    <div class="flex justify-between">
                        <p>Payoo-MFS</p>
                        <h4 class="text-green-400">$ 500 Get Bonus</h4>
                    </div>
                </div>
            `;

            tranSectionContainer.appendChild(div);


        }else{
            alert("Incorrect Coupon Number :")
        }
})