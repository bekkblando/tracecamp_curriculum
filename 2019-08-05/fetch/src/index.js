const axios = require('axios');
const chalk = require('chalk');

const printResult = ({ name, climate, terrain, population, }) => {
  const formattedName = chalk.white(name.toUpperCase());

  // if 'unknown', print 'unknown' in red
  const formattedClimate =
    climate === 'unknown' ? chalk.red(climate) : chalk.green(climate);

  const formattedTerrain =
    terrain === 'unknown' ? chalk.red(terrain) : chalk.green(terrain);

  const formattedPopulation =
    population === 'unknown' ? chalk.red(population) : chalk.blue(population);

  console.log(`
      ${formattedName}
      ${formattedClimate}
      ${formattedTerrain}
      ${formattedPopulation}
    `);
};

const printUrl = async url => {
  // fetch data
  const response = await axios.get(url);
  // loop through information we are interested in
  response.data.results.forEach(printResult);
  // recursively call printUrl() if information is paginated
  if (response.data.next) printUrl(response.data.next);
};

const url = 'https://swapi.co/api/planets';
printUrl(url);
