# read-fixtures

Tiny helper function to read JSON fixtures for tests

```bash
npm install @zentered/read-fixtures
```

## Usage

```js
import { test, mock } from 'node:test'
import assert from 'node:assert/strict'
import readFixture from '@zentered/read-fixtures'

test('process events', async () => {
  const mockData = await readFixture('log_stream.json')
  ...
})
```
