import { paramCase } from "change-case";
import isEmpty from "lodash/isEmpty";
import mapKeys from "lodash/mapKeys";

type TagName = string;
type Content = string;
type Attributes = {};

export interface Node {
  tagName: TagName;
  attributes: Attributes;
  children?: Node[];
  content?: Content;
}

export function mj(
  tagName: TagName,
  attrs: Attributes,
  children?: Node[] | string
): Node {
  const attributes = mapKeys(attrs, (value, key) => paramCase(key));
  if (isEmpty(children)) return { tagName, attributes };
  if (typeof children === "string")
    return { tagName, attributes, content: children };
  return { tagName, attributes, children };
}

export { head } from "./head";
export { breakpoint, Attributes as BreakpointAttributes } from "./breakpoint";
export { font, Attributes as FontAttributes } from "./font";
export { preview } from "./preview";
export { style, Attributes as StyleAttributes } from "./style";
export { body, Attributes as BodyAttributes } from "./body";
export { attributes } from "./attributes";
export { all } from "./all";
export { mjml } from "./mjml";
export { section, Attributes as SectionAttributes } from "./section";
export { column, Attributes as ColumnAttributes } from "./column";
export { text, Attributes as TextAttributes } from "./text";
export { image, Attributes as ImageAttributes } from "./image";
export { wrapper, Attributes as WrapperAttributes } from "./wrapper";
export { table, Attributes as TableAttributes } from "./table";
export { raw } from "./raw";
export { group, Attributes as GroupAttributes } from "./group";
export { button, Attributes as ButtonAttributes } from "./button";
export { divider, Attributes as DividerAttributes } from "./divider";
