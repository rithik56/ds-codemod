import DsMenu from '@mui/material/Menu';
import { DsMenu as DsMenu } from '@mui/material';

<DsMenu
  TransitionComponent={CustomTransition}
  MenuListProps={{ disablePadding: true }}
  TransitionProps={{ timeout: 200 }}
/>;

<DsMenu
  TransitionComponent={CustomTransition}
  MenuListProps={{ disablePadding: true }}
  TransitionProps={{ timeout: 200 }}
  slotProps={{
    root: {
      disablePortal: true,
    },
  }}
/>;

<DsMenu
  TransitionComponent={CustomTransition}
  MenuListProps={{ disablePadding: true }}
  TransitionProps={{ timeout: 200 }}
  slotProps={{
    root: {
      disablePortal: true,
    },
    list: {
      disableListWrap: true,
    },
    transition: {
      'aria-hidden': true,
    },
  }}
/>;

<MyMenu
  TransitionComponent={CustomTransition}
  MenuListProps={{ disablePadding: true }}
  TransitionProps={{ timeout: 200 }}
/>;

<CustomMenu
  TransitionComponent={CustomTransition}
  MenuListProps={{ disablePadding: true }}
  TransitionProps={{ timeout: 200 }}
/>;
