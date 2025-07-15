import DsSnackbar from '@org/ui/material/Snackbar';
import { DsSnackbar as MySnackbar } from '@org/ui/material';

<DsSnackbar
  slots={{
    transition: CustomTransition
  }}
  slotProps={{
    transition: CustomTransitionProps,
    content: CustomContentProps,
    clickAwayListener: CustomListenerProps
  }} />;
<MySnackbar
  slots={{
    transition: CustomTransition
  }}
  slotProps={{
    transition: CustomTransitionProps,
    content: CustomContentProps,
    clickAwayListener: CustomListenerProps
  }} />;
<DsSnackbar
  slots={{
    root: 'div',
    transition: CustomTransition
  }}
  slotProps={{
    transition: CustomTransitionProps,
    content: CustomContentProps,
    clickAwayListener: CustomListenerProps
  }} />;
<MySnackbar
  slots={{
    ...outerSlots,
    transition: CustomTransition
  }}
  slotProps={{
    transition: CustomTransitionProps,
    content: CustomContentProps,
    clickAwayListener: CustomListenerProps
  }} />;
<DsSnackbar
  slots={{
    root: 'div',
    transition: SlotTransition,
  }}
  slotProps={{
    transition: CustomTransitionProps,
    content: CustomContentProps,
    clickAwayListener: CustomListenerProps
  }} />;

// should skip non MUI components
<NonMuiSnackbar
  ClickAwayListenerProps={CustomListenerProps}
  ContentProps={CustomContentProps}
  TransitionComponent={CustomTransition}
  TransitionProps={CustomTransitionProps}
/>;
