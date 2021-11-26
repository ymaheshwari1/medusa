import {
  Entity,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  PrimaryColumn,
} from "typeorm"
import { resolveDbType, DbAwareColumn } from "../utils/db-aware-column"

import { Product } from "./product"
import { TaxRate } from "./tax-rate"

@Entity()
export class ProductTaxRate {
  @PrimaryColumn()
  product_id: string

  @PrimaryColumn()
  rate_id: string

  @ManyToOne(() => Product)
  @JoinColumn({ name: "product_id" })
  product?: Product

  @ManyToOne(() => TaxRate)
  @JoinColumn({ name: "rate_id" })
  tax_rate?: TaxRate

  @CreateDateColumn({ type: resolveDbType("timestamptz") })
  created_at: Date

  @UpdateDateColumn({ type: resolveDbType("timestamptz") })
  updated_at: Date

  @DeleteDateColumn({ type: resolveDbType("timestamptz") })
  deleted_at: Date

  @DbAwareColumn({ type: "jsonb", nullable: true })
  metadata: any
}

/**
 * @schema product_tag
 * title: "Product Tag"
 * description: "Product Tags can be added to Products for easy filtering and grouping."
 * x-resourceId: product_tag
 * properties:
 *   id:
 *     description: "The id of the Product Tag. This value will be prefixed with `ptag_`."
 *     type: string
 *   value:
 *     description: "The value that the Product Tag represents (e.g. \"Pants\")."
 *     type: string
 *   created_at:
 *     description: "The date with timezone at which the resource was created."
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: "The date with timezone at which the resource was last updated."
 *     type: string
 *     format: date-time
 *   deleted_at:
 *     description: "The date with timezone at which the resource was deleted."
 *     type: string
 *     format: date-time
 *   metadata:
 *     description: "An optional key-value map with additional information."
 *     type: object
 */
