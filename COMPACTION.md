# Compaction Rules

## Purpose

This file preserves the working rules for future stages so the project does not drift during compaction or later handoff.

## Invariants

1. Before every stage, Codex must state:
   - expected file count
   - expected file names
   - expected rough line count per file
   - what is not allowed in that stage
2. If work tries to proceed before that check, Codex must stop and say:
   - `Lillian, stop.`
3. The checklist is the authority for stage scope.
4. If the checklist and a normal scaffold differ, the checklist wins.

## Scope Rules

1. Do only the files listed for the current stage.
2. Do not add extra helper files.
3. Do not add extra styling files unless the checklist explicitly allows them.
4. Do not add app-wide layout, routing, animation, or token expansion unless listed.
5. Business logic is:
   - critical only for clicking
6. If clicking is not required for the stage, do not add behavior.
7. If the locked rules make a usable result impossible, change the smallest possible rule instead of stalling.
8. Prefer minimal, explicit rule changes over additive workaround code.

## Classification Rules

1. Separate via visual saliency.
   - If it clearly looks like its own object, count it separately.
2. Group and classify empirically.
   - Use visible evidence such as repetition, shape, spacing, color, and placement.
   - Do not guess hidden intent.
3. Repeated visual patterns should become one reusable component family.

## Primitive Rules

1. Define once and reuse.
2. Do not repeat the same measurement for the same spacing, padding, or value.
3. Outside spacing is lower priority for the museum when marked not necessary.
4. Inside spacing is part of the object and should be defined when needed.
5. Colors and color modifiers should be separated.
6. Color modifiers include effects such as skewness, gradient, and similar treatments.

## Current Stage

Stage goal:
- Load the left-side recent activity card and the pill items below it as separate museum pieces.

Allowed files for the component stage:
- `Card.tsx`
- `design-tokens.css`
- `Pills.tsx`
- mock data file

Current proposed TSX size:
- `Card.tsx`: 20 to 35 lines
- `Pills.tsx`: 15 to 30 lines

## This Documentation Stage

Allowed files:
- `COMPACTION.md`
- `CLASS_TREE.md`

Not allowed:
- changes to app boot files
- component implementation
- CSS implementation
- mock data implementation
