import transformPickers from '../pickers/preset-safe';
import { JsCodeShiftAPI, JsCodeShiftFileInfo } from '../../types';

export default function transformer(file: JsCodeShiftFileInfo, api: JsCodeShiftAPI, options: any) {
  file.source = transformPickers(file, api, options);

  return file.source;
}
