import { writeFileSync, mkdirSync } from 'fs';
import 'dotenv/config';

const targethPath = './src/environments/environments.ts';
const envFileContent = `
export const environment = {
  mapbox_key: "${ process.env['MAPBOX_KEY'] }"
};
`;
mkdirSync('./src/environments', { recursive: true });
writeFileSync(targethPath, envFileContent);
