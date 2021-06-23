import { mj, Node } from "."

export interface Attributes {
  backgroundColor?: string
  padding?: string | number
  paddingBottom?: string | number // px | int
  paddingLeft?: string | number // px | int
  paddingRight?: string | number // px | int
  paddingTop?: string | number // px | int
}

export const wrapper = (attributes: Attributes, nodes: Node[] = []) =>
  mj("mj-wrapper", attributes, nodes)
