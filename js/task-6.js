let input;
const numbers = [];
let total = 0;
while(input !== null) {
    input = prompt('Введите значение');
    if(input === null) {
        for(let i = 0; numbers.length > i; i++) {
            total += parseInt(numbers[i]);
        }
        console.log('Отменено пользователем!');
        alert(total)
        break;
    }
    else if(isNaN(input)) {
        console.log(`Введено ${input}`);
        continue;
    };
    numbers.push(input)
};

