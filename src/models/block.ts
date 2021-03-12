export interface Block {
  _id: string;
  rows?: BlockRow[];
  content?: Content;
}

export interface BlockRow {
  blocks: Block[];
}

export type Content = string;
