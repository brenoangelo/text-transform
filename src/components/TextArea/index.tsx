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
  const [storage, setStorage] = useLocalStorage<string[]>('@transform:options');
  const [isCopied, setIsCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  const hasText = !!(props?.value as string)?.trim();

  useEffect(() => {
    storage && setTextOptions?.(storage);

    setLoading(false);
  }, []);

  useEffect(() => {
    document.onkeydown = (event) => {
      if (event.ctrlKey && event.keyCode == 67) {
        handleCopyToClipboard();
      }
    };
  }, [props?.value]);

  function onChangeTextOptions(option: string, active: boolean) {
    const textOptionsCopy = Array.from(textOptions ?? []);

    active
      ? textOptionsCopy.push(option)
      : textOptionsCopy.splice(
          textOptionsCopy.findIndex((item) => item === option),
          1,
        );

    setStorage(textOptionsCopy);
    setTextOptions?.(textOptionsCopy);
  }

  function onChangeAllTextOptions(option: string, active: boolean) {
    const allOptions =
      menuOptions?.map((item) => item.value).filter((item) => item !== 'all') ??
      [];

    let textOptionsCopy = active ? allOptions : [];

    setStorage(textOptionsCopy);
    setTextOptions?.(textOptionsCopy);
  }

  function handleCopyToClipboard() {
    navigator.clipboard.writeText(props?.value as string).then(() => {
      setIsCopied(true);
    });

    const timeOut = setTimeout(() => {
      setIsCopied(false);

      return () => clearTimeout(timeOut);
    }, 6000);
  }

  return !loading ? (
    <Container>
      {menuOptions && (
        <OptionsContainer>
          {menuOptions.map((option) => (
            <Option key={option.value}>
              {option.label}
              <Switch
                name={option.value}
                size={0.5}
                activeColor={option.value === 'all' ? '#8284FA' : undefined}
                handleChange={
                  option.value === 'all'
                    ? onChangeAllTextOptions
                    : onChangeTextOptions
                }
                isChecked={
                  !!textOptions?.includes(option.value) ||
                  textOptions?.length === menuOptions.length - 1
                }
              />
            </Option>
          ))}
        </OptionsContainer>
      )}
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
  ) : (
    <></>
  );
}
