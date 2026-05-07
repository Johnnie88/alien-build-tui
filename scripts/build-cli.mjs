import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['cli/index.tsx'],
  bundle: true,
  outfile: 'dist/cli.js',
  platform: 'node',
  format: 'esm',
  external: [], 
  loader: { '.tsx': 'tsx' },
}).catch(() => process.exit(1));
