async function filter(db, ...args) {
  const timeStart = performance.now();
  const profilesFiltered = await db.query(
    'SELECT * FROM profiles WHERE gender=$1 AND name ILIKE $2',
    ['M', 'f%'],
  );
  const timeEnd = performance.now();
  return {
    rows: profilesFiltered.rows,
    execution_time: `${timeEnd - timeStart} ms`,
  };
};

async function getFiltered(db, ...args) {
  // Без индекса фильтрация происходит обычным перебором
  await db.query(
    'DROP INDEX IF EXISTS idx_name_gender;'
  );
  let {execution_time} = await filter(db, ...args);
  // Индекс указывает, где в таблице находятся подходящие под условие (которое было указано и в индексе)
  await db.query(
    `CREATE INDEX IF NOT EXISTS idx_name_gender ON profiles
    (
      name,
      gender
    )
    WHERE name ILIKE 'f%' AND gender='M';`
  );
  const result = await filter(db, ...args);
  return {
    rows: result.rows,
    execution_time_slow: execution_time,
    execution_time_fast: result.execution_time,
  };
}
  
  module.exports = getFiltered;
