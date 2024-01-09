// BMI =WEIGHT (Kg) / (HEIGHT(m)*HEIGHT(m))

// Checkbox to know if want to save the info, name.

// Calculate with the previous 

// Store the previous BMI
const bmiForm = document.getElementById('bmiForm');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const bmiP = document.getElementById('bmiText');


bmiForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const weight = weightInput.value;
    const height = heightInput.value;
    const bmi = Math.round((weight / (height * height)) * 100) / 100;

    if (weight === '' || height === '') {
        showError('Should complete both fields to know your BMI.');
        return;
    } else if (!/^\d+$/.test(weight) || !/^\d+$/.test(height)) {
        showError('Only numbers, please.');
        return;
    }

    showBMI('Your BMI is: ' + bmi);
});

function showError(message) {
    bmiP.textContent = message;
    bmiP.style.color = 'red';
    bmiP.style.opacity = '0';
    bmiP.style.transition = 'opacity 0.5s ease'; // Transition for color change
}

function showBMI(message) {
    bmiP.textContent = message;
    bmiP.style.color = 'green';
    bmiP.style.opacity = '0';
    bmiP.style.transition = 'opacity 0.5s ease'; // Transition for color change
}
/* 
function getRange(bmi) {
    if(bmi < 18.5) {
        console.log('Underweight(BMI below 18.5).| Your BMI is: ' + bmi);
    } else if (bmi < 25) {
        console.log('Normal(BMI 18.5-24.9).| Your BMI is: ' + bmi);
    } else if(bmi < 30) {     
        console.log('Overweight(BMI 25-29.9).| Your BMI is: ' + bmi);
    }else if(bmi < 35){
        console.log('Obesity class I(BMI 30-34.9).| Your BMI is: ' + bmi);
    }else if(bmi < 40) {
        console.log('Obeseity class II(BMI 35-39.9).| Your BMI is: ' + bmi);
    }else {
        console.log('Obeseity class III(BMI biger than 40). | Your BMI is: ' + bmi)
    }   
} */

/* 
function getBmi(weight, height) {
    const bmi = weight / (height * height);      
    getRange(bmi)
};

getBmi(69, 1.73);
 */



