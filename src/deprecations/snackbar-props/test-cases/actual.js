import DsSnackbar from '@mui/material/Snackbar';
import { DsSnackbar as DsSnackbar } from '@mui/material';

<DsSnackbar
  ClickAwayListenerProps={CustomListenerProps}
  ContentProps={CustomContentProps}
  TransitionComponent={CustomTransition}
  TransitionProps={CustomTransitionProps}
/>;
<MySnackbar
  ClickAwayListenerProps={CustomListenerProps}
  ContentProps={CustomContentProps}
  TransitionComponent={CustomTransition}
  TransitionProps={CustomTransitionProps}
/>;
<DsSnackbar
  ClickAwayListenerProps={CustomListenerProps}
  ContentProps={CustomContentProps}
  TransitionComponent={CustomTransition}
  TransitionProps={CustomTransitionProps}
  slots={{
    root: 'div',
  }}
/>;
<MySnackbar
  ClickAwayListenerProps={CustomListenerProps}
  ContentProps={CustomContentProps}
  TransitionComponent={CustomTransition}
  TransitionProps={CustomTransitionProps}
  slots={{
    ...outerSlots,
  }}
/>;
<DsSnackbar
  ClickAwayListenerProps={CustomListenerProps}
  ContentProps={CustomContentProps}
  TransitionComponent={ComponentTransition}
  TransitionProps={CustomTransitionProps}
  slots={{
    root: 'div',
    transition: SlotTransition,
  }}
/>;

// should skip non MUI components
<NonMuiSnackbar
  ClickAwayListenerProps={CustomListenerProps}
  ContentProps={CustomContentProps}
  TransitionComponent={CustomTransition}
  TransitionProps={CustomTransitionProps}
/>;
