var weight = prompt ("enter your weight (kg)");
var height = prompt ("enter your height  (m)");

console.log ("youre BMI is :"  + bmical (weight ,  height ));

function bmical (weight ,  height ) {

var height2  = height ** 2  ;
var bmiCalculator  = weight / height2 ; 


        var bmi = Math.round(bmiCalculator);
    return bmi  ; 
}

