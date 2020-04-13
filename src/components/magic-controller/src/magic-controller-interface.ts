export interface IMagicControllerContainerProps {
  toggleMagic: (isMagic: boolean) => void;
  isMagic: boolean;
}

export interface IMagicControllerRendererProps {
  toggleMagic: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isMagic: boolean;
}
