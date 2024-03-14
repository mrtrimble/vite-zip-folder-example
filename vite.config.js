import { defineConfig } from 'vite';
import { readdirSync } from 'fs';
import zipPack from 'vite-plugin-zip-pack';

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const zipPackModules = getDirectories('./src/downloads').map((module) => {
  return zipPack({
    inDir: `./src/downloads/${module}`,
    outDir: `./dist/${module}`,
    outFileName: `${module}`,
  });
});

export default defineConfig({
  plugins: [
    zipPackModules
  ],
});
