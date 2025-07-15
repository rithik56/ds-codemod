import DsAlert from '@mui/material/Alert';

<DsAlert
  components={{ CloseButton: ComponentsButton }}
  componentsProps={{ closeButton: componentsButtonProps }}
/>;
<DsAlert
  slots={{ closeIcon: SlotsIcon }}
  components={{ CloseButton: ComponentsButton }}
  slotProps={{ closeIcon: slotsIconProps }}
  componentsProps={{ closeButton: componentsButtonProps }}
/>;
<DsAlert
  slots={{ closeIcon: SlotsIcon, closeButton: SlotsButton }}
  components={{ CloseButton: ComponentsButton }}
  slotProps={{ closeIcon: slotsIconProps, closeButton: slotsButtonProps }}
  componentsProps={{ closeButton: componentsButtonProps }}
/>;
<DsAlert
  slots={{ closeIcon: SlotsIcon, closeButton: SlotsButton }}
  components={{ CloseButton: ComponentsButton }}
  slotProps={{ closeIcon: slotsIconProps, closeButton: slotsButtonProps }}
  componentsProps={{ closeButton: componentsButtonProps, closeIcon: componentsIconProps }}
/>;
