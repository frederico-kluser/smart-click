const Blockly = require('blockly');

// wait hours with variable
(() => {
  Blockly.Blocks.wait_hours_variable = {
    init() {
      this.appendDummyInput().appendField('wait');
      this.appendValueInput('hours').setCheck('Number');
      this.appendDummyInput().appendField('hours');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blockly.Python.wait_hours_variable = (block) => {
    const hours = Blockly.Python.valueToCode(block, 'hours', Blockly.Python.ORDER_ATOMIC) || 1;
    // TODO: Assemble Python into code variable.
    const code = `time.sleep(${hours * 60 * 60})\n`;
    return code;
  };
})();

// wait hours with number
(() => {
  Blockly.Blocks.wait_hours_number = {
    init() {
      this.appendDummyInput()
        .appendField('wait')
        .appendField(new Blockly.FieldNumber(0, 1), 'hours')
        .appendField('hours');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blockly.Python.wait_hours_number = (block) => {
    const seconds = block.getFieldValue('hours');
    // TODO: Assemble Python into code variable.
    const code = `time.sleep(${seconds * 60 * 60})\n`;
    return code;
  };
})();

// wait minutes with variable
(() => {
  Blockly.Blocks.wait_minutes_variable = {
    init() {
      this.appendDummyInput().appendField('wait');
      this.appendValueInput('minutes').setCheck('Number');
      this.appendDummyInput().appendField('minutes');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blockly.Python.wait_minutes_variable = (block) => {
    const minutes = Blockly.Python.valueToCode(block, 'minutes', Blockly.Python.ORDER_ATOMIC) || 1;
    // TODO: Assemble Python into code variable.
    const code = `time.sleep(${minutes * 60})\n`;
    return code;
  };
})();

// wait minutes with number
(() => {
  Blockly.Blocks.wait_minutes_number = {
    init() {
      this.appendDummyInput()
        .appendField('wait')
        .appendField(new Blockly.FieldNumber(0, 1), 'minutes')
        .appendField('minutes');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blockly.Python.wait_minutes_number = (block) => {
    const minutes = block.getFieldValue('minutes');
    // TODO: Assemble Python into code variable.
    const code = `time.sleep(${minutes * 60})\n`;
    return code;
  };
})();

// wait seconds
(() => {
  Blockly.Blocks.wait_seconds_variable = {
    init() {
      this.appendDummyInput().appendField('wait');
      this.appendValueInput('seconds').setCheck('Number');
      this.appendDummyInput().appendField('seconds');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blockly.Python.wait_seconds_variable = (block) => {
    const seconds = Blockly.Python.valueToCode(block, 'seconds', Blockly.Python.ORDER_ATOMIC) || 1;
    // TODO: Assemble Python into code variable.
    const code = `time.sleep(${seconds})\n`;
    return code;
  };
})();

// wait seconds
(() => {
  Blockly.Blocks.wait_seconds_number = {
    init() {
      this.appendDummyInput()
        .appendField('wait')
        .appendField(new Blockly.FieldNumber(0, 1), 'seconds')
        .appendField('seconds');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blockly.Python.wait_seconds_number = (block) => {
    const seconds = block.getFieldValue('seconds');
    // TODO: Assemble Python into code variable.
    const code = `time.sleep(${seconds})\n`;
    return code;
  };
})();

// wait milliseconds variable
(() => {
  Blockly.Blocks.wait_milliseconds_variable = {
    init() {
      this.appendDummyInput().appendField('wait');
      this.appendValueInput('milliseconds').setCheck('Number');
      this.appendDummyInput().appendField('milliseconds');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blockly.Python.wait_milliseconds_variable = (block) => {
    const milliseconds = Blockly.Python.valueToCode(block, 'milliseconds', Blockly.Python.ORDER_ATOMIC) || 1;
    // TODO: Assemble Python into code variable.
    const code = `time.sleep(${milliseconds / 1000})\n`;
    return code;
  };
})();
// wait milliseconds number
(() => {
  Blockly.Blocks.wait_milliseconds_number = {
    init() {
      this.appendDummyInput()
        .appendField('wait')
        .appendField(new Blockly.FieldNumber(0, 1), 'milliseconds')
        .appendField('milliseconds');
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blockly.Python.wait_milliseconds_number = (block) => {
    const milliseconds = block.getFieldValue('milliseconds');
    // TODO: Assemble Python into code variable.
    const code = `time.sleep(${milliseconds / 1000})\n`;
    return code;
  };
})();
