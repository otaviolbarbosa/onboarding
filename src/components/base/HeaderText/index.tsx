import React from 'react';

export type HeaderTextProps = {
  size?:
    | 'extrasmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'extralarge'
    | 'xs'
    | 's'
    | 'm'
    | 'l'
    | 'xl';
  children: React.ReactNode;
};

function HeaderText({ size = 'm', children = '' }: HeaderTextProps) {
  switch (size) {
    case 'extralarge':
    case 'xl':
      return <h1 className="header-h1">{children}</h1>;
    case 'large':
    case 'l':
      return <h2 className="header-h2">{children}</h2>;
    case 'medium':
    case 'm':
      return <h3 className="header-h3">{children}</h3>;
    case 'small':
    case 's':
      return <h4 className="header-h4">{children}</h4>;
    case 'extrasmall':
    case 'xs':
      return <h5 className="header-h5">{children}</h5>;
    default:
      return <h3 className="header-h3">{children}</h3>;
  }
}

export default HeaderText;
