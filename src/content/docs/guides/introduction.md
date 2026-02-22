---
title: Introduction
description: What is BeeBuddy and why does it exist?
---

BeeBuddy is an open-source, AI-powered beekeeping management platform. It helps
beekeepers track their hives, log inspections, and receive intelligent
recommendations — all from a mobile app backed by a self-hostable API.

## Who is it for?

- **Hobbyist beekeepers** who want a better way to track their colonies than
  spreadsheets or notebooks
- **Sideliner and commercial beekeepers** who need structured inspection records
  across multiple apiaries
- **Bee clubs and associations** looking for a shared platform their members can use
- **Developers** interested in contributing to an open-source agriculture tech project

## Architecture

BeeBuddy is built as a monorepo with two main applications:

| Component | Stack | Description |
|---|---|---|
| **API** | Python, FastAPI, PostgreSQL | Backend REST API with async SQLAlchemy |
| **Mobile** | Expo (React Native), TypeScript | Cross-platform mobile app |

Both are designed to run locally via Docker Compose for development, and can be
deployed to any cloud provider.

## Design Influences

The data model draws inspiration from the
[BEEP](https://github.com/beepnl/BEEP) project, an established open-source
beekeeping platform from the Netherlands. BeeBuddy adapts BEEP's schema concepts
(like impression/attention scoring on inspections and queen breeding fields) while
simplifying the storage approach using PostgreSQL JSONB instead of BEEP's
Entity-Attribute-Value pattern.

## License

BeeBuddy is licensed under [Apache-2.0](https://github.com/jsrobinson3/BeeBuddy/blob/main/LICENSE),
meaning you can use, modify, and distribute it freely.
