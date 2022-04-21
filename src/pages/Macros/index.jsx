import { PrimaryButton } from '@fluentui/react';
import React from 'react';
import MacroItem from '../../components/MacroItem';
import eventEmitter from '../../utils/event';
import { variableNameSetter } from '../../utils/globalVariables';
import Container from './styled';

const Macros = ({ data }) => <>
  { data.map((data) => <MacroItem key={data.name} {...data} /> )}
  <PrimaryButton text="Add Macro" onClick={() => {
    variableNameSetter('code', '');
    variableNameSetter('xml', '');
    eventEmitter.emit('changePage', 'createMacro');
  }} />
</>

export default Macros;
