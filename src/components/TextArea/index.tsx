import { TextareaHTMLAttributes } from 'react';
import { Switch } from '../Switch';
import { Container, Option, OptionsContainer } from './styles';

interface IMenuOptions {
  label: string;
  value: string;
}

interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  menuOptions?: IMenuOptions[];
}

export function TextArea({ menuOptions, ...props }: ITextArea) {
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
              />
            </Option>
          ))}
        </OptionsContainer>
      )}
      <textarea {...props} />
    </Container>
  );
}
