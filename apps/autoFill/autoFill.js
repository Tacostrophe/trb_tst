// Заполнение автоматически 1000000 строк.
// Распределение пола в них должно быть относительно равномерным, начальной буквы ФИО так же.
// Заполнение автоматически 100 строк в которых пол мужской и ФИО начинается с "F".

async function autoFill(db, ...args) {
  // function that create random string
  try {
    await db.query(
      `CREATE OR REPLACE FUNCTION random_string() RETURNS TEXT as $$
      SELECT string_agg(substring('abcdefgijklmnopqrstuvwxyz', round(random()*26)::integer, 1), '')
      FROM generate_series(1, round(random()*26)::integer+2);
      $$ language sql;`
    )
  } catch (error) {
    console.error(`Cant't create function\n ${error.stack}`)
  }

  
  // SELECT 'F'||random_string(),
  // date '2017-01-01' - (random()*22000)::integer,
  // substring('MF', round(random())::integer+1, 1)
  // FROM generate_series(1, 100);



  // random date_of_birth
  // SELECT DATE '2017-01-01' - (random()*22000)::integer;

  // random gender
  // SELECT substring('MF', round(random())::integer+1, 1);

  // INSERT INTO milliontable (name, age, joindate)
  // SELECT substr(md5(random()::text), 1, 10),
        //  (random() * 70 + 10)::integer,
        //  DATE '2018-01-01' + (random() * 700)::integer
  // FROM generate_series(1, 1000000);
  console.log('Autofill 1000000 rows');
  console.log(args);
};

module.exports = autoFill;