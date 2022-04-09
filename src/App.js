import { Spinner, SpinnerSize, Text } from '@fluentui/react';
import { Body, Loader } from './App.styled';

function App() {
  return (
    <Body>
      <Text variant="xxLarge">
        Smart-Click
        <Loader>
          <Spinner size={SpinnerSize.large} label="Loading Macros..." />
        </Loader>
      </Text>
    </Body>
  );
}

export default App;
