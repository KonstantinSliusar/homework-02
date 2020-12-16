// const checkForSpam = function (message) {
//     const checkFor = message.toLowerCase();
    
//     console.log(checkFor.includes('sale') || checkFor.includes('spam'));
// }
// checkForSpam('Latest technology news'); 
// checkForSpam('JavaScript weekly newsletter'); 
// checkForSpam('Get best sale offers now!'); 
// checkForSpam('[SPAM] How to earn fast money?');

const checkForSpam = function (message) {
    const checkFor = message.toLowerCase();
    console.log(checkFor.includes('sale') || checkFor.includes('spam'));
    return checkFor;
}


console.log(checkForSpam('Latest technology news')); 
console.log(checkForSpam('JavaScript weekly newsletter')); 
console.log(checkForSpam('Get best sale offers now!')); 
console.log(checkForSpam('[SPAM] How to earn fast money?'));
