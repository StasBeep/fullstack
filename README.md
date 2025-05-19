# fullstack

> Frontend & Backend в связке (API + асинхронный запрос с сервера)

- [Запуск данного проекта](#Запуск-данного-проекта)
- [Настройка сервера backend c нуля](#Настройка-сервера-backend-c-нуля)
- [Настройка сервера frontend c нуля](#Настройка-сервера-frontend-c-нуля)
- [Настройка api для изменения данных в базе данных](#Настройка-api-для-изменения-данных-в-базе-данных)

## Запуск данного проекта

1. Заходим в папку backend

```cmd
    cd fullstack-backend
```

2. Устанавливаем зависимости

```cmd
    npm i
```

3. Запускаем сервер backend

```cmd
    npm run start
```

4. Открываем новый терминал заходим в папку frontend

```cmd
    cd fullstack-frontend
```

5. Устанавливаем зависимости

```cmd
    npm i
```

6. Запускаем сервер frontend

```cmd
    npm run start
```

## Настройка сервера backend c нуля

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

## Настройка сервера frontend c нуля

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

Для запуска сервера frontend:

1. Перейти в папку frontend (в моём случае fullstack-frontend) `cd fullstack-frontend`
2. Ввести команду

```cmd
npm i
```

3. Запуск сервера frontend

```cmd
npm run start
```

##Настройка api для изменения данных в базе данных
Для изменения данных по параметру id добавляем в сервер backend строки

```JavaScript
app.use(express.json()); // работа с данными передаваемые с фронта

app.put('/api/data/:id', (req, res) => {
	const id = req.params.id;
	const updatedData = req.body; //! Не сработает без - app.use(express.json());

	if (data.id !== parseInt(id)) {
		return res.status(404).send("Data not found");
	}

	data = { ...data, ...updatedData }; // изменение данных на сервере

	res.json(data); // возврат данных на ответ
});
```

Запрос на изменение данных по кнопке со стороны frontend

```JavaScript
const [data, setData] = React.useState<dataDto>(); // dataDto тип передаваемых / получаемых данных

const changeData = () => {
  let localData = data ? data : { id: 2, age: 30, name: 'Stas' };

  localData.name = 'Stas';
  localData.age = 31;

  if (localData.id) {
    putDataId(localData.id, localData)
      .then(response => {
        setData(response.data)
      })
      .catch(e => console.log(e));
  }
}

return <Box
  sx={{
    width: '900px',
    m: '0 auto'
  }}
  >
    <ul>
      <li>id: {data?.id}</li>
      <li>name: {data?.name}</li>
      <li>age: {data?.age}</li>
    </ul>
    <Button
      onClick={changeData}
      variant='contained'
      color='error'
    >
      Изменить данные
    </Button>
  </Box>
```
