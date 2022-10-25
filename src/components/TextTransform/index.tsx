import { ArrowsClockwise } from 'phosphor-react';
import { TextArea } from '../TextArea';
import { Container, TransformButton } from './styles';

const MENU_OPTIONS = [
  { label: 'colocar underlines', value: 'underline' },
  { label: 'remover acentuação', value: 'accent' },
  { label: 'capitalizar', value: 'capitalized' },
  { label: 'ativar tudo', value: 'all' },
];

export function TextTransform() {
  return (
    <Container>
      <TextArea menuOptions={MENU_OPTIONS} placeholder="Entrada" />
      <TransformButton>
        Transformar <ArrowsClockwise size={16} />
      </TransformButton>
      <TextArea placeholder="Saída" />
    </Container>
  );
}
