import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      exports: 'named',
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    peerDepsExternal(),
    json(),
    resolve(),
    commonjs(),
    postcss({
      modules: true,
      extract: false,
      minimize: true,
      sourceMap: true
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx']
    }),
  ],
};
