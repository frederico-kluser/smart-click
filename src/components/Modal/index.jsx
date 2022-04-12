import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from '@fluentui/react/lib/Dialog';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import { TextField } from '@fluentui/react';

export const modalDefaultConfig = {
  cancellFunction: () => {},
  cancellText: 'Cancell',
  confirmFunction: () => {},
	confirmText: 'Ok',
	show: false,
	subText: 'Modal SubText',
	title: 'Modal Title',
  type: 'default',
}

const types = {
  default: 'default',
  input: 'input',
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

export const Modal = ({ 
    cancellFunction,
    cancellText,
    confirmFunction,
    confirmText,
    show,
    subText,
    title,
    type,
  }) => {
  const dialogContentProps = {
    type: DialogType.normal,
    title,
    closeButtonAriaLabel: 'Close',
    subText,
  };

  if (type === types.input) {
    delete dialogContentProps.subText;
  }

  return (
    <>
      <Dialog
        hidden={!show}
        onDismiss={cancellFunction}
        dialogContentProps={dialogContentProps}
      >
        { type === types.input && <TextField placeholder="Macro Name" /> }
        <DialogFooter>
          <PrimaryButton onClick={confirmFunction} text={confirmText} />
          <DefaultButton onClick={cancellFunction} text={cancellText} />
        </DialogFooter>
      </Dialog>
    </>
  );
};
