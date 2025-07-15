import DsAccordion from '@mui/material/Accordion';
import { DsAccordion as DsAccordion } from '@mui/material';

<DsAccordion TransitionComponent={CustomTransition} TransitionProps={{ unmountOnExit: true }} />;
<MyAccordion TransitionComponent={CustomTransition} TransitionProps={transitionVars} />;
<DsAccordion
  TransitionComponent={CustomTransition}
  TransitionProps={{ unmountOnExit: true }}
  slots={{
    root: 'div',
  }}
  slotProps={{
    root: { className: 'foo' },
  }}
/>;
<MyAccordion
  TransitionComponent={CustomTransition}
  TransitionProps={{ unmountOnExit: true }}
  slots={{
    ...outerSlots,
  }}
  slotProps={{
    ...outerSlotProps,
  }}
/>;
<DsAccordion TransitionComponent={ComponentTransition} slots={{ transition: SlotTransition }} />;
<DsAccordion TransitionProps={{ unmountOnExit: true }} slotProps={{ transition: { id: 'test' } }} />;
// should skip non MUI components
<NonMuiAccordion
  TransitionComponent={CustomTransition}
  TransitionProps={{ unmountOnExit: true }}
/>;
