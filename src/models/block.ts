export interface Block {
  _id: string;
  subBlockInfo?: SubBlockInfo;
  content?: Content;
}

export interface SubBlockInfo {
  direction: "row" | "column";
  blocks: Block[];
}

export type Content = string;
