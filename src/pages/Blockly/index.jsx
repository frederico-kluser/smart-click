import { useRef } from 'react';
import Container, { ButtonGroup } from './styled';
import toolbox from './toolbox';
import theme from './theme';

import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/python';

import { useBlocklyWorkspace } from 'react-blockly';
import { codeFixer } from './fixCode';
import { DefaultButton, PrimaryButton } from '@fluentui/react';
import eventEmitter from '../../utils/event';
import { xmlSetter } from '../../utils/globalVariables';


const BlocklyEditor = ({ initialXml }) => {
  const blocklyRef = useRef(null);
  const { workspace, xml } = useBlocklyWorkspace({
    ref: blocklyRef,
    toolboxConfiguration: toolbox, // this must be a JSON toolbox definition
    workspaceConfiguration: {
      grid: {
        spacing: 20,
        length: 3,
        colour: '#ccc',
        snap: true
      },
      theme,
      renderer: 'thrasos',
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 3,
        minScale: 0.3,
        scaleSpeed: 1.2,
        pinch: true
      }
    },
    initialXml,
  });

  if (xml) {
    const code = codeFixer(Blockly.Python.workspaceToCode(workspace));
    console.log(workspace);
    console.log(code);
    console.log(xml);
    xmlSetter(xml);
  }

  const cancellFunction = () => {
    eventEmitter.emit('changePage', 'useMacro');
  }

  return (
    <>
      <Container ref={blocklyRef} />
      <ButtonGroup>
        <PrimaryButton text="Save" onClick={() => {}} />
        <DefaultButton text="Cancell" style={{ marginLeft: 15 }} onClick={cancellFunction} />
      </ButtonGroup>
    </>
  )
}

export default BlocklyEditor;
