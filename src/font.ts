import { mj } from "."

export interface Attributes {
  href?: string
  name?: string
}

export const font = (attrs: Attributes) => mj("mj-font", attrs, [])
