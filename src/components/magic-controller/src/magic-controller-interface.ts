export interface IMagicControllerContainerProps {
  toggleMagic: (isMagic: boolean) => void;
}

export interface IMagicControllerRendererProps {
  toggleMagic: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
