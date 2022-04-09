import { Spinner, SpinnerSize, Text } from '@fluentui/react';
import { useState } from 'react';
import { Body, Loader } from './App.styled';
import MacroItem from './components/macroItem';
import Macros from './pages/Macros';

function App() {
  const [loaded, setLoaded] = useState(true);

  fetch('http://localhost:8080/macro/allMacros')
    .then(response => {
      setLoaded(false);
      // response.json()
    })
    .then(data => console.log(data))

  return (
    <Body>
      <Text variant="xxLarge" style={{ marginBottom: 50 }}>
        Smart-Click
      </Text>
      { loaded && 
      <Loader>
        <Spinner size={SpinnerSize.large} label="Loading Macros..." />
      </Loader>}
      { !loaded && <Macros />
      }
    </Body>
  );
}

export default App;
