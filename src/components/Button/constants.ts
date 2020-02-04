export interface ButtonProps {
  children: string;
  renderType?: string;
  onClick?: any;
  className?: string;
}

export enum ButtonRenderType {
  Primary = 'primary',
  Secondary = 'secondary',
  Delete = 'delete',
}