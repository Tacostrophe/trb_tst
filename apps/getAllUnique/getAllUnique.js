// Вывод всех строк с уникальным значением ФИО+дата, отсортированным по ФИО,
// вывести ФИО, Дату рождения, пол, кол-во полных лет.

async function getAllUnique(db, ...args) {
  try {
    const result = await db.query(
      `SELECT profiles.name, profiles.date_of_birth, profiles.gender,
        date_part('year', AGE(profiles.date_of_birth)) as age
      FROM profiles
      RIGHT JOIN (
        SELECT name, date_of_birth FROM profiles
        GROUP BY name, date_of_birth
        HAVING COUNT(pk)=1
      ) as filtered
      ON filtered.name = profiles.name AND filtered.date_of_birth = profiles.date_of_birth
      ORDER BY name;`
    )
    return result.rows;
  } catch (error) {
    console.error(error.stack);
    process.exit(1);
  }
};

module.exports = getAllUnique;