function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    const baseFare = 300;
    let additionalCharges = 0;

   
    if (classType === "Business") {
        additionalCharges += 200;
    } else if (classType === "First") {
        additionalCharges += 500;
    }

    
    if (luggageWeight > 20) {
        additionalCharges += Math.ceil((luggageWeight - 20) / 10) * 50;
    }

    
    let totalFare = baseFare + additionalCharges;

    
    if (isStudent) {
        totalFare *= 0.85; 
    } else if (isSenior) {
        totalFare *= 0.90; 
    }

    return totalFare.toFixed(2);
}


let classType = "Business";
let luggageWeight = 25;
let isStudent = true;
let isSenior = false;
console.log(calculateFlightFare(classType, luggageWeight, isStudent, isSenior)); 
