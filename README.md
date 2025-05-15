# fullstack

Frontend & Backend в связке (API + асинхронный запрос с сервера)

Создаём `package.json` в корне репозитория

```cmd
npm init -y
```

Переносим `package.json` в новую папку с работой backend. В моём случае это папка `fullstack-backend`

Устанавливаем пакет `express` в `package.json` бека, для работы сервера

```cmd
npm i express
```

<span style='color: red'>!ВНИМАНИЕ!</span>

Добавьте `.gitignore` в корень репозитория, чтобы он отрабатывал на папки frontend и backend

Заполните файл `index.js` в папке бека

```js
const express = require("express"); // экземпляр для запуска пакетов сервера

// назначение порта для сервера (нельзя использовать 3000 порт, так как он используется для frontend)
const PORT = process.env.PORT || 3001;

// запуск приложения локального сервера
const app = express();

// слушатель app-приложения сервера
app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});
```

Изменить `package.json` в разделе `scripts` для запуска

```json
...
"scripts": {
    "start": "node index.js"
},
...
```

Запускаем сервер командой

```cmd
npm run start
```

Обратите внимание, что отработки данной команды вы должны находиться в папке бека `cd fullstack-backend`

Правильный запуск backend-сервера выглядит:

<img src='./img/completed-start-back-server.png' alt='success start server' />

Дописываем get-запрос для сервера в index.js

```js
app.get("/api", (req, res) => {
  res.json({
    message: "Hello from backend server",
  });
});
```

Перезапускаем сервер бека и вводим в любом браузере http://localhost:3001/**запрос**

В нашем случае http://localhost:3001/api выдаёт результат:

```json
{ "message": "Hello from backend server" }
```

Для создания приложения frontend-приложения запустите:

```cmd
npx create-react-app fullstack-frontend
```

либо скопируйте готовый шаблон реакта

Заходим в `package.json` фронта и дописываем:

```json
"proxy": "http://localhost:3001"
```

строка обозначает где находится ссылка на сервер бека

Далее настраиваем axios для работы api

Смотрим папку api в frontend-папке и файл `.env`

Для запроса:

```tsx
useEffect(() => {
  getCommon().then((response) => {
    console.log(response);
  });
}, []);
```

Запрос через `axios` не сработает из-за `cors`, нужно отключить cors в браузере и пользоваться

Для отключения `cors` надо в ярлыке браузере Google через свойство в поле `объект` вставить после расположения строки:

```
--disable-web-security --user-data-dir="C:\Users\ndecarteret121\AppData\Local\Google\Chrome\Testing"
```

Снятие защиты с браузера (перевод в тестовый режим)

Смотрим файл `MainPage.tsx` для работы с вытаскиванием данных с сервера