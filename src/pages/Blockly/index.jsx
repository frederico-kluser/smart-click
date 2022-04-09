import { useRef, useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import Container from './styled';
import toolbox from './toolbox';

import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/python';

import { useBlocklyWorkspace } from 'react-blockly';

function BlocklyEditor() {
  const blocklyRef = useRef(null);
  const { workspace, xml } = useBlocklyWorkspace({
    ref: blocklyRef,
    toolboxConfiguration: toolbox, // this must be a JSON toolbox definition
    initialXml: '',
  });

  console.log('workspace :', workspace);
  console.log('xml :', xml);
  if (xml) {
    console.log(Blockly.Python.workspaceToCode(workspace));
  }

  return (
    <Container ref={blocklyRef} /> // Blockly will be injected here
  )
}

export default BlocklyEditor;
