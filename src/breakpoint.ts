import { mj, Node } from "."

export interface Attributes {
  width?: string
}

export const breakpoint = (attrs: Attributes) => mj("mj-breakpoint", attrs, [])
