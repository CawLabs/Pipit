# Notes

## Pipit (platform)

- App suite + launcher — like PowerToys, but apps can talk to each other
- Main app can stay in system tray / background when UI closed (when needed)
- Central database — robust, easy to upgrade and extend
- Global themes (colour, maybe style); per-app overrides where needed
- Default visual style: glassmorphism
- Light on CPU and RAM across platform and all micro-apps
- Some micro-apps are advanced widgets, not full apps

### Window & layout

- Remember where each app/widget was placed; restore on launch
- Monitor lost → place on next available monitor
- Layout templates — preset arrangements, open apps into a saved layout

### Settings & alerts

- Global settings sync down when a new micro-app is added (match micro-app settings)
- Custom notification sounds, alerts, etc.

---

## Micro-app 1 — Notes

- Sticky Notes UX — seamless, lightweight, always-on feel
- Obsidian-style writing — markdown-first, keystroke-driven
- Prefer built-in markdown over custom syntax when one exists (colour, etc.)
- `@` macros (or better markdown-native equivalent) for commands:
  - Alarms, one-off alerts, repeating (daily, hourly, every N days, date-based)
  - Integrations via links — time, currency conversion, etc.
- To-dos with a completion deadline
  - Overdue → visual highlight only (e.g. red), no silent edit of user text
- Macros and todos feed the shared database (timeline, etc.)

---

## Micro-app 2 — Timezone / converter

- Primary: timezone conversion
- Secondary: currency and metric conversion
- Input: UTC, GMT, or city-level location (e.g. Sydney — not exact address)
- Minimal UI — show only what’s needed, hide the rest when idle
- Optional: weather for selected location

---

## Micro-app 3 — Timeline (widget)

- Widget-style — configurable time window on display
- Depends on central database; some micro-apps required (or acceptable alternatives)
- Pulls timed events from other apps — alarms, reminders, note todos
- Modes:
  - Timeline — events on a time axis (daily or custom span)
  - Todo view — what’s due today, this week, custom range
- Recurring todos (dailies, etc.) show in both timeline and todo mode

---

## Cross-app links

| Source | Consumers |
|--------|-----------|
| Notes — alarms, reminders, todos, deadlines | Timeline |
| Central DB | All apps; prerequisite for Timeline |
