import React, { FormEvent, useState } from 'react';

import * as S from './styles';

type DropDownOption = {
  label: string;
  value: string | number;
};

export type DropDownProps = {
  label: string;
  options: DropDownOption[];
  helperText?: string;
  containerProps: React.HTMLAttributes<HTMLDivElement>;
  labelProps: React.HTMLAttributes<HTMLLabelElement>;
  dropDownProps: React.SelectHTMLAttributes<HTMLSelectElement>;
  helperProps: React.HTMLAttributes<HTMLDivElement>;
  onValidate?: (isValidate: boolean) => void;
};

function DropDown({
  label,
  options,
  helperText,
  containerProps,
  labelProps,
  dropDownProps,
  helperProps,
  onValidate,
}: DropDownProps) {
  const [value, setValue] = useState<string>();

  const handleChange = (e: FormEvent<HTMLSelectElement>) => {
    const { value: currentValue } = e.currentTarget;

    setValue(currentValue);
    onValidate && onValidate(!!currentValue);
  };
  return (
    <S.Container {...containerProps}>
      <S.Label {...labelProps}>{label}</S.Label>
      <S.Select {...dropDownProps} value={value} onChange={handleChange}>
        {/* empty option */}
        <S.Option value="" />

        {/* mapped user options */}
        {options.map((option, index) => (
          <S.Option key={index} value={option.value}>
            {option.label}
          </S.Option>
        ))}
      </S.Select>

      {/* helper text */}
      {helperText && (
        <S.HelpText {...helperProps} className="input-helper-text">
          {helperText}
        </S.HelpText>
      )}
    </S.Container>
  );
}

export default DropDown;
