# trb_tst

Консольное приложение на node.js, которое запускается из консоли.
По каждому пункту оно принимает параметр командной строки и выполняет соответствующий пункт.

В качестве СУБД используется PostgreSQL.

### Перед началом работы необходимо

Произвести установку зависимостей:

```
npm install
```

Создать базу данных, с которой будет производиться работа, и файл .env, который должен содержать переменные окружения:
- HOST
- PGUSER
- PGPASSWORD
- PGPORT
- DATABASE

### Функционал

1. Создание таблицы с полями представляющими ФИО, дату рождения, пол - name, date_of_birth и gender соответственно.

Пример запуска приложения:

```
node myApp.js 1
```

2. Создание записи. На вход необходимо передать ФИО, дату рождения, пол - name, date_of_birth и gender(M/F) соответственно.

Пример запуска приложения:

```
node myApp.js 2 'Bob Brown' 1990-01-01 M
```

3. Вывод из всех строк ФИО, даты рождения, пола, кол-во полных лет с уникальным значением ФИО+дата, отсортированным по ФИО.

Пример запуска приложения:

```
node myApp.js 3
```

4. Заполнение автоматически 1000000 строк. Распределение пола и начальной буквы ФИО в них - относительно равномерно. Заполнение автоматически 100 строк в которых пол мужской и ФИО начинается с "F".
   
Пример запуска приложения:

```
node myApp.js 4
```

5. Результат выборки из таблицы по критерию: пол мужской, ФИО начинается с "F". 

Также производится замер времени выполнения.

Пример запуска приложения:

```
node myApp.js 5
```
