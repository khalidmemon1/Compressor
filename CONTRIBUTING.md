# Contributing to Compressor

Thank you for your interest in contributing to **Compressor**! We welcome contributions from everyone—whether it's fixing bugs, adding new features, improving documentation, or suggesting enhancements.

---

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please treat all contributors with respect and kindness.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.18.0 or higher recommended)
- [npm](https://www.npmjs.com/) (version 9 or higher) or [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)

### Local Setup

1. **Fork the repository** on GitHub.
2. **Clone your fork:**
   ```bash
   git clone https://github.com/<your-username>/Compressor.git
   cd Compressor
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Core Guidelines

1. **Strict 100% Client-Side Privacy:**
   - Under no circumstances should user images ever be transmitted, stored, or processed on an external server or backend.
   - All compression logic must happen in the browser via Canvas, Web Workers, or client-side libraries.

2. **Static Export Compatibility:**
   - The application is configured with `output: 'export'` in `next.config.mjs`.
   - Never add server-side Node runtime dependencies or dynamic server functions that break static export generation.

3. **Code Style & Types:**
   - Write clean, typed TypeScript without using `any`.
   - Use Tailwind CSS classes for styling; do not write arbitrary inline styles.
   - Follow existing component patterns in `src/components/`.

---

## Development Workflow

1. Create a new branch from `main`:
   ```bash
   git checkout -b feat/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

2. Make your changes and test thoroughly.

3. Run linter and type-checking:
   ```bash
   npm run lint
   ```

4. Verify that the static production build succeeds:
   ```bash
   npm run build
   ```

5. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: add support for AVIF conversion"
   ```

6. Push to your fork and submit a Pull Request.

---

## Pull Request Guidelines

- Provide a clear, descriptive title and explanation of what your PR accomplishes.
- Reference any related issues (e.g., `Closes #12`).
- Ensure all CI checks (linting, build verification) pass.
- Keep PRs focused on a single feature or bug fix to make review swift and straightforward.

---

## Questions or Need Help?

Feel free to open an issue or reach out via GitHub Discussions. Happy coding!
