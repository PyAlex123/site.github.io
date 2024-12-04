<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Форма с отправкой в Telegram</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Форма отправки в Telegram</h1>
        <form id="telegramForm">
            <label for="name">Имя</label>
            <input type="text" id="name" placeholder="Введите ваше имя">
            <p></p>
            <label for="nickname">Никнейм</label>
            <input type="text" id="nickname" placeholder="Введите ваш никнейм">
            <p></p>
            <label for="purpose">С какой целью хотите создавать контент?</label>
            <p></p>
            <label>
                <input type="radio" name="purpose" value="Хочу клиентов в свой бизнес"> Хочу клиентов в свой бизнес
            </label>
            <p></p>
            <label>
                <input type="radio" name="purpose" value="Хочу быть блогером и зарабатывать на продаже рекламы"> Хочу быть блогером и зарабатывать на продаже рекламы
            </label>
            <p></p>
            <label>
                <input type="checkbox" id="agree" value="Согласен продать почку"> Я согласен продать почку
            </label>
            <p></p>
            <input type="submit" class="submit-btn" value="Отправить">
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>
