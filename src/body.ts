import { mj, Node } from "."

export interface Attributes {
  backgroundColor?: string
  width?: string
  cssClass?: string
}

export const body = (attrs: Attributes, nodes: Node[]) =>
  mj("mj-body", attrs, nodes)
