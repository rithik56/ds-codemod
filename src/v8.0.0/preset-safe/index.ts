import transformCharts from '../charts/preset-safe';
import { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../types';

export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  file.source = transformCharts(file, api, options);

  return file.source;
}
