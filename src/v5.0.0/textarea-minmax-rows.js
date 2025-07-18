import renameProps from '../util/renameProps';

/**
 * @param {import('jscodeshift').FileInfo} file
 * @param {import('jscodeshift').API} api
 */
export default function transformer(file, api, options) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions;

  renameProps({
    root,
    componentName: "DsTextareaAutosize",
    props: { rows: 'minRows', rowsMin: 'minRows', rowsMax: 'maxRows' },
  });

  renameProps({
    root,
    componentName: "DsTextField",
    props: { rowsMin: 'minRows', rowsMax: 'maxRows' },
  });

  return root.toSource(printOptions);
}
