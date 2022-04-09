import React from 'react';
import Container, { Delete, Edit, Name, Number } from './styled';
import { Icon } from '@fluentui/react/lib/Icon';
import { Text } from '@fluentui/react';


const MacroItem = ({ name }) => (<Container>
  <Number>
    <Icon iconName="Play" />
  </Number>
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
</Container>)

export default MacroItem;
