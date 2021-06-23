import { mj } from "."

export interface Attributes {
  align?: string
  alt?: string
  src?: string
  href?: string
  width?: string | number
  height?: string | number
  padding?: string | number // px | int
  paddingLeft?: string | number // px | int
  paddingRight?: string | number // px | int
  paddingTop?: string | number // px | int
  paddingBottom?: string | number // px | int
  sizes?: string
  srcset?: string
}

export const image = (attributes: Attributes) => {
  return mj("mj-image", attributes)
}
