document.getElementById("telegramForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Собираем данные формы
    const name = document.getElementById("name").value;
    const nickname = document.getElementById("nickname").value;
    const purpose = document.querySelector('input[name="purpose"]:checked')?.value || "Не указано";
    const agree = document.getElementById("agree").checked ? "Да" : "Нет";

    // Формируем сообщение
    const message = `
🔥 Новая заявка с формы:
👤 Имя: ${name}
💬 Никнейм: ${nickname}
🎯 Цель: ${purpose}
📜 Согласие продать почку: ${agree}
    `;

    // Настройки Telegram API
    const TOKEN = "1749907475:AAHwE4OCy0-UeGyrS9qWr4yGjO6sjWOmt5k";
    const CHAT_ID = "113740578";
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    // Отправляем данные через fetch
    fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
        }),
    })
        .then((response) => {
            if (response.ok) {
                alert("Сообщение успешно отправлено!");
                document.getElementById("telegramForm").reset(); // Сброс формы
            } else {
                alert("Ошибка при отправке. Попробуйте еще раз.");
            }
        })
        .catch((error) => {
            alert("Ошибка: " + error.message);
        });
});