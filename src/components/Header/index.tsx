import { useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Switch } from '../Switch';
import { Tooltip } from '../Tooltip';
import * as Styled from './styles';

import { useTextContext } from '../../contexts/TextContext';

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
  const {
    menuOptions,
    onChangeAllTextOptions,
    onChangeTextOptions,
    textOptions,
  } = useTextContext();

  return (
    <Styled.Header>
      <Styled.Container>
        <Tooltip
          message={TOOLTIP_MESSAGE_ROWS.map((row) => (
            <li key={row.message}>
              <strong>{row.title}</strong>: {row.message}
            </li>
          ))}
        />
        <Styled.Title>
          <h1>
            Text <span>Transform</span>
          </h1>
          <p>Transforme seu texto da maneira que desejar</p>
        </Styled.Title>

        <Styled.OptionsContainer>
          {menuOptions.map((option) => (
            <Styled.Option key={option.value}>
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
            </Styled.Option>
          ))}
        </Styled.OptionsContainer>
      </Styled.Container>
    </Styled.Header>
  );
}
