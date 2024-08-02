import esbuild from 'esbuild';

const baseConfig = esbuild.build({
  entryPoints: ['src/main.ts'],
  bundle: true,
  platform: 'node',
  target: 'es2022',
  format: 'esm',
  outdir: 'dist',
  packages: 'external',
  sourcemap: true,
  splitting: true,
});

// check flags : https://esbuild.github.io/api/#build

// for --dev
const devConfig = {
  ...baseConfig,
  watch: true,
  minify: false,
};

// for --build
const buildConfig = {
  ...baseConfig,
  watch: false,
  minify: true,
};

// return config based on the command
export default (args) => {
  try {
    if (args.includes('--dev')) {
      return devConfig;
    } else if (args.includes('--build')) {
      return buildConfig;
    } else {
      throw new Error('Invalid command!\nUse either --dev or --build');
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
