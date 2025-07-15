import DsAlert from '@mui/material/Alert';

<DsAlert
  slots={{
    closeButton: ComponentsButton
  }}
  slotProps={{ closeButton: componentsButtonProps }}
/>;
<DsAlert
  slots={{
    closeIcon: SlotsIcon,
    closeButton: ComponentsButton
  }}
  slotProps={{
    closeIcon: slotsIconProps,
    closeButton: componentsButtonProps
  }} />;
<DsAlert
  slots={{ closeIcon: SlotsIcon, closeButton: SlotsButton }}
  slotProps={{ closeIcon: slotsIconProps, closeButton: {
    ...componentsButtonProps,
    ...slotsButtonProps
  } }} />;
<DsAlert
  slots={{ closeIcon: SlotsIcon, closeButton: SlotsButton }}
  slotProps={{ closeButton: {
    ...componentsButtonProps,
    ...slotsButtonProps
  }, closeIcon: {
    ...componentsIconProps,
    ...slotsIconProps
  } }} />;
