# SYBAUUPI

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TanStack](https://img.shields.io/badge/TanStack-Start-green?logo=tanstack)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-black)

**A modern full-stack web application built with React, TanStack Start, and shadcn/ui.**

</div>

---

## 🛠️ Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) — full-stack React framework
- **Runtime:** [Bun](https://bun.sh) — fast JavaScript runtime and package manager
- **UI:** [shadcn/ui](https://ui.shadcn.com) — beautiful, accessible components
- **Styling:** Tailwind CSS
- **Routing:** TanStack Router with file-based routing
- **State:** Zustand (cart store)
- **Linting:** ESLint + Prettier

---

## 🚀 Getting Started

### Prerequisites
- [Bun](https://bun.sh) installed

### Installation

```bash
git clone https://github.com/kurupdevs/SYBAUUPI.git
cd SYBAUUPI
bun install
```

### Development

```bash
bun run dev
```

Opens the app at `http://localhost:3000`.

### Build

```bash
bun run build
```

---

## 📁 Project Structure

```
SYBAUUPI/
├── src/
│   ├── components/       # React components
│   │   ├── ui/            # shadcn/ui components (40+)
│   │   ├── menu-card.tsx
│   │   ├── site-header.tsx
│   │   └── site-footer.tsx
│   ├── routes/            # File-based routes
│   │   ├── index.tsx       # Home page
│   │   ├── about.tsx       # About page
│   │   ├── menu.tsx        # Menu page
│   │   ├── cart.tsx        # Cart page
│   │   └── checkout.tsx    # Checkout page
│   ├── lib/               # Utilities and stores
│   │   ├── cart-store.ts   # Zustand cart state
│   │   ├── menu-data.ts    # Menu data
│   │   └── utils.ts        # Helper functions
│   ├── hooks/             # Custom hooks
│   ├── styles.css         # Global styles
│   ├── router.tsx         # Router config
│   └── server.ts          # Server entry
├── public/                # Static assets
├── docs/                  # Documentation images
└── package.json           # Dependencies
```

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Build for production |
| `bun run start` | Start production server |

---

## 📄 License

MIT License

---

<div align="center">
  <strong>Built with 💜 by <a href="https://github.com/kurupdevs">KurupDevs</a></strong>
</div>
