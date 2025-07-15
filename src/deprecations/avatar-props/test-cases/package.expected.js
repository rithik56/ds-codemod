import DsAvatar from '@org/ui/material/Avatar';
import { DsAvatar as MyAvatar } from '@org/ui/material';

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
