
document.getElementById('calculate-btn').addEventListener('click',function(){
   
    const income = document.getElementById('income-input').value
    const incomeFloat = parseFloat(income)
    const food = document.getElementById('food-input').value
    const rent = document.getElementById('rent-input').value
    const clothes = document.getElementById('clothes-input').value 

    // const myIncomefloat = parseFloat(myIncomeValue)
 

    if(income < 0 || food < 0 || rent < 0 || clothes < 0 ){
        alert('please ensure the number possitive that you entered !!')
    
    }
    else{
        const foodInput = document.getElementById('food-input').value
        const rentInput = document.getElementById('rent-input').value
        const clothesInput = document.getElementById('clothes-input').value

        const allExpenses = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput)
    
    
    // totalExpenses
    const totalExpenses = document.getElementById('total-expences')
    const totalExpensesText = totalExpenses.innerText
    totalExpenses.innerText = allExpenses
 
  

   //    income
   const myIncome = document.getElementById('income-input').value
   const myIncomeFloat = parseFloat(myIncome)
   const totalIncome = myIncomeFloat
  

   // Balance

   const balance = document.getElementById('balance')
   const balancetext = balance.innerText
   balance.innerText = totalIncome - parseFloat( totalExpenses.innerText)
   
 
    }


    
})

// save section

document.getElementById('save-button').addEventListener('click',function(){
//    error function document----------------------
    const myIncome = document.getElementById('income-input').value
    const myIncomeFloat = parseFloat(myIncome)
    const totalIncome = myIncomeFloat

    const saveInput = document.getElementById('save-input').value 
    const saveInputFloat = parseFloat(saveInput)
    
    const savingAmmount = document.getElementById('saving-ammout')
     const savingAmmountText = savingAmmount.innerText
     const savingAmmountFloat = parseFloat(savingAmmountText)
     savingAmmount.innerText = (totalIncome/100)*saveInputFloat

     const previousBalance = document.getElementById('balance')
    const previousBalanceText =previousBalance.innerText
    const previousBalanceFloat = parseFloat(previousBalanceText)
    
    // error fucntion document end------------------------
    
    if(previousBalanceFloat < savingAmmount.innerText){
        alert('You have not sufficient balance to save')
    }
    else{   
        const saveInput = document.getElementById('save-input').value 
    const saveInputFloat = parseFloat(saveInput)
 
 
     const myIncome = document.getElementById('income-input').value
     const myIncomeFloat = parseFloat(myIncome)
     const totalIncome = myIncomeFloat
 
     const savingAmmount = document.getElementById('saving-ammout')
     const savingAmmountText = savingAmmount.innerText
     const savingAmmountFloat = parseFloat(savingAmmountText)
     savingAmmount.innerText = (totalIncome/100)*saveInputFloat
 //  console.log(savingAmmount.innerText)
     //remaining balance
    const previousBalance = document.getElementById('balance')
    const previousBalanceText =previousBalance.innerText
    const previousBalanceFloat = parseFloat(previousBalanceText)
 //   console.log(previousBalanceFloat) 
 
   const remainingAmmount = document.getElementById('remaining-balance')
   const remainingAmmountText = remainingAmmount.innerText
   const finalAmmount = previousBalanceFloat - parseFloat( savingAmmount.innerText)
   remainingAmmount.innerText = finalAmmount
    }
 })