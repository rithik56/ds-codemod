import DsTooltip from '@org/ui/material/Tooltip';
import { DsTooltip as MyTooltip } from '@org/ui/material';

<DsTooltip
  components={{
    Arrow: ComponentsArrow,
    Popper: ComponentsPopper,
    DsTooltip: ComponentsTooltip,
    Transition: ComponentsTransition
  }}
  componentsProps={{
    arrow: componentsArrowProps,
    popper: componentsPopperProps,
    tooltip: componentsTooltipProps,
    transition: componentsTransitionProps
  }}
/>;
<DsTooltip
  slots={{ tooltip: SlotsTooltip }}
  components={{ Arrow: ComponentsArrow }}
  slotProps={{ tooltip: slotsTooltipProps }}
  componentsProps={{ arrow: componentsArrowProps }}
/>;
<DsTooltip
  slots={{ tooltip: SlotsTooltip, arrow: SlotsArrow }}
  components={{ Arrow: ComponentsArrow }}
  slotProps={{ tooltip: slotsTooltipProps, arrow: slotsArrowProps }}
  componentsProps={{ arrow: componentsArrowProps }}
/>;
<DsTooltip
  slots={{ tooltip: SlotsTooltip, arrow: SlotsArrow }}
  components={{ Arrow: ComponentsArrow }}
  slotProps={{ tooltip: slotsTooltipProps, arrow: slotsArrowProps }}
  componentsProps={{ arrow: componentsArrowProps, tooltip: componentsTooltipProps}}
/>;
<DsTooltip
  slots={{
    arrow: SlotsArrow,
    popper: SlotsPopper,
    tooltip: SlotsTooltip,
    transition: SlotsTransition
  }}
  components={{
    Arrow: ComponentsArrow,
    Popper: ComponentsPopper,
    DsTooltip: ComponentsTooltip,
    Transition: ComponentsTransition
  }}
  slotProps={{
    arrow: slotsArrowProps,
    popper: slotsPopperProps,
    tooltip: slotsTooltipProps,
    transition: slotsTransitionProps
  }}
  componentsProps={{
    arrow: componentsArrowProps,
    popper: componentsPopperProps,
    tooltip: componentsTooltipProps,
    transition: componentsTransitionProps
  }}
/>;

<DsTooltip
  PopperComponent={CustomPopper}
  TransitionComponent={CustomTransition}
  PopperProps={{ disablePortal: true }}
  TransitionProps={{ timeout: 200 }}
/>;

<DsTooltip
  PopperComponent={CustomPopper}
  TransitionComponent={CustomTransition}
  PopperProps={{ disablePortal: true }}
  TransitionProps={{ timeout: 200 }}
  slotProps={{
    tooltip: { height: 20 }
  }}
  slots={{
    tooltip: "div",
  }}
/>;

<MyTooltip
  PopperComponent={CustomPopper}
  TransitionComponent={CustomTransition}
  PopperProps={{ disablePortal: true }}
  TransitionProps={{ timeout: 200 }}
/>;

<CustomTooltip
  PopperComponent={CustomPopper}
  TransitionComponent={CustomTransition}
  PopperProps={{ disablePortal: true }}
  TransitionProps={{ timeout: 200 }}
/>
