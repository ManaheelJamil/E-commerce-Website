import { type SchemaTypeDefinition } from 'sanity'
import { product } from './female'
import { category } from './category'
import {pageProduct} from "./frontPageProduct"
import { male } from './male'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,pageProduct,male],
}
