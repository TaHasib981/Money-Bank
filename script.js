document.getElementById('calculate-btn').addEventListener('click',function(){
    const foodInput = document.getElementById('food-input').value
    const rentInput = document.getElementById('rent-input').value
    const clothesInput = document.getElementById('clothes-input').value

    const totalExpenses = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput)
    
   

})