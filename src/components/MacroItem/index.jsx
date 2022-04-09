import React, { useState } from 'react';
import Container, { Delete, Edit, Name, Command } from './styled';
import { Icon } from '@fluentui/react/lib/Icon';
import { Text } from '@fluentui/react';

const MacroItem = ({ name }) => {
  
  const [played, setPlayed] = useState('Play');
  const playMacro = () => {
    setPlayed(played === 'Play' ? 'Pause' : 'Play');
  }

  return (
  <Container>
    <Command onClick={playMacro}>
      <Icon iconName={played} />
    </Command>
    <Name>
      <Text variant="large">
      { name }
      </Text>
    </Name>
    <Edit>
      <Icon iconName="Edit" />
    </Edit>
    <Delete>
      <Icon iconName="Delete" />
    </Delete>
  </Container>);
};

export default MacroItem;
