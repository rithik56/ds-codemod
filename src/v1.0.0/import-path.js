const entryModuleToFlatten = [
  "DsBottomNavigation",
  "DsBottomNavigationAction",
  "DsCard",
  "DsCardActions",
  "DsCardContent",
  "DsCardHeader",
  "DsCardMedia",
  "DsCircularProgress",
  "DsClickAwayListener",
  "DsCollapse",
  "DsDialog",
  "DsDialogActions",
  "DsDialogContent",
  "DsDialogContentText",
  "DsDialogTitle",
  'ExpansionPanel',
  'ExpansionPanelActions',
  'ExpansionPanelDetails',
  'ExpansionPanelSummary',
  "DsFade",
  'Form',
  "DsFormControl",
  "DsFormControlLabel",
  "DsFormGroup",
  "DsFormHelperText",
  "DsFormLabel",
  'GridList',
  'GridListTile',
  "DsGrow",
  "DsInput",
  "DsInputLabel",
  "DsLinearProgress",
  "DsList",
  "DsListItem",
  "DsListItemAvatar",
  "DsListItemIcon",
  "DsListItemSecondaryAction",
  "DsListItemText",
  "DsListSubheader",
  "DsMenu",
  "DsMenuItem",
  'Progress',
  "DsRadio",
  "DsRadioGroup",
  "DsSlide",
  "DsStep",
  "DsStepButton",
  "DsStepContent",
  "DsStepper",
  "DsStepper",
  "DsTab",
  "DsTable",
  "DsTableBody",
  "DsTableCell",
  "DsTableFooter",
  "DsTableHead",
  "DsTablePagination",
  "DsTableRow",
  "DsTabs",
  'withWidth',
  "DsZoom",
];

const keepSpecifiers = ['withWidth'];

export default function transformer(fileInfo, api, options) {
  const j = api.jscodeshift;
  let hasModifications = false;
  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
  };

  const importModule = options.importModule || '@material-ui/core';
  const targetModule = options.targetModule || '@material-ui/core';

  const root = j(fileInfo.source);
  const importRegExp = new RegExp(`^${importModule}/(.+)$`);

  root.find(j.ImportDeclaration).forEach((path) => {
    const importPath = path.value.source.value;
    let entryModule = importPath.match(importRegExp);

    // Remove non-MUI imports
    if (!entryModule) {
      return;
    }
    entryModule = entryModule[1].split('/');
    entryModule = entryModule[entryModule.length - 1];

    // No need to flatten
    if (!entryModuleToFlatten.includes(entryModule)) {
      return;
    }

    hasModifications = true;

    if (keepSpecifiers.includes(entryModule)) {
      path.value.source.value = `${targetModule}/${entryModule}`;
      return;
    }

    path.node.specifiers.forEach((specifier) => {
      const localName = specifier.local.name;
      const importedName = specifier.imported ? specifier.imported.name : null;

      if (!importedName) {
        const importStatement = j.importDeclaration(
          [j.importDefaultSpecifier(j.identifier(localName))],
          j.literal(`${targetModule}/${entryModule}`),
        );

        j(path).insertBefore(importStatement);
      } else {
        const importStatement = j.importDeclaration(
          [j.importDefaultSpecifier(j.identifier(localName))],
          j.literal(`${targetModule}/${importedName}`),
        );

        j(path).insertBefore(importStatement);
      }
    });

    path.prune();
  });

  return hasModifications ? root.toSource(printOptions) : null;
}
