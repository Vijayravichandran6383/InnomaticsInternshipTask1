function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    const plans = {
        Basic: 20,
        Premium: 50,
        VIP: 80
    };
    
    if (planType === "Basic" && !wantsTrainer && !wantsDietPlan) {
        return "Basic Plan - $20/month";
    } else if (planType === "Premium" || (planType === "Basic" && wantsTrainer && !wantsDietPlan)) {
        return "Premium Plan - $50/month";
    } else if (planType === "VIP" || (planType !== "VIP" && wantsDietPlan)) {
        return "VIP Plan - $80/month";
    } else {
        return "Invalid plan type or preferences provided.";
    }
}


let planType = "Basic";
let wantsTrainer = true;
let wantsDietPlan = false;
console.log(choosePlan(planType, wantsTrainer, wantsDietPlan)); 
