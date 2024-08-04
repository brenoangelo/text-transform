import { Check, CopySimple } from 'phosphor-react';
import { TextareaHTMLAttributes, useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Switch } from '../Switch';
import {
  Container,
  CopyButton,
  Option,
  OptionsContainer,
  TextCount,
} from './styles';

interface IMenuOptions {
  label: string;
  value: string;
}

interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  menuOptions?: IMenuOptions[];
  setTextOptions?: (optionsSelected: string[]) => void;
  textOptions?: string[];
  isCopyable?: boolean;
}

export function TextArea({
  menuOptions,
  setTextOptions,
  textOptions,
  isCopyable,
  ...props
}: ITextArea) {
  const [isCopied, setIsCopied] = useState(false);

  const hasText = !!(props?.value as string)?.trim();

  useEffect(() => {
    document.onkeydown = (event) => {
      if (event.ctrlKey && event.keyCode == 67) {
        handleCopyToClipboard();
      }
    };
  }, [props?.value]);

  function handleCopyToClipboard() {
    navigator.clipboard.writeText(props?.value as string).then(() => {
      setIsCopied(true);
    });

    const timeOut = setTimeout(() => {
      setIsCopied(false);

      return () => clearTimeout(timeOut);
    }, 6000);
  }

  return (
    <Container>
      {isCopyable &&
        (isCopied ? (
          <CopyButton title="Copiado com sucesso!">
            <Check size={22} color="#4EA8DE" />
          </CopyButton>
        ) : (
          <CopyButton
            onClick={handleCopyToClipboard}
            title={
              hasText
                ? 'Copiar para area de transferência (Ctrl + C)'
                : 'Não existe texto para ser copiado para a area de transferência'
            }
            disabled={!hasText}
          >
            <CopySimple size={22} color="#808080" />
          </CopyButton>
        ))}

      <TextCount>{!!props?.value && (props.value as string)?.length}</TextCount>
      <textarea {...props} />
    </Container>
  );
}
