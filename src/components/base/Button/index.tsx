import React from 'react';

import * as S from './styles';

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <S.Button {...props} />;
}

export default Button;
