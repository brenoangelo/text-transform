import { Tooltip } from '../Tooltip';
import { Container, Title } from './styles';

const TOOLTIP_MESSAGE_ROWS = [
  {
    title: 'colocar hífens',
    message: 'substitui espaços em branco por hífens',
  },
  {
    title: 'remover acentuação',
    message: 'remove quaisquer acentuações, incluindo ‘ç’',
  },
  { title: 'capitalizar', message: 'coloca em maiusculo as primeiras letras' },
];

export function Header() {
  return (
    <Container>
      <Title>
        <h1>
          Text <span>Transform</span>
        </h1>
        <p>Transforme seu texto da maneira que desejar</p>
      </Title>

      <Tooltip
        message={TOOLTIP_MESSAGE_ROWS.map((row) => (
          <li key={row.message}>
            <strong>{row.title}</strong>: {row.message}
          </li>
        ))}
      />
    </Container>
  );
}
