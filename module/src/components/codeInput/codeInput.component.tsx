export interface ICodeInputText {
  type: 'text';
  value: string;
}

export interface ICodeInputInput {
  type: 'input';
  length: number;
  accepts: string;
}

export type CodeInputPart = ICodeInputText | ICodeInputInput | string | number;

export interface ICodeInputProps {
  parts: CodeInputPart[];
}
