import { useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import Container from './styled';

const BlocklyEditor = () => {
  const [xml, setXml] = useState();

  return (
    <Container>
      <BlocklyWorkspace
        className="width-100" // you can use whatever classes are appropriate for your app's CSS
        toolboxConfiguration={{
          "kind": "categoryToolbox",
          "contents": [
            {
              kind: 'category',
              name: 'Control',
              contents: [
                {
                  kind: 'block',
                  type: 'controls_if',
                },
                {
                  kind: 'block',
                  type: 'controls_ifelse',
                },
                {
                  kind: 'block',
                  type: 'controls_whileUntil',
                },
                {
                  kind: 'block',
                  type: 'controls_repeat',
                },
                {
                  kind: 'block',
                  type: 'controls_repeat_ext',
                },
              ],
            },
            {
              kind: 'category',
              name: 'Logic',
              contents: [
                {
                  kind: 'block',
                  type: 'logic_compare',
                },
                {
                  kind: 'block',
                  type: 'logic_operation',
                },
                {
                  kind: 'block',
                  type: 'logic_boolean',
                },
              ],
            },
            {
              kind: 'category',
              name: 'Text',
              contents: [
                {
                  kind: 'block',
                  type: 'text',
                },
                {
                  kind: 'block',
                  type: 'text_multiline',
                },
                {
                  kind: 'block',
                  type: 'text_join',
                },
                {
                  kind: 'block',
                  type: 'text_length',
                },
                {
                  kind: 'block',
                  type: 'text_indexOf',
                },
              ],
            },
            {
              kind: 'category',
              name: 'Variable',
              contents: [
                {
                  kind: 'block',
                  type: 'variables_get',
                },
                {
                  kind: 'block',
                  type: 'variables_set',
                },
              ],
            },
            {
              kind: 'category',
              name: 'Math',
              contents: [
                {
                  kind: 'block',
                  type: 'math_number',
                },
                {
                  kind: 'block',
                  type: 'math_arithmetic',
                },
                {
                  kind: 'block',
                  type: 'math_random_int',
                },
              ],
            },
          ]
        }} // this must be a JSON toolbox definition
        initialXml={xml}
        onXmlChange={setXml}
      />
    </Container>
  )
}

export default BlocklyEditor;
