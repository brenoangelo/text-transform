import { ChangeEvent, useState } from 'react';

import capitalize from 'capitalize-pt-br';
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
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [textOptions, setTextOptions] = useState<string[]>([]);

  function handleChangeInputTextArea(event: ChangeEvent<HTMLTextAreaElement>) {
    setInputText(event.target.value);
  }

  function handleChangeOutputTextArea(event: ChangeEvent<HTMLTextAreaElement>) {
    setOutputText(event.target.value);
  }

  function handleTransformText() {
    let inputTextCopy = inputText;

    if (textOptions.includes('accent')) {
      inputTextCopy = inputTextCopy
        .normalize('NFD')
        .replace(/[\u002f]/g, " ")
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z-0-9\s]/g, '');
    }

    if (textOptions.includes('capitalized')) {
      inputTextCopy = capitalize(inputTextCopy);
    }

    if (textOptions.includes('underline')) {
      inputTextCopy = inputTextCopy.split(/[\u0020]/g).join('_');
    }

    setOutputText(inputTextCopy);
  }

  return (
    <Container>
      <TextArea
        menuOptions={MENU_OPTIONS}
        placeholder="Entrada"
        onChange={handleChangeInputTextArea}
        setTextOptions={setTextOptions}
        textOptions={textOptions}
      />
      <TransformButton onClick={handleTransformText}>
        Transformar <ArrowsClockwise size={16} weight="bold" />
      </TransformButton>
      <TextArea
        placeholder="Saída"
        onChange={handleChangeOutputTextArea}
        value={outputText}
        isCopyable
      />
    </Container>
  );
}
