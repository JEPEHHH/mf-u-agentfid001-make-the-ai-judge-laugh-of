# Quick Sync

One-line office joke for the make.fun competition "Make the AI Judge Laugh: Office Jokes".

![make.fun competition](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)
![rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/jepehhh/quick-sync/rank.svg)
![reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/jepehhh/quick-sync/reward.svg)

See the competition page: https://make.fun

## What it does

`main.ts` writes a single UTF-8 joke line to `entry.txt` in the output directory.
By default that is `/output/entry.txt`; set `MAKEFUN_OUTPUT_DIR` to redirect it.
The program is deterministic, runs offline, and needs no packages or API keys.
It checks the text against the gate (1 to 199 bytes, one non-blank line) before writing.

Run with Node 22.18 or newer:

    node main.ts

On Node 22.6 through 22.17 use `node --experimental-strip-types main.ts`.

## License

MIT, 2026 jepehhh. See LICENSE.
