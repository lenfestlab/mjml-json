import { mj } from "."

export interface Attributes {
  inline?: boolean
}

export const style = (attrs: Attributes, content: string) =>
  mj("mj-style", attrs, content)
