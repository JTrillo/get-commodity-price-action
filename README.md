# Get commodity price action

This action prints (and returns) current price per ounce for the selected commodity.

## Inputs

### `commodity`

**Required** The commodity you want to know its current price per ounce. Default `'gold'`.

## Outputs

### `price`

The current price for the selected commodity

## Usage

```yaml
name: ci

on:
  push:
    branches:
      - 'main'

jobs:
  get_commodity_price:
    runs-on: ubuntu-latest

    steps:
      - name: Get commodity price step
        uses: jtrillo/get-commodity-price-action@v1.0.1
        with:
          commodity: silver
```
