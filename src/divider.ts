import { mj, Node } from ".";

export interface Attributes {
  borderColor?: string;
  borderStyle?: string;
  borderWidth?: string | number;
  containerBackgroundColor?: string;
  cssClass?: string;
  padding?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  paddingRight?: string | number;
  paddingTop?: string | number;
  width?: string | number;
  align?: string;
}

export const divider = (attrs: Attributes, nodes: Node[] = []) =>
  mj("mj-divider", attrs, nodes);
