import { IsBoolean, IsNumber, IsString, ValidateNested } from "class-validator"
import { IsType } from "../utils/validators/is-type"
import { Cart } from "../models/cart"
import {
  DateComparisonOperator,
  NumericalComparisonOperator,
  StringComparisonOperator,
} from "./common"

export type TotalsField =
  | "shipping_total"
  | "discount_total"
  | "tax_total"
  | "refunded_total"
  | "total"
  | "subtotal"
  | "refundable_amount"
  | "gift_card_total"

export class TotaledCart extends Cart {
  shipping_total: number
  discount_total: number
  tax_total: number
  refunded_total: number
  total: number
  subtotal: number
  refundable_amount: number
  gift_card_total: number
}

export class FilterableCartProps {
  @ValidateNested()
  @IsType([String, [String], StringComparisonOperator])
  id?: string | string[] | StringComparisonOperator

  @IsType([DateComparisonOperator])
  created_at?: DateComparisonOperator

  @IsType([DateComparisonOperator])
  updated_at?: DateComparisonOperator
}
