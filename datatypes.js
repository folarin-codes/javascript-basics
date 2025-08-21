
// DATA TYPES..

// WE HAVE 2 DATA TYPES

// 1) Primitive data type
// 2) Reference data type


// 5 TYPES OF PRIMITITIVE DATA TYPE

// 1) Strings
// 2) Numbers 
// 3) Boolean

// 4) undefined
// 5) null
// 6) symbols


// Strings

// Anything inside of a quote either single quote (''), or double ("") is a string.

// eg

let firstName = "Adefolarin"
let surname = 'Orji'

let bestColor = 'red'
let gender = 'male'
let bills = '2000000' 


// Numbers 

let cgpa = 4.98;
let accounBalance = -20000

// Boolean 

let isMarried = false; 
let isMale = true;


// Operations on Strings

// Concatenation

let ladyFirstName = 'Chioma'

let ladySurname = 'Rowland'

// she got married

ladySurname = 'Adeleke'

let martialStatus = false

let ladyFullName = ladyFirstName + " " + ladySurname

martialStatus = true


// console.log(ladyFullName)



// OPERATIONS ON NUMBER

// ADD (+) , SUBTRACT (-) , MUTLIPLY (*) , DIVIDE (/) , GET REMAINDER (%)

// console.log(Math.sqrt())


// OPERATIONS ON BOOLEAN

let age = 30;
let legalAge = 18
// console.log(age < legalAge)



// LOGICAL OPERATORS

// COMPARISON , AND , OR , NOT


let bolaAge = 40;
let bimpeAge = "40";

// console.log( bolaAge == bimpeAge)
// console.log( bolaAge === bimpeAge)

// greater than (>) less than (<) , greater or equals to (>=) , less than or equals to (<=) 

const LEGALAGE = 18;

bimpeAge = 18;



// console.log('Can bimple vote? ', bimpeAge >= LEGALAGE)

// LOGIC GATE (AND, OR , NOT)

// AND GATE (&&)

// z will be true , if both x and y is true


// console.log("------ AND OPERATOR --------")


let x = true
let y = true
let a = false
let b = false



// console.log(true && true)
// console.log(true && false)
// console.log(false && false)

// console.log('z = ', x && y)
// console.log('z = ', x && a)
// console.log('z = ', a && b)



// console.log('z = ', bimpeAge >= LEGALAGE && bolaAge >= LEGALAGE && true && false && true && true)





// OR GATE (||)

// Z will be true , if any of x and y is true

// console.log("------ OR OPERATOR --------")


// console.log(true || true)
// console.log(true || false)
// console.log(false || false)

// console.log(true || false || false || false)

// NOT GATE (!)

// it negates a boolean value


// console.log("------ NOT OPERATOR --------")

// console.log(true)
// console.log(false)
// console.log(!true)
// console.log(!false)


// console.log(5 > 2)

// console.log(! 5>2)

// console.log(!! 5>2)

// console.log((! 5 > 2))


// console.log(! (! 5 > 2))
// console.log(!! 5>2)
// console.log(-4 * -2)



// Reference data type

// 1) Arrays 2) Objects


let agesArray = [6 , 7, 9 , 10 , 10, 345, 74748, 'ada', 'bola', 'bimpe', false, true,]

let folaObj = {
    name : 'Adefolarin',
    age : 30,
    sex : 'male',
    favColor: 'red',
    club : 'lIVERPOOL'
}


// almost everything in javascript is an object!!!!

// console.log('ages array ', agesArray)


let fruitArray = ['apple', 'orange', 'banana', 'pear', 'coconut']

// console.log('items in this array ', fruitArray)
// fruitArray.pop()
// fruitArray.shift()
// fruitArray.push("Strawberry")
// fruitArray.unshift("Papaya")
// console.log('items in this array ', fruitArray[0])
// console.log('Number of fruits in my array ', fruitArray.length)
// console.log( 'last item ', fruitArray[fruitArray.length-1])


// console.log(fruitArray[fruitArray.length-1])

fruitArray.map((fruit, i)=>{

    // console.log(i +1 , ":" , fruit)

})








// Objects


console.log("------ OBJECTS --------")


//  let Array = {
//     length : 20,
//     pop : function(){

//     }
//  }



let folarinObject = {

    firstName : 'Adefolarin',
    age : 30,
    sex : 'male',
    occupation : "Mobile Developer / Instructor",
    club : "Liverpool FC",
    isMarried : false,
    hobbies : ['playing basketball', "reading", 'travelling'],
    introduction : function(){

        console.log('my name is ', folarinObject.firstName, ' I am ', folarinObject.age, ' and I am a ', folarinObject.occupation)

    }

} 

// console.log(folarinObject.firstName, folarinObject.age, folarinObject['isMarried'])

folarinObject.favColor = 'red';
folarinObject['favDish'] = 'Pounded yam'

// delete folarinObject.hobbies

// console.log(folarinObject.hobbies)

folarinObject.introduction()




// fruitArray.length 


// console.log('adefolarin'.toUpperCase(), 'adefolarin'.length)



// const String = {
//     length : 10,
//     toUpperCase : function(){
        
//     }
// }
// fav_sport=['basketball','soccer','tennis','handball']
// fav_people=['Emeka','Faithfulness']