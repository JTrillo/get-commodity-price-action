const core = require('@actions/core');
const github = require('@actions/github');

try {
  const commodity = core.getInput('commodity');
  if (commodity.toLowerCase() !== 'gold' && commodity.toLowerCase() !== 'silver') {
    throw new Error(`Commodity ${commodity} is not valid`);
  }
  const currency = core.getInput('currency');
  if (currency.toUpperCase() !== 'USD' && currency.toUpperCase() !== 'EUR') {
    throw new Error(`Currency ${currency} is not valid`);
  }
  console.log(`Getting current ${commodity} price per ounce in ${currency}...`);
  let price = 0;
  if (commodity.toLowerCase() === 'gold') {
    price = currency.toUpperCase() === 'USD' ? 2652.84 : 2524.52;
  } else {
    price = currency.toUpperCase() === 'USD' ? 30.58 : 29.10;
  }
  console.log(`Current ${commodity} price per ounce: ${price} ${currency}`);

  core.setOutput('price', price);

  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`Event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}