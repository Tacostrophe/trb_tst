const autoFill = require('./apps/autoFill/autoFill');
const createRecord = require('./apps/createRecord/createRecord');
const createTable = require('./apps/createTable/createTable');
const getAllUnique = require('./apps/getAllUnique/getAllUnique');
const getFiltered = require('./apps/getFiltered/getFiltered');

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

apps[appNum](...args);
