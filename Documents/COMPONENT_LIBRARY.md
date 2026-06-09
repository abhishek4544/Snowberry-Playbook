# Component Library

> Source of truth: Figma. This document is a registry only — always inspect Figma before implementing.
> Figma file: https://www.figma.com/design/I02tmA6iTr4Z9nKGNi4hki/Snowberry-Web-app

---

## BTN-001

**Name:** Primary Button
**Figma:** Button/Primary
**Library path:** `library/components/Button`
**Purpose:** Primary CTA — the single most important action on a view.

**Rules:**
- Only one per section
- Minimum width 120px
- Use `color="brand"` on the `<Button>` component
- Never use for destructive actions — use BTN-005 (Danger) instead

---

## BTN-002

**Name:** Secondary Button
**Figma:** Button/Secondary
**Library path:** `library/components/Button`
**Purpose:** Secondary actions that support but don't compete with the primary CTA.

**Rules:**
- Use `color="secondary"` on the `<Button>` component
- Can appear alongside BTN-001 but must be visually subordinate

---

## BTN-003

**Name:** Tertiary Button
**Figma:** Button/Tertiary
**Library path:** `library/components/Button`
**Purpose:** Low-emphasis actions — cancel, go back, optional steps.

**Rules:**
- Use `color="tertiary"` on the `<Button>` component
- Use when action is optional or reversible

---

## BTN-004

**Name:** AI Button
**Figma:** Button/AI
**Library path:** `library/components/Button`
**Purpose:** Triggers AI-powered actions exclusively.

**Rules:**
- Use `color="ai"` on the `<Button>` component
- Only use for AI-initiated actions — do not repurpose as a generic CTA
- Gradient background: `#35B0FF → #76CDFF` at 245° (rendered via inline style)

---

## BTN-005

**Name:** Danger Button
**Figma:** Button/Danger
**Library path:** `library/components/Button`
**Purpose:** Destructive or irreversible actions (delete, remove, revoke).

**Rules:**
- Use `color="danger"` on the `<Button>` component
- Must be accompanied by a confirmation step for irreversible actions
- Never use as a primary CTA for non-destructive flows

---

## BTN-006

**Name:** Dark Button
**Figma:** Button/Dark
**Library path:** `library/components/Button`
**Purpose:** High-contrast actions on light or image backgrounds.

**Rules:**
- Use `color="dark"` on the `<Button>` component

---

## BTN-007

**Name:** Ghost Button
**Figma:** Button/Ghost
**Library path:** `library/components/Button`
**Purpose:** Minimal-emphasis actions — used in toolbars, inline controls, or dense UI.

**Rules:**
- Use `color="ghost"` on the `<Button>` component
- No background or border — relies on text color alone for identity

---

## BTN-008

**Name:** Link Danger Button
**Figma:** Button/Link Danger
**Library path:** `library/components/Button`
**Purpose:** Inline destructive text-style action (e.g. "Remove", "Unlink").

**Rules:**
- Use `color="link-danger"` on the `<Button>` component
- No border — appears as colored text, not a boxed button
- Use only when space is constrained and a full Danger button is too heavy

---

## CARD-001

**Name:** Content Card
**Figma:** Card/Default (node-id: `3066:7852`, State=Card)
**Library path:** `library/components/Card` *(not yet implemented)*
**Purpose:** Primary container for grouping related content on a page.

**Rules:**
- Use the `State=Card` variant for standard content
- Use `State=Sub card` for nested or secondary content within a card
- Do not nest Card inside Card more than one level deep

---

## INPUT-001

**Name:** Text Input
**Figma:** Input/Text (Inline input, node-id: `2662:15988`)
**Library path:** `library/components/Input` *(not yet implemented)*
**Purpose:** Single-line user text entry.

**Rules:**
- Always pair with a Hint component (HInt, node-id: `2662:15932`) for validation feedback
- Available sizes: Small, Medium
- States: Default → Filled → Focus → Error → Disable
- Password state toggles visibility — do not use a separate component
- Do not create a custom input if this component covers the use case

---

## AVT-001

**Name:** Avatar
**Figma:** Avatar/Single (node-id: `2851:36448`)
**Library path:** `library/components/Avatar`
**Purpose:** Displays a user's identity — image, initials, or placeholder silhouette.

**Variants:** `size` = xs (18px) | sm (24px) | base (32px) | lg (44px) | xl (56px)
**Render fallback:** image → initials (deterministic color) → SVG silhouette

---

## AVT-002

**Name:** AvatarGroup
**Figma:** Avatar/Group (node-id: `2851:36448`)
**Library path:** `library/components/Avatar`
**Purpose:** Stacked row of avatars with an optional overflow counter bubble.

**Variants:** `size` = sm | base | lg  
**Props:** `avatars[]`, `max` (default 4), `overflowCount`

---

## AVT-003

**Name:** AvatarGroupLabel
**Figma:** Avatar/Group Label (node-id: `2851:36448`)
**Library path:** `library/components/Avatar`
**Purpose:** Single avatar paired with a name + optional helper text (email, role, etc.).

**Variants:** `type` = heading-helper | text ; `size` = sm | base | lg | xl

---

## CHK-001

**Name:** Checkbox
**Figma:** Checkbox (node-id: `3368:69750`)
**Library path:** `library/components/Checkbox`
**Purpose:** Square boolean selection control with optional indeterminate state.

**Variants:** `size` = sm (18px) | md (20px) | lg (24px)  
**States:** unchecked → checked → indeterminate → disabled variants of each

---

## CHK-002

**Name:** Radio
**Figma:** Radio / CheckboxBase type=Radio (node-id: `3368:69750`)
**Library path:** `library/components/Checkbox`
**Purpose:** Circular single-selection control — use within a radio group.

**Variants:** `size` = sm (16px) | md (20px)

---

## TOG-001

**Name:** Toggle
**Figma:** Toggle Switch (node-id: `164:18027`)
**Library path:** `library/components/Toggle`
**Purpose:** Binary on/off control — use for settings and feature flags.

**Variants:** `size` = base (36×20px) | lg (44×24px)  
**Colors:** checked = `#1447e6`, unchecked track = `#f3f4f6`

---

## Component Status

| ID       | Name               | Figma node       | Library status     |
|----------|--------------------|------------------|--------------------|
| BTN-001  | Primary Button     | `96:9929`        | ✅ Implemented      |
| BTN-002  | Secondary Button   | `96:9929`        | ✅ Implemented      |
| BTN-003  | Tertiary Button    | `96:9929`        | ✅ Implemented      |
| BTN-004  | AI Button          | `96:9929`        | ✅ Implemented      |
| BTN-005  | Danger Button      | `96:9929`        | ✅ Implemented      |
| BTN-006  | Dark Button        | `96:9929`        | ✅ Implemented      |
| BTN-007  | Ghost Button       | `96:9929`        | ✅ Implemented      |
| BTN-008  | Link Danger Button | `96:9929`        | ✅ Implemented      |
| AVT-001  | Avatar             | `2851:36448`     | ✅ Implemented      |
| AVT-002  | AvatarGroup        | `2851:36448`     | ✅ Implemented      |
| AVT-003  | AvatarGroupLabel   | `2851:36448`     | ✅ Implemented      |
| CHK-001  | Checkbox           | `3368:69750`     | ✅ Implemented      |
| CHK-002  | Radio              | `3368:69750`     | ✅ Implemented      |
| TOG-001  | Toggle             | `164:18027`      | ✅ Implemented      |
| CARD-001 | Content Card       | `3066:7852`      | ⬜ Not started      |
| INPUT-001| Text Input         | `2662:15988`     | ⬜ Not started      |
