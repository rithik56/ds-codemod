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
  const packageName = options.packageName || '@am92/react-design-system'
  movePropIntoSlots(j, {
    root,
    packageName:packageName,
    componentName: 'DsDialog',
    propName: 'TransitionComponent',
    slotName: 'transition',
  });

  movePropIntoSlotProps(j, {
    root,
    packageName:packageName,
    componentName: 'DsDialog',
    propName: 'TransitionProps',
    slotName: 'transition',
  });

  movePropIntoSlotProps(j, {
    root,
    packageName:packageName,
    componentName: 'DsDialog',
    propName: 'PaperProps',
    slotName: 'paper',
  });

  return root.toSource(printOptions);
}
