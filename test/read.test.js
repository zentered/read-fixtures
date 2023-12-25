import { test } from 'node:test'
import assert from 'node:assert/strict'
import readFixtures from '../index.js'

test('readFixtures', async () => {
  const expected = { hello: 'world' }
  const actual = await readFixtures('fixtures', 'file.json')
  assert.deepEqual(actual, expected)
})
