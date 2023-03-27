import React, { FormEvent, useState } from 'react';

import * as S from './styles';

export type InputProps = {
  label?: string;
  helperText?: string;
  containerProps: React.HTMLAttributes<HTMLDivElement>;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  helperProps: React.HTMLAttributes<HTMLDivElement>;
  labelProps: React.BaseHTMLAttributes<HTMLLabelElement>;
  onValidate?: (isValidate: boolean) => void;
};

function Input({
  label,
  helperText,
  containerProps,
  inputProps,
  helperProps,
  labelProps,
  onValidate,
}: InputProps): React.ReactElement {
  const [inputValue, setInputValue] = useState(inputProps?.value);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { value: currentValue } = e.currentTarget;
    setInputValue(currentValue);
    onValidate && onValidate(!!currentValue);
  };

  return (
    <S.Container {...containerProps} className="input-container">
      {label && (
        <S.Label {...labelProps} htmlFor="input-name" className="input-label">
          {label}
        </S.Label>
      )}
      <S.InputField
        {...inputProps}
        value={inputValue}
        onChange={handleChange}
        className="input-field"
      />
      {helperText && (
        <S.HelpText {...helperProps} className="input-helper-text">
          {helperText}
        </S.HelpText>
      )}
    </S.Container>
  );
}

export default Input;
