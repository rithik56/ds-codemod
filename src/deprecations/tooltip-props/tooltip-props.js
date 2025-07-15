import replaceComponentsWithSlots from '../utils/replaceComponentsWithSlots';
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

  replaceComponentsWithSlots(j, {
    root,
    packageName: options.packageName,
    componentName: "DsTooltip",
  });

  movePropIntoSlots(j, {
    root,
    packageName: options.packageName,
    componentName: "DsTooltip",
    propName: 'PopperComponent',
    slotName: 'popper',
  });

  movePropIntoSlotProps(j, {
    root,
    packageName: options.packageName,
    componentName: "DsTooltip",
    propName: 'PopperProps',
    slotName: 'popper',
  });

  movePropIntoSlots(j, {
    root,
    packageName: options.packageName,
    componentName: "DsTooltip",
    propName: 'TransitionComponent',
    slotName: 'transition',
  });

  movePropIntoSlotProps(j, {
    root,
    packageName: options.packageName,
    componentName: "DsTooltip",
    propName: 'TransitionProps',
    slotName: 'transition',
  });

  return root.toSource(printOptions);
}
