import { mj } from "."

export interface Attributes {
  align?: string
  color?: string
  cssClass?: string
  fontFamily?: string
  fontSize?: string | number
  fontStyle?: string
  fontWeight?: number | string
  lineHeight?: string | number // px | unitless
  padding?: string | number
  paddingBottom?: string | number
  paddingLeft?: string | number
  paddingRight?: string | number
  paddingTop?: string | number
  textAlign?: string
}

export const text = (
  attributes: Attributes,
  content: string | string[] = []
) => {
  const inner = typeof content === "string" ? content : content.join(" ")
  return mj("mj-text", attributes, inner)
}
