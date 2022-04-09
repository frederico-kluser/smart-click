const Blockly = require('blockly');

Blockly.Blocks.mouse_move = {
	init() {
		this.appendValueInput('mouse_x_position').setCheck('Number').appendField('mouse move to x:');
		this.appendValueInput('mouse_y_position').setCheck('Number').appendField('y:');
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Python.mouse_move = (block) => {
	const mouseX = Blockly.Python.valueToCode(block, 'mouse_x_position', Blockly.Python.ORDER_ATOMIC);
	const mouseY = Blockly.Python.valueToCode(block, 'mouse_y_position', Blockly.Python.ORDER_ATOMIC);
	// TODO: Assemble Python into code variable.
	const code = `pyautogui.moveTo(${mouseX}, ${mouseY})\n`;
	return code;
};
// mouse move number
Blockly.Blocks.mouse_move_number = {
	init() {
		this.appendDummyInput().appendField('mouse move to x:').appendField(new Blockly.FieldNumber(0), 'mouse_x_position');
		this.appendDummyInput().appendField('y:').appendField(new Blockly.FieldNumber(0), 'mouse_y_position');
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Python.mouse_move_number = (block) => {
	const mouseX = block.getFieldValue('mouse_x_position');
	const mouseY = block.getFieldValue('mouse_y_position');
	// TODO: Assemble JavaScript into code variable.
	const code = `pyautogui.moveTo(${mouseX}, ${mouseY})\n`;
	return code;
};

// mouse left click
Blockly.Blocks.mouse_left_click = {
	init() {
		this.appendDummyInput().appendField('mouse left click');
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Python.mouse_left_click = () => {
	// TODO: Assemble Python into code variable.
	const code = 'pyautogui.click()\n';
	return code;
};

// mouse click right
Blockly.Blocks.mouse_right_click = {
	init() {
		this.appendDummyInput().appendField('mouse right click');
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Python.mouse_right_click = () => {
	// TODO: Assemble Python into code variable.
	const code = "pyautogui.click(button='right')\n";
	return code;
};

// mouse double click
Blockly.Blocks.mouse_double_click = {
	init() {
		this.appendDummyInput().appendField('mouse double click');
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Python.mouse_double_click = () => {
	// TODO: Assemble Python into code variable.
	const code = 'pyautogui.doubleClick()\n';
	return code;
};

// mouse drag
Blockly.Blocks.mouse_drag = {
	init() {
		this.appendValueInput('mouse_x_position').setCheck('Number').appendField('drag drag to x:');
		this.appendValueInput('mouse_y_position').setCheck('Number').appendField('y:');
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Python.mouse_drag = (block) => {
	const mouseX = Blockly.Python.valueToCode(block, 'mouse_x_position', Blockly.Python.ORDER_ATOMIC);
	const mouseY = Blockly.Python.valueToCode(block, 'mouse_y_position', Blockly.Python.ORDER_ATOMIC);
	// TODO: Assemble JavaScript into code variable.
	const code = `pyautogui.dragTo(${mouseX}, ${mouseY}, button='left')\n`;
	return code;
};

// mouse drag number
Blockly.Blocks.mouse_drag_number = {
	init() {
		this.appendDummyInput().appendField('mouse drag to x:').appendField(new Blockly.FieldNumber(0), 'mouse_x_position');
		this.appendDummyInput().appendField('y:').appendField(new Blockly.FieldNumber(0), 'mouse_y_position');
		this.setInputsInline(true);
		this.setPreviousStatement(true, null);
		this.setNextStatement(true, null);
		this.setColour(0);
		this.setTooltip('');
		this.setHelpUrl('');
	},
};

Blockly.Python.mouse_drag_number = (block) => {
	const mouseX = block.getFieldValue('mouse_x_position');
	const mouseY = block.getFieldValue('mouse_y_position');
	// TODO: Assemble JavaScript into code variable.
	const code = `pyautogui.dragTo(${mouseX}, ${mouseY}, button='left')\n`;
	return code;
};
