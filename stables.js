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
    console.log("Galapagos is inside because he is afraid of the rain")}
     else {console.log(`the horse  outside is not ${horseName} `)}



     // lesson6

     //let word = "Minion"
     //console.log(word.charAt(3));
     //console.log(word.length);

     let horseNames =  ["Galapagos", "Aguacate", "ElLoco"];
     let horseAges = [5, 6, 8];
     let horseLocations = [true, false, false];
     console.log(horseNames.length);
     horseNames.push("Andres")
     console.log(horseNames);
     console.log(horseNames[2])
     horseAges.push(23)
     console.log(horseAges)
     console.log(`oh no,  ${horseNames[3]} has ran away and he is only ${horseAges[3]} years old...`)

    //lab-6
    console.log(`
        There are ${horseNames.length} horses in the stables. We have ${horseNames[0]}, he was named after the Galapagos islands. 
        ${horseNames[1]} is very chill, kind of lazy sometimes.
        ${horseNames[2]}... he's a very peculiar individual. In Spanish, ${horseNames[2]} means "the crazy one" and the name fits him perfectly.
        Last but not least, ${horseNames[3]} was named after my brother, to piss him off... :)`)

        if (isHorseInside === true ) 
            {console.log(`All the horses are currently inside, probably eating`)} 
        else{console.log("I have no idea where the horses are :(")}
    
