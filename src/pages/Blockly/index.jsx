import { useRef } from 'react';
import Container, { ButtonGroup } from './styled';
import toolbox from './toolbox';

import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/python';

import { useBlocklyWorkspace } from 'react-blockly';
import { codeFixer } from './fixCode';
import { DefaultButton, PrimaryButton } from '@fluentui/react';
import eventEmitter from '../../utils/event';

const BlocklyEditor = () => {
  const blocklyRef = useRef(null);
  const { workspace, xml } = useBlocklyWorkspace({
    ref: blocklyRef,
    toolboxConfiguration: toolbox, // this must be a JSON toolbox definition
    initialXml: '',
  });

  if (xml) {
    const code = codeFixer(Blockly.Python.workspaceToCode(workspace));
    // console.log(code);
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
