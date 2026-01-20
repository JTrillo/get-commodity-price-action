import { getInput, setOutput, setFailed } from '@actions/core';
import { context } from '@actions/github';

try {
  const commodity = getInput('commodity');

  if (commodity.toLowerCase() !== 'gold' && commodity.toLowerCase() !== 'silver') {
    throw new Error(`Commodity ${commodity} is not valid`);
  }

  const currency = getInput('currency');

  if (currency.toLowerCase() !== 'eur' && currency.toLowerCase() !== 'usd') {
    throw new Error(`Currency ${currency} is not valid`);
  }

  console.log(`Getting curent ${commodity} price per ounce in ${currency}...`);
  let price = 0;

  if (commodity.toLowerCase() == 'gold') {
    price = currency.toLowerCase() === 'eur' ? 3974 : 4616
  } else {
    price = currency.toLowerCase() === 'eur' ? 80 : 93
  }

  console.log(`Current ${commodity} price per ounce is: ${price} ${currency.toLowerCase}`);

  setOutput('price', price);

  const payload = JSON.stringify(context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (err) {
  setFailed(err.message);
}