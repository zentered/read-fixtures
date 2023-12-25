import { join } from 'node:path'
import { readFile } from 'node:fs/promises'

export default async function readFixtures(folder = 'fixtures', name) {
  const rawFile = await readFile(
    join(process.cwd(), 'test', folder, name),
    'utf8'
  )
  return JSON.parse(rawFile)
}
