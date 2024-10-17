
let login = 'admin'
switch (login) {
  case 'admin':
    console.log("Привет, администратор!");
    break;

    case 'user':
      console.log("Привет, пользователь!");
      break;

  case '':
    console.log("Введите логин");
    break;

  default:
    console.log("Неверный логин" );
  }



