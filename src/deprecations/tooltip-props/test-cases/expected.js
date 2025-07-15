import DsTooltip from '@mui/material/Tooltip';
import { DsTooltip as DsTooltip } from '@mui/material';

<DsTooltip
  slots={{
    arrow: ComponentsArrow,
    popper: ComponentsPopper,
    tooltip: ComponentsTooltip,
    transition: ComponentsTransition
  }}
  slotProps={{
    arrow: componentsArrowProps,
    popper: componentsPopperProps,
    tooltip: componentsTooltipProps,
    transition: componentsTransitionProps
  }}
/>;
<DsTooltip
  slots={{
    tooltip: SlotsTooltip,
    arrow: ComponentsArrow
  }}
  slotProps={{
    tooltip: slotsTooltipProps,
    arrow: componentsArrowProps
  }} />;
<DsTooltip
  slots={{ tooltip: SlotsTooltip, arrow: SlotsArrow }}
  slotProps={{ tooltip: slotsTooltipProps, arrow: {
    ...componentsArrowProps,
    ...slotsArrowProps
  } }} />;
<DsTooltip
  slots={{ tooltip: SlotsTooltip, arrow: SlotsArrow }}
  slotProps={{ arrow: {
    ...componentsArrowProps,
    ...slotsArrowProps
  }, tooltip: {
    ...componentsTooltipProps,
    ...slotsTooltipProps
  } }} />;
<DsTooltip
  slots={{
    arrow: SlotsArrow,
    popper: SlotsPopper,
    tooltip: SlotsTooltip,
    transition: SlotsTransition
  }}
  slotProps={{
    arrow: {
      ...componentsArrowProps,
      ...slotsArrowProps
    },
    popper: {
      ...componentsPopperProps,
      ...slotsPopperProps
    },
    tooltip: {
      ...componentsTooltipProps,
      ...slotsTooltipProps
    },
    transition: {
      ...componentsTransitionProps,
      ...slotsTransitionProps
    }
  }} />;

<DsTooltip
  slots={{
    popper: CustomPopper,
    transition: CustomTransition
  }}
  slotProps={{
    popper: { disablePortal: true },
    transition: { timeout: 200 }
  }} />;

<DsTooltip
  slotProps={{
    tooltip: { height: 20 },
    popper: { disablePortal: true },
    transition: { timeout: 200 }
  }}
  slots={{
    tooltip: "div",
    popper: CustomPopper,
    transition: CustomTransition
  }} />;

<MyTooltip
  slots={{
    popper: CustomPopper,
    transition: CustomTransition
  }}
  slotProps={{
    popper: { disablePortal: true },
    transition: { timeout: 200 }
  }} />;

<CustomTooltip
  PopperComponent={CustomPopper}
  TransitionComponent={CustomTransition}
  PopperProps={{ disablePortal: true }}
  TransitionProps={{ timeout: 200 }}
/>
