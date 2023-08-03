// Создание таблицы с полями представляющими ФИО, дату рождения, пол.

async function createTable(db, ...args) {
  console.log('Create new Table');
  console.log(args);
  try {
    const result = await db.query(
      `CREATE TABLE profiles (
          pk SERIAL PRIMARY KEY,
          name VARCHAR (128) NOT NULL,
          date_of_birth DATE NOT NULL,
          gender CHAR(1) CHECK(gender in ('F','M')) NOT NULL
      );`
    )
    console.log('Created');
  } catch (error) {
    if (error.code === '42P07') { //42P07 - код ошибки duplicate_table
      console.error('Table already exists');
    } else {
      throw error;
    }
  }

};

module.exports = createTable;