import DsAvatar from '@mui/material/Avatar';
import { DsAvatar as DsAvatar } from '@mui/material';

<DsAvatar
  slotProps={{
    img: {
      onError: () => {},
      onLoad: () => {},
    }
  }}
/>;
<MyAvatar
  slotProps={{
    img: {
      onError: () => {},
      onLoad: () => {},
    }
  }}
/>;
<MyAvatar
  slotProps={{
    img: {
      ...{
        onLoad: () => {},
      },

      ...{
        onError: () => {},
      }
    },
  }} />;

// should skip non MUI components
<NonMuiAvatar
  imgProps={{
    onError: () => {},
    onLoad: () => {},
  }}
/>;
