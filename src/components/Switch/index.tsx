import { Container, Slider } from './styles';

interface ISwitchProps {
  size: number;
  activeColor?: `#${string}`;
  name: string;
}

export function Switch({ size, activeColor, name }: ISwitchProps) {
  return (
    <Container htmlFor={`switch-${name}`} size={size} activeColor={activeColor}>
      <input id={`switch-${name}`} type="checkbox" />
      <Slider size={size} />
    </Container>
  );
}
