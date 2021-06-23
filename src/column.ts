import { mj, Node } from "."

export interface Attributes {
  backgroundColor?: string
  cssClass?: string
  innerBackgroundColor?: string
  padding?: string | number
  paddingBottom?: string | number
  paddingLeft?: string | number
  paddingRight?: string | number
  paddingTop?: string | number
  verticalAlign?: "top" | "middle" | "bottom"
  width?: string
}

export const column = (attrs: Attributes, nodes: Node[] = []) =>
  mj("mj-column", attrs, nodes)
