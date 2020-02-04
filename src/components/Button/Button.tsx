import React from 'react';
import * as C from './constants';
import * as P from './parts';

const Button: React.FC<C.ButtonProps & React.HTMLProps<HTMLButtonElement>> = ({
  children,
  onClick,
  renderType,
  className,
}) => {
  switch(renderType) {
    case C.ButtonRenderType.Primary:
      return ( 
        <P.PrimaryButton
          className={className}
          onClick={onClick}
        >
          {children}
        </P.PrimaryButton>
      );
    case C.ButtonRenderType.Secondary:
      return ( 
        <P.SecondaryButton
          className={className}
          onClick={onClick}
        >
          {children}
        </P.SecondaryButton>
      );
    case C.ButtonRenderType.Delete:
      return ( 
        <P.DeleteButton
          className={className}
          onClick={onClick}
        >
          {children}
        </P.DeleteButton>
      );
    default:
      return ( 
        <P.Button
          className={className}
          onClick={onClick}
        >
          {children}
        </P.Button>
      );
  }
  
};

export default Button;