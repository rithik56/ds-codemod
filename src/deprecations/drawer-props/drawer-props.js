import movePropIntoSlots from '../utils/movePropIntoSlots';
import movePropIntoSlotProps from '../utils/movePropIntoSlotProps';

/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
export default function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const printOptions = options.printOptions;

  movePropIntoSlots(j, {
    root,
    packageName: options.packageName,
    componentName: "DsDrawer",
    propName: 'BackdropComponent',
    slotName: 'backdrop',
  });
  movePropIntoSlots(j, {
    root,
    packageName: options.packageName,
    componentName: "DsSwipeableDrawer",
    propName: 'BackdropComponent',
    slotName: 'backdrop',
  });
  movePropIntoSlots(j, {
    root,
    packageName: options.packageName,
    componentName: "DsBottomSheet",
    propName: 'BackdropComponent',
    slotName: 'backdrop',
  });

  movePropIntoSlotProps(j, {
    root,
    packageName: options.packageName,
    componentName: "DsDrawer",
    propName: 'BackdropProps',
    slotName: 'backdrop',
  });
  movePropIntoSlotProps(j, {
    root,
    packageName: options.packageName,
    componentName: "DsSwipeableDrawer",
    propName: 'BackdropProps',
    slotName: 'backdrop',
  });
  movePropIntoSlotProps(j, {
    root,
    packageName: options.packageName,
    componentName: "DsBottomSheet",
    propName: 'BackdropProps',
    slotName: 'backdrop',
  });

  movePropIntoSlotProps(j, {
    root,
    packageName: options.packageName,
    componentName: "DsDrawer",
    propName: 'PaperProps',
    slotName: 'paper',
  });
  movePropIntoSlotProps(j, {
    root,
    packageName: options.packageName,
    componentName: "DsSwipeableDrawer",
    propName: 'PaperProps',
    slotName: 'paper',
  });
  movePropIntoSlotProps(j, {
    root,
    packageName: options.packageName,
    componentName: "DsBottomSheet",
    propName: 'PaperProps',
    slotName: 'paper',
  });

  movePropIntoSlotProps(j, {
    root,
    packageName: options.packageName,
    componentName: "DsDrawer",
    propName: 'SlideProps',
    slotName: 'transition',
  });
  movePropIntoSlotProps(j, {
    root,
    packageName: options.packageName,
    componentName: "DsSwipeableDrawer",
    propName: 'SlideProps',
    slotName: 'transition',
  });
  movePropIntoSlotProps(j, {
    root,
    packageName: options.packageName,
    componentName: "DsBottomSheet",
    propName: 'SlideProps',
    slotName: 'transition',
  });

  return root.toSource(printOptions);
}
