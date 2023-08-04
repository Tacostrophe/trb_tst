async function getFiltered(db, ...args) {
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
  
  module.exports = getFiltered;
