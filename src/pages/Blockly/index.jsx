import { useRef, useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import Container from './styled';
import toolbox from './toolbox';

import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/python';

import { useBlocklyWorkspace } from 'react-blockly';
import { codeFixer } from './fixCode';

function BlocklyEditor() {
  const blocklyRef = useRef(null);
  const { workspace, xml } = useBlocklyWorkspace({
    ref: blocklyRef,
    toolboxConfiguration: toolbox, // this must be a JSON toolbox definition
    initialXml: '',
  });

  // console.log('workspace :', workspace);
  // console.log('xml :', xml);
  if (xml) {
    const code = codeFixer(Blockly.Python.workspaceToCode(workspace));
    console.log(code);
    // console.log('code :', code);
  }

  return (
    <Container ref={blocklyRef} /> // Blockly will be injected here
  )
}

export default BlocklyEditor;
