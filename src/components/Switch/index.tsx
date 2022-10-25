import { Container, Slider } from './styles';

interface ISwitchProps {
  size: number;
  activeColor?: `#${string}`;
}

export function Switch({ size, activeColor }: ISwitchProps) {
  return (
    <Container htmlFor="switch" size={size} activeColor={activeColor}>
      <input id="switch" type="checkbox" />
      <Slider size={size} />
    </Container>
  );
}
