document.getElementById('calculate-btn').addEventListener('click',function(){
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
   
 
})
