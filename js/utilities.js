function getInputValueByID(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function getInnerTextByID(id){
    const value= document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function setInnerTextByIDandValue(id,value){
    document.getElementById(id).innerText=value;
}


// All Button Box Toggle

function toggleButton(id,stats){
    document.getElementById(id).style.display=stats;
}