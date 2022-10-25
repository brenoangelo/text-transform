import { Check, CopySimple } from 'phosphor-react';
import { TextareaHTMLAttributes, useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Switch } from '../Switch';
import { Container, CopyButton, Option, OptionsContainer } from './styles';

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

  useEffect(() => {
    storage && setTextOptions?.(storage);

    setLoading(false);
  }, []);

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
          <CopyButton>
            <Check size={22} color="#4EA8DE" />
          </CopyButton>
        ) : (
          <CopyButton onClick={handleCopyToClipboard}>
            <CopySimple size={22} color="#808080" />
          </CopyButton>
        ))}
      <textarea {...props} />
    </Container>
  ) : (
    <></>
  );
}
