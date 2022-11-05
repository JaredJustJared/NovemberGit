const typeUser = 'adn'; // user, guest, bot  

switch (typeUser) {
    case 'admin':
        console.log('Вы администратор')
        break;
    case 'user':
        console.log('Вы пользователь')
        break;
    case 'guest':
        console.log('Вы гость')
        break;
    case 'bot':
        console.log('Вы бот')
        break;
    default:
        console.log('Неизвестный тип пользователя')
        break;
}