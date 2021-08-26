import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

export type CustomEditor = BaseEditor & ReactEditor;

export type ParagraphElement = {
  type: ElementType.Paragraph;
  children: CustomText[];
};

export type HeadingElement = {
  type: ElementType.Heading;
  level: number;
  children: CustomText[];
};

export type CustomElement = ParagraphElement | HeadingElement;

export type FormattedText = { text: string; bold?: boolean; italic?: boolean };

export type CustomText = FormattedText;

export enum ElementType {
  Paragraph = 0,
  Heading = 1,
}
