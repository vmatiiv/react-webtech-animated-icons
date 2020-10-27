import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
// import includePaths from 'rollup-plugin-includepaths';

const packageJson = require('./package.json');

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

// const includePathOptions = {
//   include: {},
//   paths: ['src/components'],
//   external: [],
//   extensions: ['.js', '.json', '.html'],
// };

export default {
  input: 'src/index.js',
  external: ['styled-components,react'],
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    // includePaths(includePathOptions),
    peerDepsExternal(),
    typescript({ useTsconfigDeclarationDir: true }),
    resolve({
      mainFields: ['module', 'main', 'jsnext:main', 'browser'],

      extensions,
    }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      extensions,
    }),
    postcss(),
  ],
};
