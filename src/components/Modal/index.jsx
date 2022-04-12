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

export const modalPropertyFixer = (properties) => ({ 
  cancellText: properties.cancellText || modalDefaultConfig.cancellText,
  cancellFunction: properties.cancellFunction || modalDefaultConfig.cancellFunction,
  confirmText: properties.confirmText || modalDefaultConfig.confirmText,
  confirmFunction: properties.confirmFunction || modalDefaultConfig.confirmFunction,
  subText: properties.subText || modalDefaultConfig.subText,
  title: properties.title || modalDefaultConfig.title,
  type: properties.type || modalDefaultConfig.type,
});

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
