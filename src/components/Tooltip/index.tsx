import { Info } from 'phosphor-react';
import { ReactNode } from 'react';
import { Container, MessageBalloon } from './styles';

interface ITooltipProps {
  iconSVG?: ReactNode;
  message: ReactNode;
}

export function Tooltip({
  iconSVG = <Info size={22} color={"#8284FA"}/>,
  message,
}: ITooltipProps) {
  return (
    <Container>
      {iconSVG}

      <MessageBalloon>{message}</MessageBalloon>
    </Container>
  );
}
