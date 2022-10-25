import { Tooltip } from '../Tooltip';
import { Container, Title } from './styles';

const TOOLTIP_MESSAGE_ROWS = [
  {
    title: 'colocar underlines',
    message: 'substitui espaços em branco por underlines',
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
          Transformador <span>de textos</span>
        </h1>
        <p>Escreva seu texto e deixe pronto para subir em sites</p>
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
