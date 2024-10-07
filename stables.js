//LESSON-3 code
let horseName = "Aguacate";
console.log(horseName);
horseName = "Aguacate";
console.log(horseName)

let horseAge = 5;
console.log(horseAge);

//let isHorseInside = true;
//console.log(isHorseInside)
  
//LESSON-4 code
console.log(typeof fakeVariable)
const STABLE_MONTHLY_FEE = 2560; //it is good pracice to write constants in ALL CAPS
console.log(STABLE_MONTHLY_FEE); 

console.log(STABLE_MONTHLY_FEE * 3);
console.log("hi" + " there")
console.log("hi" + 2)//this is type coercion
console.log(horseAge / 34) //remember horseAge=5
console.log(true + 4)//true=1 and false=0
console.log(STABLE_MONTHLY_FEE + " is the stable's monthly fee, and for 3 months it would be " + (STABLE_MONTHLY_FEE * 3 - 20))
let boardPrice = 230
console.log(`My horse's name is "${horseName}" and it costs $${boardPrice} to ride him"`)

//LAB LESSON 4
let horseNickname = "Aguita"
console.log(`My horse's name is "${horseName}" and his nickname is "${horseNickname}"`);
console.log(`The 3 month stay at Esteban's stables gives you a 10% discount, so you get to save ` + "$" + ((STABLE_MONTHLY_FEE * 3)*0.1));

//lesson-5_code
if ( horseName === "Aguacate"){
    console.log(`Aguacate's nickname is ${horseNickname}`)        
    } else if (horseName === false) {
    console.log(`it is a random wild horse`)        
        
    } else {console.log("is it even a horse?")}
        //"if" will run when True. "else if" will run when False. "else" will run when is isn't True nor False.

horseName = "Galapagos"
if(horseName === "Galapagos") {console.log("The horse was named after the Galapagos Islands")} 
else if (horseName === "Aguacate") {console.log("the horse does not have a name yet")}
    //becuase horseName === Galapagos, line 42 will run and line 43 will not run.

if( horseName === "Galapagos" && horseAge === 5){
    console.log(`he is young and full of energy`)
}


//when "&&" both statements have to be true

//lab5a

let isHorseInside = true;
if (horseName === "Galapagos" && isHorseInside !== false){
    console.log("Galapagos is inside because he is afraid of the rain")
} else {console.log(`the horse outside is not ${horseName} `)}

