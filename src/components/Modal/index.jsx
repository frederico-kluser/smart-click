import * as React from 'react';
import { Dialog, DialogType, DialogFooter } from '@fluentui/react/lib/Dialog';
import { PrimaryButton, DefaultButton } from '@fluentui/react/lib/Button';
import { hiddenContentStyle, mergeStyles } from '@fluentui/react/lib/Styling';
import { Toggle } from '@fluentui/react/lib/Toggle';
import { ContextualMenu } from '@fluentui/react/lib/ContextualMenu';
import { useId, useBoolean } from '@fluentui/react-hooks';

const dialogStyles = { main: { maxWidth: 450 } };
const dragOptions = {
  moveMenuItemText: 'Move',
  closeMenuItemText: 'Close',
  menu: ContextualMenu,
  keepInBounds: true,
};
const screenReaderOnly = mergeStyles(hiddenContentStyle);

export const Modal = ({ 
    title,
    subText,
    confirmText = "Ok",
    show,
    confirmFunction,
    cancellText = "Cancell",
    cancellFunction,
  }) => {
  const dialogContentProps = {
    type: DialogType.normal,
    title,
    closeButtonAriaLabel: 'Close',
    subText,
  };

  return (
    <>
      <Dialog
        hidden={!show}
        onDismiss={cancellFunction}
        dialogContentProps={dialogContentProps}
      >
        <DialogFooter>
          <PrimaryButton onClick={confirmFunction} text={confirmText} />
          <DefaultButton onClick={cancellFunction} text={cancellText} />
        </DialogFooter>
      </Dialog>
    </>
  );
};
