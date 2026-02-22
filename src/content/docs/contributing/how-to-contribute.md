---
title: How to Contribute
description: Guidelines for contributing to BeeBuddy.
---

BeeBuddy is open source under the Apache-2.0 license and welcomes contributions
from the community.

## Ways to Contribute

- **Bug reports** — Found something broken? Open a
  [GitHub issue](https://github.com/jsrobinson3/BeeBuddy/issues)
- **Feature requests** — Have an idea? Start a discussion or open an issue
- **Code contributions** — Fix bugs, add features, improve tests
- **Documentation** — Improve these docs or add inline code documentation
- **Testing** — Try BeeBuddy with your hives and report your experience

## Submitting a Pull Request

1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes
4. Ensure tests pass
5. Submit a pull request with a clear description of what changed and why

## Code Style

| Language | Tool | Config |
|---|---|---|
| Python | Ruff (lint + format) | `ruff.toml` |
| TypeScript | ESLint + Prettier | `eslint.config.js` |

Run linting before submitting:

```bash
# Python
cd apps/api && uv run ruff check . && uv run ruff format --check .

# TypeScript
cd apps/mobile && npm run lint
```

## Reporting Security Issues

If you discover a security vulnerability, please report it responsibly by
emailing the maintainers rather than opening a public issue.
