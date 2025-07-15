import replaceComponentsWithSlots from '../utils/replaceComponentsWithSlots';
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
    componentName: 'DsListItemText',
  });

  movePropIntoSlotProps(j, {
    root,
    packageName: options.packageName,
    componentName: 'DsListItemText',
    propName: 'primaryTypographyProps',
    slotName: 'primary',
  });

  movePropIntoSlotProps(j, {
    root,
    packageName: options.packageName,
    componentName: 'DsListItemText',
    propName: 'secondaryTypographyProps',
    slotName: 'secondary',
  });

  return root.toSource(printOptions);
}
