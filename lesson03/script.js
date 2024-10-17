const checkAge = 18;
if(checkAge < 18) {
    console.log("Доступ запрещен");
}
else if(checkAge >= 18 && checkAge <= 60){
    console.log("Доступ разрешен");
}
else{checkAge > 60
    console.log("Рекомендуем отдых");
}


let number = 1

if (number% 2 == 0) {
    number = true;
  } else {
    number = false;
  }
  console.log(number)



let login = 'admin'

if (login == 'admin') {
  message = 'Привет, администратор!';
} else if (login == 'user') {
  message = 'Привет, пользователь!';
} else if (login == '') {
  message = 'Введите логин';
} else {
  message = 'Неверный логин';
}
console.log(message)





