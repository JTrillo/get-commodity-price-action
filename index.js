import core from '@actions/core';
import github from '@actions/github';

try {
  const commodity = core.getInput('commodity');
  console.log(`Getting current ${commodity} price per ounce...`);
  let price = 0;
  if (commodity.toLocaleLowerCase() === 'gold') {
    price = 2019.80;
    console.log(`Current gold price per ounce: ${price} USD`);
  } else if (commodity.toLocaleLowerCase() === 'silver') {
    price = 24.07;
    console.log(`Current silver price per ounce: ${price} USD`);
  }

  core.setOutput('price', price);

  const payload = JSON.stringify(github.context.payload, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}