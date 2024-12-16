# get-commodity-price-action

This action gets gold or silver current price per ounce in USD/EUR.

## Inputs

### `commodity`

**Required** The name of the commodity. Default `gold`.

### `currency`

The desired currency. Default `USD`.

## Outputs

### `price`

Current price of the selected commodity per ounce.

## Example usage

```yaml
uses: jtrillo/get-commodity-price-action@1.0.0
with:
  commodity: 'silver'
  currency: 'EUR'
```
