                                                                                                                                                                                                                                                                                                                                                                                                       
                                                                                                                                                                                                                    
// 
//                                     ___ D_D.      
//                                    /       |
//                                   {___     |
//                                      |     |
//                                     /     /_______________  ____
//                                   /                       \<-\ -\                           
//                                   |                        )  \   \
//                                   |  |-|  |--------|  |-|  |   \  \                                                                          
//                                   |  | |  |        |  | |  |    \ |                                                            
//                                   |  | |  |        |  | |  |     \|        
                                                                                                                                                                             
//                                                                                                                ___ D_D.
//                                                                                                               /       |
//                                                                                                              {___     |
//                                                                                                                 |     |
//                                                                                                                /     /_______________  ____
//                                                                                                              /                       \<-\ -\
//                                                                                                              |                        )  \   \
//                                                                                                              |  |-|  |--------|  |-|  |   \  \                                                                          
//                                                                                                              |  | |  |        |  | |  |    \ |                                                            
//                                                                                                              |  | |  |        |  | |  |     \|                                                                                                            





//------------------------- Setting up shop -------------------------//

const STABLE_MONTHLY_FEE = 2560;
let financialAid = (STABLE_MONTHLY_FEE * 0.20);
let horses = [  ] ;
let welcomeMessage = "Welcome to my stables!! If you see a horse eating souls... He only likes corrupted souls. If you have a pure soul there is nothing to worry about" ; 
let latePaymentFee = (STABLE_MONTHLY_FEE * 0.15);
let numOfStalls = 12;
let numOfEmptyStalls = 12;

//------------------------- First day -------------------------//

function Horse(name,nickname, age, favTreat, isInside, rent, coatPattern, favSong, financialAidEligible) {
    this.name = name;
    this.nickname = nickname;
    this.age = age;
    this.favTreat= favTreat;
    this.isInside = isInside;
    this.rent = rent;
    this.coatPattern = coatPattern;
    this.favSong = favSong;
    this.financialAidEligible = financialAidEligible
    this.intro = function(){
        console.log(`This is ${name}. They are a ${coatPattern}, and they are ${age} years-old.`);
    }  
    this.drawing = function(){
        console.log(`
                                       
 This is ${nickname}                       
       ___ D_D.      
      /  0 0  |
     {___     |
        |     |
       /     /________________   ___
     /                         <-( - )
     |                        )  (   )
     |  |-|  |--------|  |-|  |    (  )                                                                          
     |  | |  |        |  | |  |    ( ) 
     |  | |  |        |  | |  |     (|
        `)
    }
}


const galapagos = new Horse("Galapagos", "Gala", 66, "cats", true, STABLE_MONTHLY_FEE, "Perlino", `"Like Him" by Tyler, The Creator...`, false);
const elLoco = new Horse("ElLoco", "Elo", 98, "people", true, STABLE_MONTHLY_FEE, "Blue Roan", `"White Ferrari" by Frank Ocean`, false);
const pendejo = new Horse("Pendejo", "Joe", 33, "rat poison", true, STABLE_MONTHLY_FEE, "Chocolate Palomino", `"Les" by Childish Gambino`, false);
horses.push(galapagos, elLoco, pendejo)

var salem = {
    name: "Salem",
    nickname: "Ale",
    age: 999,
    favTreat: "souls",
    isInside: true,
    rent: STABLE_MONTHLY_FEE,
    coatPattern: "Murgese",
    favSong: `"Apocalypse" by Cigarettes After Sex`,
    financialAidEligible: true,
    intro : function(){
        console.log(`This is ${salem.name}. They are a ${salem.coatPattern}, and they are ${salem.age} years-old.`);
    } ,
    drawing:  function(){
        console.log(`
                                       
 This is ${salem.nickname}                       
       ___ D_D.      
      /  0 0  |
     {___     |
        |     |
       /     /________________   ___
     /                         <-( - )
     |                        )  (   )
     |  |-|  |--------|  |-|  |    (  )                                                                          
     |  | |  |        |  | |  |    ( ) 
     |  | |  |        |  | |  |     (|
        `)
    }

}
horses.push(salem)

horses.forEach(horse => {
    horse.isHungry = true;
})

//------------------------- Stable roster -------------------------//
// [
//   Horse {
//     name: 'Galapagos',
//     nickname: 'Gala',
//     age: 66,
//     favTreat: 'cats',
//     isInside: true,
//     rent: 2560,
//     coatPattern: 'Perlino',
//     favSong: '"Like Him" by Tyler, The Creator...',
//     intro: [Function (anonymous)],
//     drawing: [Function (anonymous)],
//     isHungry: true,
//     toggleIsInside: [Function: toggleIsInside]
//   },
//   Horse {
//     name: 'ElLoco',
//     nickname: 'Elo',
//     age: 98,
//     favTreat: 'people',
//     isInside: false,
//     rent: 2560,
//     coatPattern: 'Blue Roan',
//     favSong: '"White Ferrari" by Frank Ocean',
//     intro: [Function (anonymous)],
//     drawing: [Function (anonymous)],
//     isHungry: true,
//     toggleIsInside: [Function: toggleIsInside]
//   },
//   Horse {
//     name: 'Pendejo',
//     nickname: 'Joe',
//     age: 33,
//     favTreat: 'rat poison',
//     isInside: false,
//     rent: 2560,
//     coatPattern: 'Chocolate Palomino',
//     favSong: '"Les" by Childish Gambino',
//     intro: [Function (anonymous)],
//     drawing: [Function (anonymous)],
//     isHungry: true,
//     toggleIsInside: [Function: toggleIsInside]
//   },
//   {
//     name: 'Salem',
//     nickname: 'Ale',
//     age: 999,
//     favTreat: 'souls',
//     isInside: true,
//     rent: 2560,
//     coatPattern: 'Murgese',
//     favSong: '"Apocalypse" by Cigarettes After Sex',
//     financialAidEligible: true,
//     intro: [Function: intro],
//     drawing: [Function: drawing],
//     isHungry: true,
//     toggleIsInside: [Function: toggleIsInside]
//   }
// ]

//---------------------- Growing business ----------------------//
numOfEmptyStalls = (numOfStalls - horses.length);



function isThereEnoughStalls (){
    if (numOfEmptyStalls <= 2){console.log("We need to build more stalls 😨")
    }
    else {console.log("We have " + numOfEmptyStalls + " stalls available!! 😄")
    }
}

function calculateHorseDebt ( horseName, numOfMonthsLate){
    let totalOwed;
        if (horseName.financialAidEligible === true){
   totalOwed = (STABLE_MONTHLY_FEE * numOfMonthsLate) + (numOfMonthsLate * latePaymentFee) - financialAid ;
        }
   else { totalOwed = (numOfMonthsLate * latePaymentFee) + (STABLE_MONTHLY_FEE * numOfMonthsLate)

   }

   console.log( `${horseName.name} owes $${totalOwed}`)

}
calculateHorseDebt(elLoco, 20)

function doHorsesLike (treat){
    for (let i = 0; i< horses.length; i++){
        if (horses[i].favTreat !== treat){
            console.log(`${horses[i]["name"]} would rather be a donkey for a day than eat ${treat}`)
        } else {
            console.log(`${horses[i]["name"]} loves ${treat}`)
        }
    }
}


function learnHorseNickname(horseName){
    return `${horseName.name}'s nickname is ${horseName.nickname}`
}
console.log(learnHorseNickname(galapagos))

//------------------------- Day to day operations -------------------------//

function whoGotTheAux (musicController){switch (musicController){
    case galapagos:
        console.log( `${galapagos.nickname} is currently in charge of the music... No wonder why ${galapagos.favSong} has been playing non-stop`)
        break;
    case elLoco:
        console.log(`${elLoco.nickname} is currently in charge of the music, that's the reason why ${elLoco.favSong} has been playing non-stop`)
        break;
    case pendejo:
        console.log(`Looks like ${pendejo.nickname} finally got a hold of the speaker... "${pendejo.favSong}" has been playing non-stop`)
        break;
    case salem:
        console.log(`${salem.nickname} is currently in charge of the music. ${salem.favSong} has been playing non-stop for hours...`)
        break;
    default:
        console.log("Huh... no music? Maybe the speaker finally ran out of battery")
}}
whoGotTheAux(salem)




function moveHorses (timeOfDay){
    if (timeOfDay === "dawn"){
        horses.forEach (horse => {
            if (horse.isInside === true){
                horse.isInside = false;
                console.log(`${horse.name} has been taken outside to spend some time in the sun ☀️`)
            }
        });
    } else if (timeOfDay === "dusk"){
        horses.forEach (horse => {
            if (horse.isInside === false){
                horse.isInside;
                console.log(
                    `${horse.name} has been taken into the stables... Time to sleep 😴`
                )
            }
        });
    } else {
        console.log(`invalid ❌ - pick "dawn" or "dusk"`)
    }
    }
moveHorses("dawn")

horses.forEach( horse => {
    horse.toggleIsInside = function toggleIsInside() {
        if (this.isInside === true){
            this.isInside = false;
            console.log(
                `${this.name} has been moved outside`);
        } else {
            this.isInside = true;
            console.log(`${this.name} has been moved inside`);
        }
    }
})


function feastTime (horses){
    console.log("It's feast time!! 🐈‍⬛ 🕴️ 🐀 ☠️ 👻")
    for (let i = 0; i < horses.length; i++){
        if (horses[i].isInside === false){
        horses[i].isInside = true;
        console.log(`${horses[i].nickname} is now inside`)
        }
        console.log(`${horses[i].nickname} is eating ${horses[i].favTreat}`)
    }
}

feastTime(horses)
// Thank you :)
