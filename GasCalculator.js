function gasCalulator(odo1, odo2){
    const milesDriven = odo2 - odo1;
    const gasPrice = milesDriven * .15;

    return gasPrice;
}

const trip = gasCalulator(500, 1000);

console.log("$" + trip);

//Bonus 
function gasCalulator(odo1, odo2){
    const milesDriven = odo2 - odo1;
    const gasPrice = milesDriven * 3.64;

    return gasPrice;
}

const trip2 = gasCalulator(2, 30);

console.log("$" + trip2);