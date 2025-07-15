import * as fs from 'fs';
import { EOL } from 'os';

export default function readFile(filePath: fs.PathOrFileDescriptor) {
  const fileContents = fs.readFileSync(filePath, 'utf8').toString();
  if (EOL !== '\n') {
    return fileContents.replace(/\n/g, EOL);
  }

  return fileContents;
}
