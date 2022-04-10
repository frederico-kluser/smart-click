import { PrimaryButton } from '@fluentui/react';
import React from 'react';
import MacroItem from '../../components/MacroItem';
import Container from './styled';

const Macros = ({ data, setModalConfig, setScreen }) => <>
  { data.map((data) => <MacroItem {...data} setModalConfig={setModalConfig} /> )}
  <PrimaryButton text="Add Macro" onClick={() => setScreen('createMacro')} />
</>

export default Macros;
