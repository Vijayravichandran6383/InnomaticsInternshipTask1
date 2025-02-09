function isEligibleForJob(age, experience, qualification) {
    const minAge = 21;
    const maxAge = 55;
    const minExperience = 2;
    const requiredQualification = "Bachelor's Degree";

    if (age >= minAge && age <= maxAge && experience >= minExperience && qualification === requiredQualification) {
        return true;
    } else {
        return false;
    }
}


let age = 30;
let experience = 3;
let qualification = "Bachelor's Degree";
console.log(isEligibleForJob(age, experience, qualification)); 
