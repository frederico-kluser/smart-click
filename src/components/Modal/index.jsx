import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from '@fluentui/react/lib/Dialog';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import { TextField } from '@fluentui/react';
import eventEmitter from '../../utils/event';

const types = {
  default: 'default',
  input: 'input',
}

export const modalDefaultConfig = {
  cancellFunction: () => {},
  cancellText: 'Cancell',
  confirmFunction: () => {},
	confirmText: 'Ok',
  placeholder: '',
	show: false,
	subText: 'Modal SubText',
	title: 'Modal Title',
  type: types.default,
}

// create a automization of replace properties ignoring the 'show' property
export const modalPropertyFixer = (properties) => {
  const fixedObject = {};

  Object.keys(modalDefaultConfig).forEach((property) => {
    if (property !== 'show') {
      fixedObject[property] = properties[property] || modalDefaultConfig[property];
    }
  });

  return fixedObject;
};

/**
 * Open a custom modal prompt that return a promise
 * @param {object} config object with modal settings 
 * @param {number} config.title modal title
 * @param {string} [config.placeholder] placeholder for input
 * @param {function} [config.confirmFunction] function to be called when confirm button is clicked
 * @param {string} [config.confirmText] text for confirm button
 * @param {function} [config.cancellFunction] function to be called when cancell button is clicked
 * @param {string} [config.cancellText] text for cancell button
 * @returns {string|null} modal html
 */
export const modalPrompt = async (config) => new Promise((resolve, reject) => {
  eventEmitter.emit('openModal', {...config, type: types.input});
  eventEmitter.on('closeModal', () => {
    resolve(null);
  });
  eventEmitter.on('confirmModal', (data) => {
    resolve(data);
  });
});

/**
 * Open a custom modal alert
 * @param {object} config object with modal settings 
 * @param {number} config.title modal title
 * @param {string} config.subText modal subText
 * @param {function} [config.confirmFunction] function to be called when confirm button is clicked
 * @param {string} [config.confirmText] text for confirm button
 * @param {function} [config.cancellFunction] function to be called when cancell button is clicked
 * @param {string} [config.cancellText] text for cancell button
 * @returns {string|null} modal html
 */
export const modalAlert = async (config) => new Promise((resolve, reject) => {
  eventEmitter.emit('openModal', {...config, type: types.default});
  eventEmitter.on('closeModal', () => {
    resolve(null);
  });
  eventEmitter.on('confirmModal', (data) => {
    resolve(null);
  });
})

export const Modal = ({ 
    cancellFunction,
    cancellText,
    confirmFunction,
    confirmText,
    placeholder,
    show,
    subText,
    title,
    type,
  }) => {
  const [inputValue, setInputValue] = React.useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const dialogContentProps = {
    type: DialogType.normal,
    title,
    closeButtonAriaLabel: 'Close',
    subText,
  };

  if (type === types.input) {
    delete dialogContentProps.subText;
  }

  const handlePrimaryButtonClick = () => {
    confirmFunction();
    if (type === types.input) {
      eventEmitter.emit('confirmModal', inputValue);
    } else {
      eventEmitter.emit('confirmModal');
    }
  }

  const handleSecondaryButtonClick = () => {
    cancellFunction();
    eventEmitter.emit('closeModal');
  }

  return (
    <>
      <Dialog
        hidden={!show}
        onDismiss={cancellFunction}
        dialogContentProps={dialogContentProps}
      >
        { type === types.input && <TextField placeholder={placeholder} onChange={handleInputChange} /> }
        <DialogFooter>
          <PrimaryButton onClick={handlePrimaryButtonClick} text={confirmText} />
          <DefaultButton onClick={handleSecondaryButtonClick} text={cancellText} />
        </DialogFooter>
      </Dialog>
    </>
  );
};
