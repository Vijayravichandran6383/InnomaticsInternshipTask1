function calculateElectricityBill(units, timeOfDay) {
    const normalRates = { 
        below100: 5,
        between100And300: 4,
        above300: 3
    };

    const peakHourCharge = 1.10;
    let rate;
    let totalBill;

    
    if (units <= 100) {
        rate = normalRates.below100;
    } else if (units <= 300) {
        rate = normalRates.between100And300;
    } else {
        rate = normalRates.above300;
    }

   
    if (timeOfDay >= 20 || timeOfDay < 8) { 
        totalBill = units * rate * peakHourCharge;
    } else { 
        totalBill = units * rate;
    }

    return totalBill.toFixed(2);
}


let units = 350;
let timeOfDay = 21; 
console.log(calculateElectricityBill(units, timeOfDay)); 
