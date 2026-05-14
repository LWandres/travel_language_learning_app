# 🌍 Rome & Greece — Travel Phrase Flashcards

A simple web app for learning essential Italian and Greek phrases before a trip. Tap cards to flip, hear pronunciation via your device's built-in speech engine, and mark phrases as mastered to track your progress. This is no-frills just in time learning when you're on a time crunch! Enjoy!

**Live demo:** `https://lwandres.github.io/travel_language_learning_app/greek_italian_travel_phrases.html`

---

## Features

- **Flashcard flip animation** — tap either card to reveal the translation and phonetic guide
- **Text-to-speech** — uses the Web Speech API with smart voice selection (prefers high-quality neural voices)
- **6 phrase categories** — Basics & Manners, Numbers, Airport, Transport, Restaurants, Shopping
- **Mastery tracker** — mark phrases as learned; progress bar fills as you go
- **Keyboard shortcuts** — `→` / `←` navigate, `f` flips both cards, `m` marks mastered
- **Fully offline after first load** — no server calls, no tracking, no analytics

---

## Deployment (GitHub Pages)

1. **Fork or create** a new repository on GitHub.
2. **Upload** `greek_italian_travel_phrases.html` to the repository root.
3. **Rename** the file to `index.html` (GitHub Pages serves this automatically).
4. Go to **Settings → Pages** → set Source to `main` branch, root `/`.
5. GitHub Pages will publish your site within a minute. The URL will be:
   ```
   [https://lwandres.github.io/travel_language_learning_app/greek_italian_travel_phrases.html]
   ```

> **Tip for sharing:** Copy the URL and send it to your friend — no login required to view.

---

## Security Architecture
This file was security-reviewed and hardened against common 2026 web vulnerabilities. 

## ARIA & keyboard accessibility
Added throughout:
- `role="button"` + `tabindex="0"` on flip cards
- `aria-pressed` updated on flip
- `aria-live="polite"` on phrase counter and mastery count (screen reader announcements)
- `role="progressbar"` with `aria-valuenow` on the progress bar
- All icon elements marked `aria-hidden="true"` (decorative)
- `<label for="...">` on voice selectors
- Keyboard shortcuts: `→`/`←` navigate, `f` flips, `m` marks mastered

---

## Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---|---|---|---|---|
| Flip card CSS | ✅ | ✅ | ✅ | ✅ |
| Web Speech API | ✅ | ✅ | ✅ | ✅ |
| Neural (Google) voices | Chrome only | — | — | — |
| SRI enforcement | ✅ | ✅ | ✅ | ✅ |
| CSP meta tag | ✅ | ✅ | ✅ | ✅ |

---

## File Structure

```
index.html          ← The entire app (rename from greek_italian_travel_phrases.html)
README.md           ← This file
```

No build step, no dependencies, no node_modules. It's just one HTML file.

---

Have a wonderful trip! 🇮🇹🇬🇷
