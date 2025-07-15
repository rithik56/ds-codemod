import DsDialog from '@mui/material/Dialog';
import { DsDialog as DsDialog } from '@mui/material';

<DsDialog
  slots={{
    transition: CustomTransition
  }}
  slotProps={{
    transition: CustomTransitionProps,
    paper: PaperProps
  }} />;
<MyDialog
  slots={{
    transition: CustomTransition
  }}
  slotProps={{
    transition: CustomTransitionProps,
    paper: PaperProps
  }} />;
<DsDialog
  slots={{
    root: 'div',
    transition: CustomTransition
  }}
  slotProps={{
    transition: CustomTransitionProps,
    paper: PaperProps
  }} />;
<MyDialog
  slots={{
    ...outerSlots,
    transition: CustomTransition
  }}
  slotProps={{
    transition: CustomTransitionProps,
    paper: PaperProps
  }} />;
<DsDialog
  slots={{
    root: 'div',
    transition: SlotTransition,
  }}
  slotProps={{
    transition: CustomTransitionProps,
    paper: PaperProps
  }} />;
// should skip non MUI components
<NonMuiDialog
  TransitionComponent={CustomTransition}
  TransitionProps={CustomTransitionProps}
  PaperProps={PaperProps}
/>;
