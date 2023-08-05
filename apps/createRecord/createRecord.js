// Создание записи. Использовать следующий формат:
// myApp 2 ФИО ДатаРождения Пол
async function createRecord(db, name, dateOfBirth, gender, ...args) {
  if (!(name && dateOfBirth && gender)) {
    console.error(
      'Expected 4 arguments: number of method, name, date_of_birth, gender(M/F)\n'
      + 'for example: node myApp.js Bob 1990-01-01 M'
    );
    process.exit(1);
  }
  try {
    const newRecord = await db.query(
      'INSERT INTO profiles (name, date_of_birth, gender) VALUES ($1, $2, $3) RETURNING *;',
      [name, dateOfBirth, gender.toUpperCase()],
    );
    return newRecord.rows;
  } catch (error) {
    console.error(error.stack);
    process.exit(1);
  }
};
  
  module.exports = createRecord;
