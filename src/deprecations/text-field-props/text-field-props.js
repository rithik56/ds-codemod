import movePropIntoSlotProps from '../utils/movePropIntoSlotProps';

/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
export default function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  const printOptions = options.printOptions;

  movePropIntoSlotProps(j, {
    root,
    packageName: options.packageName,
    componentName: "DsTextField",
    propName: 'InputProps',
    slotName: 'input',
  });

  movePropIntoSlotProps(j, {
    root,
    packageName: options.packageName,
    componentName: "DsTextField",
    propName: 'inputProps',
    slotName: 'input',
  });

  movePropIntoSlotProps(j, {
    root,
    packageName: options.packageName,
    componentName: "DsTextField",
    propName: 'SelectProps',
    slotName: 'select',
  });

  movePropIntoSlotProps(j, {
    root,
    packageName: options.packageName,
    componentName: "DsTextField",
    propName: 'InputLabelProps',
    slotName: 'inputLabel',
  });

  movePropIntoSlotProps(j, {
    root,
    packageName: options.packageName,
    componentName: "DsTextField",
    propName: 'FormHelperTextProps',
    slotName: 'formHelperText',
  });

  return root.toSource(printOptions);
}
