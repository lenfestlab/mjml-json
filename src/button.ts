import { mj } from "."

export interface Attributes {
  align?: string
  backgroundColor?: string
  borderRadius?: string | number
  color?: string
  fontSize?: string | number
  fontStyle?: string
  fontWeight?: number | string
  height?: string | number
  href?: string
  padding?: string | number // px | int
  paddingBottom?: string | number // px | int
  paddingLeft?: string | number // px | int
  paddingRight?: string | number // px | int
  paddingTop?: string | number // px | int
  textDecoration?: string
  width?: string | number
}

export const button = (attributes: Attributes, content: string | string[]) => {
  const inner = typeof content === "string" ? content : content.join(" ")
  return mj("mj-button", attributes, inner)
}
