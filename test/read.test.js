import { test } from 'node:test'
import assert from 'node:assert/strict'
import readFixtures from '../index.js'

test('readFixtures with default folder', async () => {
  const expected = { hello: 'world' }
  const actual = await readFixtures('file.json')
  assert.deepEqual(actual, expected)
})

test('readFixtures with custom folder', async () => {
  const expected = { hello: 'world' }
  const actual = await readFixtures('file.json', 'custom')
  assert.deepEqual(actual, expected)
})
