// Uses Intl to format the currency to the users local currency with the correct currency symbol

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {currency: 'USD', style: 'currency'})

export default function formatCurrency(number: number) {
  return (
    CURRENCY_FORMATTER.format(number)
  )
}