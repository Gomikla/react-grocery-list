# Todo List App

A simple, clean todo list application built with React and TypeScript.

## Features

- ✅ Add, delete, and toggle todo items
- 🔍 Filter by All/Active/Completed
- 🎨 Visual feedback with red/green colors
- ⌨️ Full keyboard navigation support
- 💾 Auto-save to localStorage
- 📱 Responsive design

## Setup & Running

```bash
npm install
npm run dev
```

Open [http://localhost:xxxx] (replace xxxx with the port shown in your terminal) to view in browser.

## Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- CSS (custom styling)
- localStorage (persistence)

## Project Structure

```
src/
├── components/     # React components
├── hooks/          # Custom hooks (useLocalStorage)
├── utils/          # Helper functions
├── images/         # Hold images
├── types.ts        # TypeScript definitions
└── styles.css      # Global styles
```

## Assumptions & Limitations

- **Local storage only** - no backend/database
- **Single user** - no authentication
- **Basic validation** - 50 character limit for todos
- **Modern browsers** - uses CSS clamp() and other modern features

## Design Choices

- Chose a green, nature-inspired palette for a calming, focused user experience.
- Used coolors.co to generate color pallete
- Selected Alan Sans from Google Fonts to match the smooth, rounded deisgn of the app
- Added a custom wallpaper for visual interest and improving user experience
- Used SVG icons (trashcan for delete, magnifying glass for search) to make key functions instantly recognizable and universally understood.

## Future Improvements

- Smooth animations for reordering
- Edit existing todos

**AI Usage:**

- GitHub Copilot assisted with CSS cleanup, responsive design patterns, and README structure
- ChatGPT generated the background image
- Core application logic and component architecture designed independently

**Key Decisions:**

- Chose localStorage over complex state management for simplicity
- Used union types instead of enums for TypeScript compatibility
- Prioritized keyboard accessibility from the start
- Focused on clean, semantic HTML and CSS

---

_Originally started as a grocery list app, evolved into a general-purpose todo list during development._
