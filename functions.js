// ---- Functions ---- //


// let number1 = 8;

// let number2 = 10;


// let number3 = 20

// let number4 = 25;

// console.log(number1 + number2)


// console.log(number3 + number4)



// ---- ANATOMY OF A FUNCTION -----

// function subtraction (num1 , num2){

// console.log(num1 - num2)



// }

// subtraction(10 , 5)


// function sumOfTwoNumber(){

//     console.log('sum of two number from a function', number1 + number2)

// }


// sumOfTwoNumber()


function addition (num1 , num2){

    console.log('this is from the addition function', num1 + num2)


}


// addition(5, 10)
// addition(10, 25)
// addition(50 , 100)




const dorisObj = {

    name :'Doris',
    age : 25,
    sex :'female',
    nationality : "Nigerian",
    futureCareer : 'Mobile Developer',
    weight : 80,
    height : 1.76784

}

const georgeObj = {

    name :'George',
    age : 20,
    sex :'male',
    nationality : "Nigerian",
    futureCareer : 'Tech Bro',
    weight: 90,
    height: 1.8288

}

const tosinObj = {

    name :'Tosin',
    age : 35,
    sex :'female',
    nationality : "American",
    futureCareer : 'Doctor',
    weight : 50,
    height : 1.64592

}


const winnerObj = {

    name :'Winner',
    age : 30,
    sex :'male',
    nationality : "Kenyan",
    futureCareer : 'Footballer',
    weight: 120,
    height : 1.79832

}


function introduction(personObject){

    console.log('My name is ', personObject.name, ', I am ', personObject.age, ', I am a ', personObject.nationality,',  and I want to be a professional ', personObject.futureCareer)

    console.log('I was born in the year ',2025-personObject.age)

}


function calculateBMIAndDetermineWeightCategory(personObject){

    let BMI = personObject.weight / (personObject.height * personObject.height)

    if(BMI > 30){
        console.log(personObject.name , 'has a BMI value of,', BMI, 'and is obese')
    }
    else if(BMI >= 25 && BMI <=30 ){

        console.log(personObject.name , 'has a BMI value of, ', BMI, 'and is overweight')


    }
    else if(BMI >= 18.5 && BMI < 25){

        console.log(personObject.name , 'has a BMI value of,', BMI, ' is normal weight')

    }
    else{

        console.log(personObject.name , 'has a BMI value of,', BMI, ' is underweight')

    }



}


// To calculate Body Mass Index (BMI), you divide your weight in kilograms by the square of your height in meters. The formula is: BMI = weight (kg) / height (m²).


// You can calculate your BMI. If it is less than 18.5 you are underweight, if it is between 18.5 and 25 you are normal weight. If is between 25 and 30 you are overweight. If you are above 30 you are obese.


// introduction(dorisObj)
// introduction(georgeObj)
// introduction(winnerObj)
// introduction(tosinObj)



// calculateBMIAndDetermineWeightCategory(dorisObj)
// calculateBMIAndDetermineWeightCategory(georgeObj)
// calculateBMIAndDetermineWeightCategory(winnerObj)
// calculateBMIAndDetermineWeightCategory(tosinObj)



// RETURN A FUNCTION


function convertCelciusToKelvin(temp){

    let newTemp = temp + 275;

    return newTemp;

    console.log('This code wont be evaluated because it is below the return statement')
 

}


let newValue = convertCelciusToKelvin(30);

console.log('new temperature value ', newValue)


console.log(convertCelciusToKelvin(60))

