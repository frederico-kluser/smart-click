import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import 'blockly/python';
import { variableNameGetter, variableNameSetter } from '../../../utils/globalVariables';
import { modalPromptImage } from '../../../components/Modal';

// image get
(() => {
	Blockly.Blocks.image_get = {
		init() {
			this.appendDummyInput()
				.appendField('image')
				.appendField(new Blockly.FieldImage('NEW_URL_HERE', 15, 15, '*'));
			this.setOnChange(async (changeEvent) => {
				let imageURL = 'NEW_URL_HERE';
				const imageId = variableNameGetter(this.id);
				if (changeEvent.newElementId === this.id && (!imageId || imageId === 'NEW_URL_HERE')) {
          imageURL = await modalPromptImage({
            title: `Edit image`,
            subText: 'Enter new image',
            placeholder: ''
          }) || imageURL;
					variableNameSetter(this.id, imageURL);
				} else {
					imageURL = imageId ? imageId : imageURL;
				}
				if (imageURL !== 'NEW_URL_HERE') {
					this.svgGroup_.innerHTML = this.svgGroup_.innerHTML.replace(/NEW_URL_HERE/g, `file://${imageURL}`);
				}
			});
			this.setOutput(true, 'img');
			this.setColour(300);
			this.setTooltip('');
			this.setHelpUrl('');
		},
	};

	Blockly.Python.image_get = (block) => {
		// TODO: Assemble Python into code variable.
		const code = `'${block.svgGroup_.getElementsByTagName('image')[0].getAttribute('xlink:href')}'`;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.JavaScript.ORDER_NONE];
	};
})();

// image exist on area
(() => {
	Blockly.Blocks.image_find_area_number = {
		init() {
			this.appendValueInput('image_localized').setCheck('img').appendField('exist image on area');
			this.appendDummyInput()
				.appendField('x1:')
				.appendField(new Blockly.FieldNumber(0, 0), 'fromX')
				.appendField('y1:')
				.appendField(new Blockly.FieldNumber(0, 0), 'fromY');
			this.appendDummyInput()
				.appendField('x2:')
				.appendField(new Blockly.FieldNumber(0, 0), 'toX')
				.appendField('y2:')
				.appendField(new Blockly.FieldNumber(0, 0), 'toY');
			this.appendDummyInput()
				.appendField('finding image the mouse will: ')
				.appendField(
					new Blockly.FieldDropdown([
						['Nothing', 'nothing'],
						['Left Click', 'left_click'],
						['Double Click', 'double_click'],
						['Right Click', 'right_click'],
						['Middle Click', 'middle_click'],
						['Drag and Drop', 'drag_and_drop'],
						['Move To', 'move_to'],
					]),
					'mouse_options',
				);
			this.setOutput(true, 'Boolean');
			this.setColour(300);
			this.setTooltip('');
			this.setHelpUrl('');
		},
	};

	Blockly.Python.image_find_area_number = (block) => {
		const imageLocalized = Blockly.Python.valueToCode(block, 'image_localized', Blockly.Python.ORDER_ATOMIC);
		const fromX = block.getFieldValue('fromX');
		const fromY = block.getFieldValue('fromY');
		const toX = block.getFieldValue('toX');
		const toY = block.getFieldValue('toY');
		const mouseOptions = block.getFieldValue('mouse_options');
		// TODO: Assemble Python into code variable.
		const code = `findImage${imageLocalized.substring(
			0,
			imageLocalized.length - 1,
		)}, { 'fromX': ${fromX}, 'fromY': ${fromY}, 'toX': ${toX}, 'toY': ${toY}, 'mouseWill': '${mouseOptions}' })`;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};
})();

// image exist on screen
(() => {
	Blockly.Blocks.image_find_screen = {
		init() {
			this.appendValueInput('image_localized').setCheck('img').appendField('exist image on screen');
			this.appendDummyInput()
				.appendField('finding image the mouse will: ')
				.appendField(
					new Blockly.FieldDropdown([
						['Nothing', 'nothing'],
						['Left Click', 'left_click'],
						['Right Click', 'right_click'],
						['Drag', 'drag'],
						['Move', 'move'],
					]),
					'mouse_options',
				);
			this.setInputsInline(false);
			this.setOutput(true, 'Boolean');
			this.setColour(300);
			this.setTooltip('');
			this.setHelpUrl('');
		},
	};

	Blockly.Python.image_find_screen = (block) => {
		const imageLocalized = Blockly.Python.valueToCode(block, 'image_localized', Blockly.Python.ORDER_ATOMIC);
		const mouseOptions = block.getFieldValue('mouse_options');
		// TODO: Assemble JavaScript into code variable.
		const code = `findImage${imageLocalized.substring(
			0,
			imageLocalized.length - 1,
		)}, { 'mouseWill': '${mouseOptions}' })`;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};
})();

// get text from screen area
(() => {
	Blockly.Blocks.screen_gext_text_from_area = {
		init() {
			this.appendDummyInput().appendField('get text from area');
			this.appendDummyInput()
				.appendField('x1:')
				.appendField(new Blockly.FieldNumber(0, 0), 'fromX')
				.appendField('y1:')
				.appendField(new Blockly.FieldNumber(0, 0), 'fromY');
			this.appendDummyInput()
				.appendField('x2:')
				.appendField(new Blockly.FieldNumber(0, 0), 'toX')
				.appendField('y2:')
				.appendField(new Blockly.FieldNumber(0, 0), 'toY');
			this.setOutput(true, 'String');
			this.setColour(300);
			this.setTooltip('');
			this.setHelpUrl('');
		},
	};

	Blockly.Python.screen_gext_text_from_area = (block) => {
		const fromX = block.getFieldValue('fromX');
		const fromY = block.getFieldValue('fromY');
		const toX = block.getFieldValue('toX');
		const toY = block.getFieldValue('toY');
		// TODO: Assemble Python into code variable.
		const code = `screenToText(${fromX},${fromY}, ${toX}, ${toY})\n`;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};
})();

// get number from screen area
(() => {
	Blockly.Blocks.screen_gext_number_from_area = {
		init() {
			this.appendDummyInput().appendField('get number from area');
			this.appendDummyInput()
				.appendField('x1:')
				.appendField(new Blockly.FieldNumber(0, 0), 'fromX')
				.appendField('y1:')
				.appendField(new Blockly.FieldNumber(0, 0), 'fromY');
			this.appendDummyInput()
				.appendField('x2:')
				.appendField(new Blockly.FieldNumber(0, 0), 'toX')
				.appendField('y2:')
				.appendField(new Blockly.FieldNumber(0, 0), 'toY');
			this.setOutput(true, 'Number');
			this.setColour(300);
			this.setTooltip('');
			this.setHelpUrl('');
		},
	};

	Blockly.Python.screen_gext_number_from_area = (block) => {
		const fromX = block.getFieldValue('fromX');
		const fromY = block.getFieldValue('fromY');
		const toX = block.getFieldValue('toX');
		const toY = block.getFieldValue('toY');
		// TODO: Assemble Python into code variable.
		const code = `screenToText(${fromX},${fromY}, ${toX}, ${toY}, True)\n`;
		// TODO: Change ORDER_NONE to the correct strength.
		return [code, Blockly.Python.ORDER_NONE];
	};
})();
