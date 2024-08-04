import { ChangeEvent, useEffect, useState } from 'react';

import capitalize from 'capitalize-pt-br';
import { ArrowsClockwise } from 'phosphor-react';
import { TextArea } from '../TextArea';

import { Container, TransformButton } from './styles';
import { useTextContext } from '../../contexts/TextContext';

const MENU_OPTIONS = [
  { label: 'ativar tudo', value: 'all' },
  { label: 'colocar hífens', value: 'hifen' },
  { label: 'remover acentuação', value: 'accent' },
  { label: 'capitalizar', value: 'capitalized' },
  { label: 'adicionar aspas duplas', value: 'double-quotes' },
  { label: 'adicionar aspas duplas em cada texto', value: 'double-quotes-texts' },
];

export function TextTransform() {
  const { textOptions } = useTextContext()
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  useEffect(() => {
    document.onkeydown = (event) => {
      if (event.shiftKey && event.ctrlKey) {
        handleTransformText();
      }
    };
  }, [inputText]);

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
        .replace(/[\u002f]/g, ' ')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z-0-9\s]/g, '');
    }

    if (textOptions.includes('capitalized')) {
      inputTextCopy = capitalize(inputTextCopy);
    }

    if (textOptions.includes('hifen')) {
      inputTextCopy = inputTextCopy.split(/[\u0020]/g).join('-');
    }

    setOutputText(inputTextCopy);
  }

  return (
    <Container>
      <TextArea
        menuOptions={MENU_OPTIONS}
        placeholder="Entrada"
        onChange={handleChangeInputTextArea}
        textOptions={textOptions}
      />
      <TransformButton onClick={handleTransformText} title="Ctrl + shift">
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
