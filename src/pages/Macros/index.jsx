import { PrimaryButton } from '@fluentui/react';
import React from 'react';
import MacroItem from '../../components/MacroItem';
import Container from './styled';

const Macros = ({ data }) => <>
  { data.map((data) => <MacroItem {...data} /> )}
  <PrimaryButton text="Add Macro" />
</>

export default Macros;
