import { mj, Node } from "."

export interface Attributes {
  verticalAlign: "top" | "middle" | "bottom"
}

export const group = (attributes: Attributes, nodes: Node[]) => {
  return mj("mj-group", attributes, nodes)
}
