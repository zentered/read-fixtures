# read-fixtures

> [!WARNING]
> This package is deprecated and no longer maintained. Read fixtures with `JSON.parse(await readFile(new URL('./fixtures/name.json', import.meta.url)))` from `node:fs/promises` instead.

Tiny helper function to read JSON fixtures for tests

```bash
npm install @zentered/read-fixtures
```

## Usage

```js
import { test } from 'node:test'
import assert from 'node:assert/strict'
import readFixture from '@zentered/read-fixtures'

test('process events', async () => {
  const mockData = await readFixture('log_stream.json')
  assert.deepEqual(mockData, { hello: 'world' })
})
```

### Arguments

| Argument | Default      | Description                                        |
| -------- | ------------ | -------------------------------------------------- |
| `name`   | required     | File name of the JSON fixture, for example `log_stream.json`. |
| `folder` | `'fixtures'` | Folder under `test/` that holds the file.          |

Files resolve from `process.cwd()/test/<folder>/<name>`. Run tests from the project root so `process.cwd()` points there.

```js
// reads test/custom/log_stream.json
const mockData = await readFixture('log_stream.json', 'custom')
```
