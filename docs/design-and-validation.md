# Design and validation

## Approved redesign

Approach B: **Proof → method → demos.** Lead with Formosa career evidence and frame for AI Implementation & Process Transformation roles. The former dark/lime visual treatment is replaced with `#F7F5F0` canvas, `#111` text, soft charcoal rules, `#0B5F6B` teal, serif display type, clean sans body, whitespace, an asymmetric proof-first hero, and memo section numbering.

Flow: hero and attributed Formosa metrics → hiring ask/evidence map → Understand / Choose / Implement / Verify → illustrative ROI and exactly three supplied project links → supporting career spine → email contact. No people-leadership, engineering-depth, clearance, FAR/DFARS, or WMS/TMS ownership claims. AI work is hands-on, AI-assisted building with available tools.

## Journey and transferable patterns

User job: a hiring manager assesses Evan's fit for an implementation/process role. Finish line: the visitor can connect a hiring requirement to career evidence or inspectable work and contact Evan. Primary action: **View work**; email is secondary until the contact section. Natural usage is occasional hiring evaluation, not daily retention.

The approved hierarchy is controlling. Research informs navigation and feedback, not a different design:

- LinkedIn's [October 2026 business highlights](https://news.linkedin.com/2026/October/q1-business-highlights) reports more than 1.4B members; this is adoption, not cohort retention. Transfer the familiar evidence-to-professional-contact path. No sign-in or feed is needed here.
- Notion's [customer stories](https://www.notion.com/customers) reports 100M users across 50+ countries and 62% of Fortune 100; these are adoption proxies, not retention. Transfer concise problem-oriented examples and inspectable artifacts.
- [NN/g's page-visit research](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/) supports making the value proposition apparent early. The simpler path here is one document with anchored sections and a calculator producing immediate output before any contact step.

LinkedIn's statement that engagement is deepening is qualitative engagement evidence, not quantified retention. No portfolio retention improvement is claimed. Success can later be assessed through consenting user feedback about fit comprehension, calculator completion, demo inspection, and contact intent; no tracking vendor or telemetry is added.

## Calculator

Weekly hours = tasks/week × max(0, minutes before − minutes after) ÷ 60.
Annual capacity value = weekly hours × hourly rate × 52.
First-year net = annual capacity value − annual tool cost − implementation cost.
Payback months = implementation cost ÷ ((annual capacity value − annual tool cost) ÷ 12), or null if the denominator is non-positive.

All six inputs must be finite, non-negative numbers. UI bounds prevent unusable huge values; task volume is whole tasks. Money/time precision is retained in the calculation, rounded only for display. Blank/invalid inputs clear stale results and announce recovery guidance. Reset restores sample values. Zero/negative net shows **No payback**. Slower workflows release zero hours per the approved formula and require separate evaluation of additional time cost. **Capacity ≠ cash unless spend actually drops.**

## Release checks

- `npm test` checks the approved formulas, no-payback cases, zero setup, no volume/value, precision, invalid values, and overflow.
- Browser verification covers the hero and section order, all six live inputs, invalid recovery, reset, no payback, math disclosure, anchored navigation, exact demo/contact URLs, responsive overflow, keyboard access, and reduced motion.
- Preview must precede production assignment. Confirm team, project, Git source SHA, static build settings, READY state, and final public alias.
- Local coordinator registration is unavailable for this fresh project. Its selector rejects unknown roots; no database, global registry, or unrelated project state is changed. Git branch/PR and these checks are the evidence for this task.
