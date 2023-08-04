const autoFill = require('./apps/autoFill/autoFill');
const createRecord = require('./apps/createRecord/createRecord');
const createTable = require('./apps/createTable/createTable');
const getAllUnique = require('./apps/getAllUnique/getAllUnique');
const getFiltered = require('./apps/getFiltered/getFiltered');
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

(async function() {
  if (process.argv.length <= 2) {
    console.error('Exptected at least one argument');
    process.exit(1);
  }

  const appNum = process.argv[2];
  const args = process.argv.slice(3);

  const apps = {
    1: createTable,
    2: createRecord,
    3: getAllUnique,
    4: autoFill,
    5: getFiltered
  };

  const pool = new Pool({
    host: process.env.HOST ?? 'localhost',
    user: process.env.PGUSER ?? 'postgres',
    password: process.env.PGPASSWORD ?? 'root',
    port: process.env.PGPORT ?? 5432,
    database: process.env.DATABASE ?? 'my_app_db',
  });

  const result = await apps[appNum](pool, ...args);
  console.log(result ?? 'success');
  pool.end();
})();
