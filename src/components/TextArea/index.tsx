import { Check, CopySimple } from 'phosphor-react';
import { TextareaHTMLAttributes, useState } from 'react';
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
  const [isCopied, setIsCopied] = useState(false);

  function onChangeTextOptions(option: string, active: boolean) {
    const textOptionsCopy = Array.from(textOptions ?? []);

    active
      ? textOptionsCopy.push(option)
      : textOptionsCopy.splice(
          textOptionsCopy.findIndex((item) => item === option),
          1,
        );

    setTextOptions?.(textOptionsCopy);
  }

  function onChangeAllTextOptions(option: string, active: boolean) {
    const allOptions =
      menuOptions?.map((item) => item.value).filter((item) => item !== 'all') ??
      [];

    let textOptionsCopy = active ? allOptions : [];
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

  return (
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
          <CopyButton><Check size={22} color="#4EA8DE"/></CopyButton>
        ) : (
          <CopyButton onClick={handleCopyToClipboard}>
            <CopySimple size={22} color="#808080"/>
          </CopyButton>
        ))}
      <textarea {...props} />
    </Container>
  );
}
