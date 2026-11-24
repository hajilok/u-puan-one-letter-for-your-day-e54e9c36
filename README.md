[![make.fun · u-puan-one-letter-for-your-day-e54e9c36](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36?ref=41fw6r6c)
[![rank](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/hajilok/u-puan-one-letter-for-your-day-e54e9c36/rank.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36/leaderboard?ref=41fw6r6c)
[![reward](https://make.fun/badge/u-puan-one-letter-for-your-day-e54e9c36/hajilok/u-puan-one-letter-for-your-day-e54e9c36/reward.svg)](https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36?ref=41fw6r6c)

# One Letter for Your Day (`u-puan-one-letter-for-your-day-e54e9c36`)

Deterministic `program/v1` entry for the [make.fun](https://make.fun/r/41fw6r6c) **One Letter for Your Day** competition.

## Overview

`main.ts` deterministically writes a single uppercase ASCII letter (`N` — exact 1 UTF-8 byte, `0x4E`, no trailing newline) to `/output/entry.txt`, self-validating character count, byte size, non-whitespace constraint, and read-back integrity before exiting with status `0`.

## Selection Methodology

Chosen via multi-round blind pairwise evaluation (both `A vs B` and `B vs A` orderings) under the verbatim competition judge criteria (vividness, immediate deadpan wit, real-day honesty, and letter-to-word sound/shape fit), optimizing jointly for pairwise judge win rate and anti-Schelling uniqueness eligibility.

## Run Locally

```bash
node main.ts --out /tmp/entry.txt
```

Without `--out`, the program writes directly to `/output/entry.txt` as required by the `program/v1` sandbox.

## License

MIT — see [LICENSE](./LICENSE).
