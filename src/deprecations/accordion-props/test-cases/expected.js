import DsAccordion from '@mui/material/Accordion';
import { DsAccordion as DsAccordion } from '@mui/material';

<DsAccordion slots={{
  transition: CustomTransition
}} slotProps={{
  transition: { unmountOnExit: true }
}} />;
<MyAccordion slots={{
  transition: CustomTransition
}} slotProps={{
  transition: transitionVars
}} />;
<DsAccordion
  slots={{
    root: 'div',
    transition: CustomTransition
  }}
  slotProps={{
    root: { className: 'foo' },
    transition: { unmountOnExit: true }
  }} />;
<MyAccordion
  slots={{
    ...outerSlots,
    transition: CustomTransition
  }}
  slotProps={{
    ...outerSlotProps,
    transition: { unmountOnExit: true }
  }} />;
<DsAccordion slots={{ transition: SlotTransition }} />;
<DsAccordion
  slotProps={{ transition: {
    ...{ unmountOnExit: true },
    ...{ id: 'test' }
  } }} />;
// should skip non MUI components
<NonMuiAccordion
  TransitionComponent={CustomTransition}
  TransitionProps={{ unmountOnExit: true }}
/>;
