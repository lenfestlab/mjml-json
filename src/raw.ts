import { mj } from "."

export const raw = (content: string | string[]) => {
  const inner = typeof content === "string" ? content : content.join(" ")
  return mj("mj-raw", {}, inner)
}
