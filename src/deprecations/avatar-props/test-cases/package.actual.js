import DsAvatar from '@org/ui/material/Avatar';
import { DsAvatar as MyAvatar } from '@org/ui/material';

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
