import DsAccordion from '@org/ui/material/Accordion';
import { DsAccordion as MyAccordion } from '@org/ui/material';

<DsAccordion TransitionProps={{ unmountOnExit: true }} slots={{
  transition: CustomTransition
}} />;
<MyAccordion TransitionProps={transitionVars} slots={{
  transition: CustomTransition
}} />;
<DsAccordion
  TransitionProps={{ unmountOnExit: true }}
  slots={{
    root: 'div',
    transition: CustomTransition
  }}
  slotProps={{
    root: { className: 'foo' },
  }} />;
<MyAccordion
  TransitionProps={{ unmountOnExit: true }}
  slots={{
    ...outerSlots,
    transition: CustomTransition
  }}
  slotProps={{
    ...outerSlotProps,
  }} />;
<DsAccordion slots={{ transition: SlotTransition }} />;
<DsAccordion TransitionProps={{ unmountOnExit: true }} slotProps={{ transition: { id: 'test' } }} />;
// should skip non MUI components
<NonMuiAccordion
  TransitionComponent={CustomTransition}
  TransitionProps={{ unmountOnExit: true }}
/>;
