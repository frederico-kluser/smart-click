import { PrimaryButton } from '@fluentui/react';
import React from 'react';
import MacroItem from '../../components/macroItem';
import Container from './styled';

const Macros = () => <>
  <MacroItem name="Macro name" />
  <MacroItem name="Macro name" />
  <PrimaryButton text="Add Macro" />
</>

export default Macros;
