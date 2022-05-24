import * as path from 'path'
import { defineConfig } from 'vite-plugin-electron'

export default defineConfig({
  main: {
    entry: 'src/electron-main/index.ts',
  },
  preload: {
    // Must be use absolute path, this is the limit of rollup
    input: path.join(__dirname, 'src/electron-preload/index.ts'),
  },
})