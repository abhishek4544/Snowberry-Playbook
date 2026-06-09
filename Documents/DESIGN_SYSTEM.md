# Snowberry Design System

**Figma File:** https://www.figma.com/design/65cijwcIaXfRuKxnUKwJlE/Snowberry-Web-app
**Components Page:** https://www.figma.com/design/65cijwcIaXfRuKxnUKwJlE/Snowberry-Web-app?node-id=2556-6455
**Token Source:** Tailwind CSS design system (exported via Figma Variables)

---

## 1. Design Tokens

### Brand Color Palette (Primary)
The Brand scale is a custom blue — this is the primary identity color of Snowberry.

| Token      | Hex       | Usage                          |
|------------|-----------|--------------------------------|
| Brand/50   | `#EBF6FF` | Tinted backgrounds, highlights |
| Brand/100  | `#D1ECFF` | Hover backgrounds              |
| Brand/200  | `#AEDFFF` | Borders, subtle fills          |
| Brand/300  | `#76CDFF` | Disabled states, decorative    |
| Brand/400  | `#35B0FF` | Secondary interactive          |
| Brand/500  | `#0787FF` | **Primary interactive default**|
| Brand/600  | `#0061FF` | Primary hover                  |
| Brand/700  | `#0048FF` | Primary active/pressed         |
| Brand/800  | `#003BD7` | Dark interactive               |
| Brand/900  | `#003399` | Deep contrast                  |
| Brand/950  | `#062365` | Text on light, darkest brand   |

### Neutral (Grayscale)

| Token        | Hex       |
|--------------|-----------|
| neutral/50   | `#FAFAFA` |
| neutral/100  | `#F5F5F5` |
| neutral/200  | `#E5E5E5` |
| neutral/300  | `#D4D4D4` |
| neutral/400  | `#A3A3A3` |
| neutral/500  | `#737373` |
| neutral/600  | `#525252` |
| neutral/700  | `#404040` |
| neutral/800  | `#262626` |
| neutral/900  | `#171717` |
| neutral/950  | `#0A0A0A` |

### Slate (Cool Gray)

| Token      | Hex       |
|------------|-----------|
| slate/50   | `#F8FAFC` |
| slate/100  | `#F1F5F9` |
| slate/200  | `#E2E8F0` |
| slate/300  | `#CBD5E1` |
| slate/400  | `#94A3B8` |
| slate/500  | `#64748B` |
| slate/600  | `#475569` |
| slate/700  | `#334155` |
| slate/800  | `#1E293B` |
| slate/900  | `#0F172A` |
| slate/950  | `#020617` |

### Semantic Colors

| Color   | 500 (Default)  | 600 (Hover)  | Usage              |
|---------|----------------|--------------|--------------------|
| red     | `#EF4444`      | `#DC2626`    | Danger, error      |
| green   | `#22C55E`      | `#16A34A`    | Success, positive  |
| blue    | `#3B82F6`      | `#2563EB`    | Info, links        |
| yellow  | `#EAB308`      | `#CA8A04`    | Warning, caution   |

### Alpha Layers
Used for overlays, scrim, and opacity-based surfaces. Two modes: `light` (dark base `#1A1A1A`) and `dark` (white base `#FFFFFF`).

| Step | Opacity |
|------|---------|
| 50   | 6%      |
| 100  | 9%      |
| 200  | 20%     |
| 300  | 28%     |
| 400  | 36%     |
| 500  | 48%     |
| 600  | 60%     |
| 700  | 70%     |
| 800  | 75%     |
| 900  | 80%     |
| 1000 | 100%    |

### Base Colors
| Token       | Value     |
|-------------|-----------|
| b&w/white   | `#FFFFFF` |
| b&w/black   | `#000000` |
| transparent | `#000000` @ 0% |

---

## 2. Typography Scale

Snowberry uses a Tailwind-based type scale. Font family: **Inter** (primary UI font).

| Scale  | Size  | Line Height | Weight          | Usage                    |
|--------|-------|-------------|-----------------|--------------------------|
| xs     | 12px  | 16px        | 400             | Labels, captions         |
| sm     | 14px  | 20px        | 400 / 500       | Body small, helper text  |
| base   | 16px  | 24px        | 400 / 500       | Body default             |
| lg     | 18px  | 28px        | 500 / 600       | Subheadings              |
| xl     | 20px  | 28px        | 500 / 600       | Section titles           |
| 2xl    | 24px  | 32px        | 600 / 700       | Card headings            |
| 3xl    | 30px  | 36px        | 700             | Page titles              |
| 4xl    | 36px  | 40px        | 700 / 800       | Hero headings            |
| 5xl    | 48px  | 52px        | 800             | Display text             |

**Font weights in use:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)

---

## 3. Spacing System

T-shirt scale exported from Figma variables (`Size.zip`). All values in `px`.

| Token  | Value | Tailwind Equivalent |
|--------|-------|---------------------|
| zero   | 0     | `space-0`           |
| xxs    | 2     | `space-0.5`         |
| xs     | 4     | `space-1`           |
| sm     | 8     | `space-2`           |
| base   | 12    | `space-3`           |
| lg     | 16    | `space-4`           |
| xl     | 20    | `space-5`           |
| 2xl    | 24    | `space-6`           |
| 3xl    | 32    | `space-8`           |
| 4xl    | 40    | `space-10`          |
| 5xl    | 48    | `space-12`          |

---

## 4. Grid System

Derived from Figma frame measurements across components and layout frames.

| Property        | Value                         |
|-----------------|-------------------------------|
| Content width   | 1065px (frame) / 1025px (inner) |
| Horizontal padding | 20px each side             |
| Sidebar — expanded | 235px                     |
| Sidebar — collapsed | 60px                     |
| Column gutter   | 16px (lg spacing token)       |
| Base layout     | Sidebar + main content area   |

**Layout structure:**
```
┌──────────────────────────────────────────────────┐
│ Header (full width)                              │
├──────────┬───────────────────────────────────────┤
│ Sidebar  │  Main Content Area                    │
│ 235px    │  fluid, 1025px inner max              │
│ (60px    │                                       │
│ collapsed│                                       │
└──────────┴───────────────────────────────────────┘
```

---

## 5. Components

All components live on the Components page (`node-id=2556-6455`).

---

### Button `id: 96:9929`
- **Colors:** Brand, AI, Secondary, Tertiary, Danger, Dark, Ghost, Link Danger
- **Sizes:** xs, sm, base, l
- **States:** Initial, Hover, Focus, Disabled
- **Options:** Icon only (`true/false`), Outline (`true/false`), Logo inside (`true/false`)
- **Height:** 36px at base size

**All color × state combinations:**
```
Brand      → Initial / Hover / Focus / Disabled
AI         → Initial / Hover / Focus / Disabled
Secondary  → Initial / Hover / Focus / Disabled
Tertiary   → Initial / Hover / Focus / Disabled
Danger     → Initial / Hover / Focus / Disabled
Dark       → Initial / Hover / Focus / Disabled
Ghost      → Initial / Hover / Focus / Disabled
Link Danger → Initial / Hover / Focus / Disabled
```

---

### Avatar `id: 2851:36448`
- **Sizes:** xs, sm, base, lg, xl, 2xl
- **Type:** Default
- **Users (12 profiles):** Jese Leos, Bonnie Green, Roberta Casas, Neil Sims, Thomas Lean, Micheal Gough, Helene Engels, Lana Byrd, Leslie Livingston, Karen Nelson, Robert Brown, Joseph McFall

---

### Avatar Group `id: 2851:36819`
- **Sizes:** sm, base, lg
- **Types:** Default, With counter

---

### Avatar Group Label `id: 2851:36862`
- **Sizes:** sm, base, lg, xl
- **Types:** Heading & helper text, Text

---

### Avatar Dot `id: 2851:36895`
- **Sizes:** xs, sm, base, lg, xl
- **Statuses:** Online, Offline, Alternative

---

### Avatar Remove Button `id: 2851:36911`
- **Sizes:** xs, sm, base, lg
- **Status:** Alternative only

---

### Badge `id: 2850:35375`
- **Themes:** Brand, Success, Danger, Gray, White
- **Sizes:** sm, lg
- **Types:** Default, With avatar, With dot, With icon (Only icon / Only text variants)

---

### Cell `id: 2850:33828`
Table / list row primitive supporting 8 content types:
- Default
- Content field
- Right align
- Badge
- Action
- Button
- Avatar
- Checkbox

---

### Toggle Switch `id: 164:18027`
- **Sizes:** base, lg
- **States:** Initial, Focus, Disabled
- **Checked:** True / False

---

### Checkbox `id: 2523:16206`
- **Sizes:** sm, md, lg
- **States:** unchecked, checked, checked_focused, indeterminate, indeterminate_disabled, disabled

---

### Radio / Check Circle `id: 3368:69750`
- **Types:** Radio, Check circle
- **Sizes:** sm, md
- **States:** Default, Hover, Focused, Disabled
- **Checked:** True / False / Indeterminate

---

### Inline Input `id: 2662:15988`
- **Sizes:** Small, Medium
- **States:** Default, Filled, Focus, Password, Error, Disable

---

### Phone Inline Input `id: 2662:15942`
- **States:** Default, Filled, Focus, Disable, Error

---

### Hint `id: 2662:15932`
Helper / hint text below inputs.
- **States:** Default, Error, Disable

---

### Dropdown `id: 2385:10167`
- **States:** Default, Hover
- **Types:** Default, Avatar
- **Width:** 209px, Height: 36px (Default) / 40px (Avatar)

---

### Dropdown Header `id: 2923:38615`
- **Types:** Top, Search

---

### Input Prefix / Action `id: 2668:8229`
Prefix element used inside input fields.
- **Types:** Clear, AI, Duo, Icon only

---

### Select / Picker `id: 2909:30441`
- **States:** Default, Select

---

### File Icon `id: 202:1758`
- **Types:** audio, video, text, excel, image, PDF, URL

---

### Content Image Section `id: 2293:4390`
Rich content card supporting 5 layout states:
- Content only
- Image and content
- Text and image
- Image only
- Empty

**Inner width:** 1025px

---

### Card / Sub Card `id: 3066:7852`
- **States:** Card, Sub card

---

### Tab `id: 3327:24161`
- **Variants:** Default, Variant2

---

### KBD (Keyboard Shortcut) `id: 2909:33715`
- **Variants:** Default, Variant2

---

## 6. Patterns

### Navigation Pattern
- **Sidebar navigation** with two modes:
  - Expanded: 235px — shows labels + icons
  - Collapsed: 60px — icons only
- **Header** persists across all views
- Bottom content section anchors secondary nav/account actions

### Content Layout Pattern
- Max inner content width: **1025px** with 20px horizontal padding
- Content sections support 5 states: Content / Image & Content / Text & Image / Image only / Empty
- Empty states are explicitly designed — not afterthoughts

### List / Feed Pattern
- Cell component (1034×899px) is the base unit for list rows and card grids
- Supports avatar, status dot, badge, and action buttons inline

### Overlay / Modal Pattern
- Alpha tokens power scrim layers (`alpha/light` or `alpha/dark` at 500–700)
- Dropdown menus: 225×160px (menu), 209×36–40px (trigger)

### Form Pattern
- **Inline Input** — text entry, 2 sizes (Small/Medium), 6 states including Password and Error
- **Phone Inline Input** — dedicated phone field with its own state set
- **Hint** — helper/error text below any input (Default / Error / Disable)
- **Checkbox** — sm/md/lg, full indeterminate support
- **Radio / Check Circle** — sm/md, paired selection control
- **Toggle Switch** — binary input, base/lg sizes
- **Select / Picker** — lightweight selection (Default / Select states)
- **Dropdown** — with optional search header for long lists (> 8 items recommended)
- **Input Prefix** — Clear / AI / Duo / Icon-only decorators inside inputs
- **KBD** — keyboard shortcut display for power users

---

## 7. Interaction Rules

### State Machine (all interactive components)
```
Default → Hover → Focus → Active
Default → Disabled (no further states)
```

### Button States
| State    | Visual change                              |
|----------|--------------------------------------------|
| Default  | Brand/500 fill, white label                |
| Hover    | Brand/600 fill                             |
| Focus    | Brand/600 + focus ring (Brand/300)         |
| Disabled | neutral/300 fill, neutral/500 label        |

### Toggle Switch
- Checked = Brand/500 track
- Unchecked = neutral/300 track
- Focus ring uses Brand/300
- Disabled = neutral/200 track regardless of checked state

### Dropdown
- Opens on click (not hover)
- Avatar variant adds 4px extra height (40px vs 36px) to accommodate profile image
- Search header variant appears for lists > threshold (implement as > 8 items)

### Avatar Status Dot
- Always rendered as an overlay on the avatar at bottom-right
- Colors: Online = green/500, Offline = neutral/400, Alternative = brand/500

### Badge
- Dot variant = 8px circle, no text
- Text + icon: icon leads left of label
- Not interactive by default — add onClick only when used as a filter chip

---

## 8. Information Architecture

### App Structure
```
App Shell
├── Header (global)
│   └── Logo, Search, User Avatar, Notifications
├── Sidebar
│   ├── Primary nav items (icons + labels)
│   ├── [Collapsed state: icons only]
│   └── Bottom: Account / Settings / Logout
└── Main Content Area
    ├── Page Header (title, actions, breadcrumb)
    ├── Content Body
    │   ├── Content-only section
    │   ├── Image + Content section
    │   ├── Text + Image section
    │   └── Empty state
    └── Cell-based list / grid
```

### Key User Objects
Based on component design, Snowberry handles these primary data objects:
- **Users / Team members** — Avatar, Avatar Group, Avatar Dot (status)
- **Files / Attachments** — File Icon (7 types: audio, video, text, excel, image, PDF, URL)
- **Content items** — Content Image Sections (rich content cards)
- **Actions** — Buttons with role-based color coding (Brand = primary, Danger = destructive, AI = AI-powered action)

### Navigation Hierarchy
1. **Top level** — Sidebar primary nav (persistent)
2. **Section level** — Page header with title and action buttons
3. **Item level** — Cell rows / cards in content area
4. **Action level** — Dropdowns, modals, overlays

---

## Source Files

| Asset             | Location                                                  |
|-------------------|-----------------------------------------------------------|
| Figma file        | https://www.figma.com/design/65cijwcIaXfRuKxnUKwJlE/     |
| Components page   | node-id `2556:6455`                                       |
| Size tokens       | `/Downloads/Size_extracted/Default.tokens.json`           |
| Color tokens      | `/Downloads/Tailwind_extracted/Default.tokens.json`       |
