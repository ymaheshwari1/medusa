import { LineItem } from "../models/line-item"
import { TaxLine } from "../models/tax-line"
import { TaxCalculationContext } from "./tax-service"

export interface ITaxCalculationStrategy {
  calculate(
    items: LineItem[],
    taxLines: TaxLine[],
    calculationContext: TaxCalculationContext
  ): Promise<number>
}
