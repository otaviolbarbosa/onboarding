import React from 'react';

import * as S from './styles';

export type TextProps = {
  textProps?: React.HTMLAttributes<HTMLDivElement>;
  children: React.ReactNode;
};

function Text({ textProps, children }: TextProps) {
  return (
    <S.Container {...textProps} className="text-container">
      {children}
    </S.Container>
  );
}

export default Text;
