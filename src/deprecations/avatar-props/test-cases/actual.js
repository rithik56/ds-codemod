import DsAvatar from '@mui/material/Avatar';
import { DsAvatar as DsAvatar } from '@mui/material';

<DsAvatar
  imgProps={{
    onError: () => {},
    onLoad: () => {},
  }}
/>;
<MyAvatar
  imgProps={{
    onError: () => {},
    onLoad: () => {},
  }}
/>;
<MyAvatar
  imgProps={{
    onLoad: () => {},
  }}
  slotProps={{
    img: {
      onError: () => {},
    },
  }}
/>;

// should skip non MUI components
<NonMuiAvatar
  imgProps={{
    onError: () => {},
    onLoad: () => {},
  }}
/>;
