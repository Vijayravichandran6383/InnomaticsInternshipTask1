function applyCoupon(orderAmount, couponCode) {
    const discount10Threshold = 500;
    const freeShipThreshold = 200;
    const freeShippingCost = 0;
    const standardShippingCost = 10; 
    let finalPrice = orderAmount;

    if (couponCode === "DISCOUNT10" && orderAmount > discount10Threshold) {
        finalPrice *= 0.90;
    } else if (couponCode === "FREESHIP" && orderAmount > freeShipThreshold) {
        return finalPrice; 
    } else if (couponCode === "DISCOUNT10" && orderAmount <= discount10Threshold) {
        return finalPrice + standardShippingCost; 
    }

    return finalPrice + standardShippingCost;
}


let orderAmount = 550;
let couponCode = "DISCOUNT10";
console.log(applyCoupon(orderAmount, couponCode)); 

