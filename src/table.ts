import { mj, Node } from "."

export interface Attributes {}

export const table = (attributes: Attributes, nodes: Node[]) => {
  return mj("mj-table", attributes, nodes)
}
