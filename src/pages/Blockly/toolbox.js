const Blockly = require('blockly');
Blockly.Python = Blockly.Python || {}; 

require('./custom/mouse');
require('./custom/time');
require('./custom/image');
require('./custom/keyboard');

const toolbox = {
  kind: 'categoryToolbox',
  contents: [
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
    {
      kind: 'category',
      name: 'Mouse',
      contents: [
        {
          kind: 'block',
          type: 'mouse_move',
        },
        {
          kind: 'block',
          type: 'mouse_move_number',
        },
        {
          kind: 'block',
          type: 'mouse_left_click',
        },
        {
          kind: 'block',
          type: 'mouse_right_click',
        },
        {
          kind: 'block',
          type: 'mouse_double_click',
        },
        {
          kind: 'block',
          type: 'mouse_drag',
        },
        {
          kind: 'block',
          type: 'mouse_drag_number',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Keyboard',
      contents: [
        {
          kind: 'block',
          type: 'keyboard_type_variabel_interval',
        },
        {
          kind: 'block',
          type: 'keyboard_type_number_interval',
        },
        {
          kind: 'block',
          type: 'keyboard_hotkey',
        },
        {
          kind: 'block',
          type: 'keyboard_press',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Time',
      contents: [
        {
          kind: 'block',
          type: 'wait_hours_variable',
        },
        {
          kind: 'block',
          type: 'wait_hours_number',
        },
        {
          kind: 'block',
          type: 'wait_minutes_variable',
        },
        {
          kind: 'block',
          type: 'wait_minutes_number',
        },
        {
          kind: 'block',
          type: 'wait_seconds_variable',
        },
        {
          kind: 'block',
          type: 'wait_seconds_number',
        },
        {
          kind: 'block',
          type: 'wait_milliseconds_variable',
        },
        {
          kind: 'block',
          type: 'wait_milliseconds_number',
        },
      ],
    },
    {
      kind: 'category',
      name: 'Image',
      contents: [
        {
          kind: 'block',
          type: 'image_get',
        },
        {
          kind: 'block',
          type: 'image_find_area_number',
        },
        {
          kind: 'block',
          type: 'image_find_screen',
        },
        {
          kind: 'block',
          type: 'screen_gext_text_from_area',
        },
        {
          kind: 'block',
          type: 'screen_gext_number_from_area',
        },
      ],
    },
  ],
};

module.exports = toolbox;
