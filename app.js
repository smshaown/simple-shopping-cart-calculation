
// Start
/* document.getElementById('case-plus').addEventListener('click', function () {
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) + 1
})

document.getElementById('case-minus').addEventListener('click', function () {
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) - 1;
})

 */

// function using and second step 2 number niye kaj korche
/* function updateCaseNumber(isIncreasing){
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;

   if(isIncreasing == true){
     caseNumber = parseInt(caseNumber) + 1;
   }
   else if(caseNumber > 0){
    caseNumber = parseInt(caseNumber) - 1;
   }
    caseInput.value  =  caseNumber;

  // update case total
   const caseTotal  = document.getElementById('case-total');
   caseTotal.innerText = caseNumber * 59; 
}

// Handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false);
})
 */










function updateProductNumber (product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

   if(isIncreasing == true){
     productNumber = parseInt(productNumber) + 1;
   }
   else if(caseNumber > 0){
    productNumber = parseInt(productNumber) - 1;
   }
    productInput.value  =  productNumber;

  // update  total
   const productTotal  = document.getElementById(product + '-total');
         productTotal.innerText = productNumber * price; 

}

// Phone increase decrease  
document.getElementById('phone-plus').addEventListener('click', function() {
    updateProductNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, flas)
})


// Handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})

