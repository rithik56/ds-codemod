import DsMenu from '@mui/material/Menu';
import { DsMenu as DsMenu } from '@mui/material';

<DsMenu
  slotProps={{
    list: { disablePadding: true },
    transition: { timeout: 200 }
  }}
  slots={{
    transition: CustomTransition
  }} />;

<DsMenu
  slotProps={{
    root: {
      disablePortal: true,
    },

    list: { disablePadding: true },
    transition: { timeout: 200 }
  }}
  slots={{
    transition: CustomTransition
  }} />;

<DsMenu
  slotProps={{
    root: {
      disablePortal: true,
    },
    list: {
      ...{ disablePadding: true },

      ...{
        disableListWrap: true,
      }
    },
    transition: {
      ...{ timeout: 200 },

      ...{
        'aria-hidden': true,
      }
    },
  }}
  slots={{
    transition: CustomTransition
  }} />;

<MyMenu
  slotProps={{
    list: { disablePadding: true },
    transition: { timeout: 200 }
  }}
  slots={{
    transition: CustomTransition
  }} />;

<CustomMenu
  TransitionComponent={CustomTransition}
  MenuListProps={{ disablePadding: true }}
  TransitionProps={{ timeout: 200 }}
/>;
