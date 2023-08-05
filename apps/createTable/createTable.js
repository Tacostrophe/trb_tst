// Создание таблицы с полями представляющими ФИО, дату рождения, пол.

async function createTable(db, ...args) {
  try {
    await db.query(
      `CREATE TABLE profiles (
          pk SERIAL PRIMARY KEY,
          name VARCHAR (128) NOT NULL,
          date_of_birth DATE NOT NULL,
          gender CHAR(1) CHECK(gender in ('F','M')) NOT NULL
      );`
    );
  } catch (error) {
    if (error.code === '42P07') { //42P07 - код ошибки duplicate_table
      console.error('Table already exists');
    } else {
      console.error(error.stack);
    }
    process.exit(1);
  }

};

module.exports = createTable;