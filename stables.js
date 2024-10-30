const STABLE_MONTHLY_FEE = 2560; //it is good practice to write constants in ALL CAPS


// Horses info
 let horseNames =  ["Galapagos","Aguacate","ElLoco"];
 let horseNicknames = ["Gus", "Aguita", "Elo"];
 let horseAges = [5, 6, 8];
 let areHorsesInside = [ false, true, false];


 let stableInto= `Welcome to "${horseNames[0]}'s" stable`
 let horseIntro= `There are` + horseNames.length + `in my stables, their names are "${horseNames[0]}", "${horseNames[1]}", and "${horseNames[2]}".`

function horseLocations(horse) {
    if (areHorsesInside[horse]) {
        return " is inside.";
    }
        return " is outside."
}

    console.log(`
        There are ${horseNames.length} horses in the stables. We have ${horseNames[0]}, he was named after the Galapagos islands. 
        ${horseNames[1]} is very chill, kind of lazy sometimes.
        ${horseNames[2]}... he's a very peculiar individual. In Spanish, ${horseNames[2]} means "the crazy one" and the name fits him perfectly.
        Last but not least, ${horseNames[3]} was named after my brother, to piss him off... :)`)

        