import test from 'ava';
import execa from 'execa';

test('help option flag describes CLI', async t => {
  const { stdout } = await execa('./dist/index.js', ['--help']);
  t.true(stdout.length > 0);
});
