// Runs after `astro build` and fails it if the output has grown in a way
// nobody would notice. Astro ships an image's original file (some are 26 MB)
// whenever its `src` is read; a stray `.src`, or an Astro upgrade that tracks
// images differently, would quietly bring the originals back into dist/.
import { readdirSync, statSync } from 'node:fs'
import { basename, extname, join } from 'node:path'

const DIST = 'dist'
const SOURCE = 'src/assets/projects'
// The whole build is about 3.6 MB; well past that, something is wrong
const MAX_TOTAL_MB = 20

function files(dir) {
  return readdirSync(dir, { recursive: true })
    .map(f => join(dir, f))
    .filter(f => statSync(f).isFile())
}

const problems = []

// Astro names a copied original `<name>.<8-char hash>.<ext>`; resized and
// converted versions add a suffix after the hash (`<name>.<hash>_<suffix>.<ext>`)
const escape = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const originals = files(SOURCE).map(f => {
  const ext = extname(f)
  return new RegExp(`^${escape(basename(f, ext))}\\.[\\w-]{8}${escape(ext)}$`)
})
const output = files(DIST)
for (const f of output) {
  if (originals.some(re => re.test(basename(f)))) problems.push(`original image shipped: ${f}`)
}

const totalMB = output.reduce((sum, f) => sum + statSync(f).size, 0) / 1e6
if (totalMB > MAX_TOTAL_MB) {
  problems.push(`dist/ is ${totalMB.toFixed(1)} MB, over the ${MAX_TOTAL_MB} MB limit`)
}

if (problems.length) {
  console.error(`check-dist: failed\n${problems.map(p => `  - ${p}`).join('\n')}`)
  process.exit(1)
}
console.log(`check-dist: ok (${totalMB.toFixed(1)} MB, no original images)`)
