import { mj, Node } from "."

export interface Attributes {
  backgroundColor?: string
  borderRadius?: string | number
  cssClass?: string
  padding?: string | number
  paddingBottom?: string | number
  paddingLeft?: string | number
  paddingRight?: string | number
  paddingTop?: string | number
}

export const section = (attributes: Attributes, nodes: Node[] = []) =>
  mj("mj-section", attributes, nodes)
