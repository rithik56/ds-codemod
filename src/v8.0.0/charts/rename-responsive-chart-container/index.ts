import type { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../../types';
import { renameImports } from '../../../util/renameImports';

export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const printOptions = options.printOptions || {
    quote: 'single',
    trailingComma: true,
    wrapColumn: 40,
  };

  renameImports({
    j,
    root,
    packageNames: ['@am92/react-design-system'],
    imports: [
      {
        oldEndpoint: 'DsResponsiveChartContainer',
        newEndpoint: 'DsChartContainer',
        importsMapping: {
          DsResponsiveChartContainer: 'DsChartContainer',
        },
      },
    ],
  });

  return root.toSource(printOptions);
}
