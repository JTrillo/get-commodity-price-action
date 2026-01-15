# get-commodity-price-action

This actions prints current price per ounce for the selected commodity.

## Inputs

### commodity

**Required** The commodity you want to know its current price per ounce. Default value `gold`.

### currency

The desired currency. Default value `EUR`.

## Outputs

### price

The current price for the selected commodity/currency.

## Example Usage

```yaml
uses: jtrillo/get-commodity-price-action@v1
with:
  commodity: 'silver'
```
