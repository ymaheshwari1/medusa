import { LineItem } from "../models/line-item"
import { Region } from "../models/region"
import { Address } from "../models/address"
import { Customer } from "../models/customer"
import { ProviderTaxLine } from "../types/tax-line"
import { TaxServiceRate } from "../types/tax-service"

export type TaxCalculationLine = {
  item: LineItem
  rates: TaxServiceRate[]
}

export type TaxCalculationContext = {
  shippingAddress: Address
  customer: Customer
  region: Region
}

export interface ITaxService {
  calculateLineItemTaxes(
    lines: TaxCalculationLine[],
    context: TaxCalculationContext
  ): Promise<ProviderTaxLine[]>
}
