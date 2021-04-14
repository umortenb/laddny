import { TextContentComponentProps } from "../components/TextContentComponent";
import { RawDraftContentState } from "draft-js";

export interface BlockData {
  _id?: string;
}

export enum ContentType {
  Container = 0,
  Text = 1,
}

export interface ContainerBlock extends BlockData {
  type: ContentType.Container;
  content: SubBlockData[];
}

export interface SubBlockData {
  block: ContentBlock;
}

export interface TextBlock extends BlockData {
  type: ContentType.Text;
  content?: RawDraftContentState;
}

export type ContentBlock = TextBlock;
export type Block = ContainerBlock | ContentBlock;
