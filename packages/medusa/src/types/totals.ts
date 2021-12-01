import { LineItem } from "../models/line-item"

export type SubtotalOptions = {
  excludeNonDiscounts?: boolean
}

export type LineDiscount = {
  lineItem: LineItem
  variant: string
  amount: number
}

export type LineDiscountAmount = {
  item: LineItem
  amount: number
}
