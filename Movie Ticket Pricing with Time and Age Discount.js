function calculateTicketPrice(age, showTime) {
    const standardPrice = 12;
    let finalPrice = standardPrice;

  
    const matineeTime = 17; 
    if (showTime < matineeTime) {
        finalPrice *= 0.80;
    }

  
    if (age > 60) {
        finalPrice *= 0.70; 
        
    } else if (age < 12) {
        finalPrice *= 0.60; 
    }

    return finalPrice.toFixed(2);
}


let age = 65;
let showTime = 15; 
console.log(calculateTicketPrice(age, showTime)); 
