import { LineItem } from "../models/line-item"
import { TaxLine } from "../models/tax-line"
import { TaxCalculationContext } from "../interfaces/tax-service"

export interface ITaxCalculationStrategy {
  calculate(
    items: LineItem[],
    taxLines: TaxLine[],
    calculationContext: TaxCalculationContext
  ): Promise<number>
}

class TaxCalculationStrategy implements ITaxCalculationStrategy {
  async calculate(
    items: LineItem[],
    taxLines: TaxLine[],
    calculationContext: TaxCalculationContext
  ): Promise<number> {
    let result = 0

    for (const i of items) {
      const allocations = calculationContext.allocation_map[i.id] || {}

      let taxableAmount = i.quantity * i.unit_price

      if (calculationContext.region.giftcards_taxable) {
        taxableAmount -=
          (allocations.gift_card && allocations.gift_card.amount) || 0
      }

      const lineRates = taxLines.filter((tl) => tl.item_id === i.id)
      for (const lineRate of lineRates) {
        result += taxableAmount * lineRate.rate
      }
    }

    return result
  }
}

export default TaxCalculationStrategy
