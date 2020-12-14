let numbers = [];
let input;
let total = 0;

do {
    input = prompt('Введите число');
    numbers = Number(input);
    if(input === null){
        break;
    }
    
    for(let i = 0; i < numbers.length; i++){
        let notANumber = Number.isNaN(mainInput);
        if(notANumber === true) {
        continue;
    }
    }
   
    
    console.log(numbers);
    
    total += numbers;
}while(true);
console.log(`Общая сумма чисел равна ${total}`);

















// let total = 0;
// let mainInput ;

// do {
//     let input = prompt('Введите число');
//     if(input === null){
//         break;
//     }
    
//     mainInput = Number(input);
    
//     let notANumber = Number.isNaN(mainInput);
//     if(notANumber === true) {
//         continue;
//     }
//     total += mainInput;
// }while(true);
// alert(`Общая сумма чисел равна ${total}`);



