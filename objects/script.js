let  calculator = localStorage.getItem('calculator') || '';

function updateCalculation(value){
    calculator +=value 
    console.log(calculator)
    localStorage.setItem('calculator', calculator)
}