// BMI =WEIGHT (Kg) / (HEIGHT(m)*HEIGHT(m))

// Checkbox to know if want to save the info, name.

// Calculate with the previous 

// Store the previous BMI
const bmiForm = document.getElementById('bmiForm');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const bmiP = document.getElementById('bmiText');
const formElem = document.querySelectorAll('.bmiInput');
const bmiBtn = document.getElementById('submitBtn')
const heightTwo = document.getElementById('heightTwo');
const category = document.getElementById('catSelector');
const weightRange = document.getElementById('weightRange');
const calWeightBtn = document.getElementById('calWeightBtn');
const formWeight = document.getElementById('formWeight');




// function showBMI
function showError(message, component) {
    component.textContent = message;
}

function showMesaje(message, component) {
    component.textContent = message;
}

bmiBtn.addEventListener('click', () => {calcBmi(weightInput.value, heightInput.value)});

formElem.forEach((element, index) => {
    element.addEventListener('keydown', function(event){
        if (event.key === 'Enter') {
            if(formElem.length - 1  === index){
                calcBmi(weightInput.value, heightInput.value)
            } else {
                heightInput.focus(); 
            }
        } else {
            bmiP.textContent = '';
        }
    })
});

function calcBmi(weight, height) {
    console.log(weight, height);
    const bmi =Math.round((weight / (height*height)) * 100) / 100;
    if(weight === '' || height === '') {
        showError('You need to fill the fields' , bmiP)
        return
    } else if(isNaN(bmi)) {
        showError('Only numbers please', bmiP)
        return
    } else {
        showMesaje('Your BMI is ' + bmi, bmiP )
    }
    bmiForm.reset()
    weightInput.focus()
}

const bmiCategories = {
    Underweight: {min:0 , max: 18.5},
    Normal: {min: 18.5, max: 24.9 },
    Overweight: { min: 25, max: 29.9 },
    'Obesity Class I': { min: 30, max: 34.9 },
    'Obesity Class II': { min: 35, max: 39.9 },
    'Obesity Class III': {min:40, max: Number.POSITIVE_INFINITY }
};

calWeightBtn.addEventListener('click', ()=> {
    calWeight(heightTwo.value, category.value)
})


formWeight.addEventListener('submit', function(event){
    event.preventDefault();
    calWeight(heightTwo.value, category.value)
});

function calWeight(height, category) {
    if(height === ''){
        showError('Please fill the height field', weightRange);
    } else if(isNaN(height)){
        showError('Only numbers please', heightTwo);
    } else if (bmiCategories.hasOwnProperty(category)) {
        const minBmi = bmiCategories[category].min;
        const maxBmi = bmiCategories[category].max;
        const maxWeight = Math.round(height * height * maxBmi * 100) / 100;
        const minWeight = Math.round(height * height * minBmi * 100) / 100;
        if(minWeight === 0) {
            showMesaje(maxWeight + 'Kg.', weightRange)
            formWeight.reset()
        } else {
            showMesaje(minWeight + 'Kg' + ' - ' + maxWeight + 'Kg', weightRange)
            formWeight.reset()
        }
    }    
}

