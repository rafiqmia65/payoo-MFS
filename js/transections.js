document.getElementById("tranSection").style.display='none';

document.getElementById("transactions").addEventListener("click",function(){
    toggleButton("add-money-section","none");
    toggleButton("cash-out-section","none");
    toggleButton("tranSection","block");
    toggleButton("transfer-section","none");
    toggleButton("bonus-section","none");
    toggleButton("pay-bill-section","none");
})