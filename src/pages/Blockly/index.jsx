import { KeyCodes } from '@fluentui/react';
import { useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import Container from './styled';
import toolbox from './toolbox';

const BlocklyEditor = () => {
  const [xml, setXml] = useState();

  return (
    <Container>
      <BlocklyWorkspace
        className="width-100" // you can use whatever classes are appropriate for your app's CSS
        toolboxConfiguration={toolbox} // this must be a JSON toolbox definition
        initialXml={xml}
        onXmlChange={setXml}
      />
    </Container>
  )
}

export default BlocklyEditor;
