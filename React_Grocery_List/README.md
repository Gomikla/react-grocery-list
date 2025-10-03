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

Open [http://localhost:5173](http://localhost:5173) to view in browser.

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
├── types.ts        # TypeScript definitions
└── styles.css      # Global styles
```

## Assumptions & Limitations

- **Local storage only** - no backend/database
- **Single user** - no authentication
- **Basic validation** - 50 character limit for todos
- **Modern browsers** - uses CSS clamp() and other modern features

## Future Improvements

- [ ] Search functionality
- [ ] Smooth animations for reordering
- [ ] Edit existing todos
- [ ] Categories/tags
- [ ] Export/import data

## Development Notes

**AI Usage:**

- GitHub Copilot assisted with CSS cleanup, responsive design patterns, and README structure
- SVG icon implementation guidance provided by AI
- Core application logic and component architecture designed independently

**Key Decisions:**

- Chose localStorage over complex state management for simplicity
- Used union types instead of enums for TypeScript compatibility
- Prioritized keyboard accessibility from the start
- Focused on clean, semantic HTML and CSS

---

_Originally started as a grocery list app, evolved into a general-purpose todo list during development._

```

```
