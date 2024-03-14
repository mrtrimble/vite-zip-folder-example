import { defineConfig } from 'vite';
import zipPack from 'vite-plugin-zip-pack';

export default defineConfig({
  plugins: [
    zipPack({
      inDir: './src/downloads',
      outDir: './dist/downloads',
      outFileName: 'zipped-download.zip',
    }),
  ],
});
