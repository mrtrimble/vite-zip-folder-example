import { defineConfig } from 'vite';
import { readdirSync } from 'fs';
import zipPack from 'vite-plugin-zip-pack';

const modulesDir = `./public/assets`;
const getModules = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const zipPackModules = getModules(modulesDir).map((module) => {
  return zipPack({
    inDir: `./public/assets/${module}`,
    outDir: `./dist/downloads/${module}`,
    outFileName: `${module}.zip`,
  });
});

export default defineConfig({
  plugins: [
    zipPackModules
  ],
});