import { useState } from 'react';
import { Container, Slider } from './styles';

interface ISwitchProps {
  size: number;
  activeColor?: `#${string}`;
  name: string;
  handleChange: (option: string, active: boolean) => void;
  isChecked: boolean;
}

export function Switch({
  size,
  activeColor,
  name,
  handleChange,
  isChecked,
}: ISwitchProps) {
  function onChange() {
    handleChange(name, !isChecked);
  }

  return (
    <Container htmlFor={`switch-${name}`} size={size} activeColor={activeColor}>
      <input
        id={`switch-${name}`}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <Slider size={size} />
    </Container>
  );
}
