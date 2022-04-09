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

export const DialogBasicExample = ({ title, subText, confirmText = "Ok", closeText = "Cancell" }) => {
  const dialogContentProps = {
    type: DialogType.normal,
    title,
    closeButtonAriaLabel: 'Close',
    subText,
  };

  const [hideDialog, { toggle: toggleHideDialog }] = useBoolean(true);
  const labelId = useId('dialogLabel');
  const subTextId = useId('subTextLabel');

  const modalProps = React.useMemo(
    () => ({
      titleAriaId: labelId,
      subtitleAriaId: subTextId,
      isBlocking: false,
      styles: dialogStyles,
    }),
    [labelId, subTextId],
  );

  return (
    <>
      <DefaultButton secondaryText="Opens the Sample Dialog" onClick={toggleHideDialog} text="Open Dialog" />
      <label id={labelId} className={screenReaderOnly}>
        My sample label
      </label>
      <label id={subTextId} className={screenReaderOnly}>
        My sample description
      </label>

      <Dialog
        hidden={hideDialog}
        onDismiss={toggleHideDialog}
        dialogContentProps={dialogContentProps}
        modalProps={modalProps}
      >
        <DialogFooter>
          <PrimaryButton onClick={toggleHideDialog} text={confirmText} />
          <DefaultButton onClick={toggleHideDialog} text={closeText} />
        </DialogFooter>
      </Dialog>
    </>
  );
};
