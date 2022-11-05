let age;
const gender = 'МУЖ' // жен

age = +age;

if (!isNaN(age)) {
    if (age > 18){
        console.log("Вам больше 18 лет")
        } else if (age < 18){ 
            console.log("Вам меньше 18 лет")
        } else if (age === 18) {
            console.log("Ура, вам 18 лет!") 
        } else
            console.log("Пожалуйста, укажите ваш возраст") 
        } 
    else {
        console.log("Введите корректные данные")      
    }

    
    if (gender.toLocaleLowerCase() === 'муж') {
        console.log("Вам налево")
    }

    if (gender.toLocaleLowerCase() === 'жен') {
        console.log("Вам направо")
    }

    