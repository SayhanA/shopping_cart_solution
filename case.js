function updateCaseNumber(isIncrease, caseInputField,caseTotal,singleItemCost){
    const caseNumberField = document.getElementById(caseInputField);
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let increment;
    
    if(isIncrease === true){
        increment = previousCaseNumber + 1 ;
    }
    else if(isIncrease === false && previousCaseNumber > 1){
        increment = previousCaseNumber - 1 ;
    }
    else{
        increment = 0
    }
    caseNumberField.value = increment;
    const perCasePrice = document.getElementById(caseTotal);
    const totalCasePrice = singleItemCost * caseNumberField.value;
    perCasePrice.innerText = totalCasePrice;
    console.log(perCasePrice.innerText);

    const subtotal = document.getElementById('subtotal');
    subtotal.innerText = parseInt(document.getElementById('phone-total').innerText) + parseInt(document.getElementById('case-total').innerText);

    const tax = document.getElementById('tax');
    const text = subtotal.innerText*0.1;
    tax.innerText = text.toFixed(2)

    const total = document.getElementById('total')
    total.innerText = parseFloat(document.getElementById('tax').innerText) + parseInt(document.getElementById('subtotal').innerText) 
    
}
document.getElementById('btn-case-plus').addEventListener('click',function(){
    updateCaseNumber(true,'case-number-field','case-total',59)
})
document.getElementById('btn-case-minus').addEventListener('click',function(){
    updateCaseNumber(false,'case-number-field','case-total',59)
})
document.getElementById('btn-iphone-plus').addEventListener('click',function(){
    updateCaseNumber(true,'phone-number-field','phone-total',1219)
})
document.getElementById('btn-iphone-minus').addEventListener('click',function(){
    updateCaseNumber(false,'phone-number-field','phone-total',1219)
})

