import renameProps from '../util/renameProps';
import renameClassKey from '../util/renameClassKey';

export default function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions;

  renameProps({
    root,
    componentName: "DsCollapse",
    props: { collapsedHeight: 'collapsedSize' },
  });

  return renameClassKey({
    root,
    componentName: "DsCollapse",
    classes: { container: 'root' },
    printOptions,
  });
}
