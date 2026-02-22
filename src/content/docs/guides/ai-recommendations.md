---
title: AI Recommendations
description: How BeeBuddy uses AI to provide beekeeping guidance.
---

BeeBuddy integrates with large language models to analyze your inspection data
and provide actionable recommendations.

## How It Works

1. You log inspections as usual
2. BeeBuddy aggregates your hive history, local weather data, and seasonal context
3. An LLM analyzes the data and generates recommendations
4. Suggestions appear in your dashboard alongside the relevant hive

## Provider-Agnostic Design

BeeBuddy doesn't lock you into any single AI provider. It supports:

| Provider | Use Case |
|---|---|
| **Ollama** (local) | Privacy-first, no API costs, runs on your hardware |
| **OpenAI** | GPT models via API |
| **Anthropic** | Claude models via API |
| **AWS Bedrock** | Enterprise deployments |

Configure your preferred provider in the environment variables. The local Ollama
option is ideal for beekeepers who want AI assistance without sending data to
external services.

## Example Recommendations

Based on inspection data, BeeBuddy might suggest:

- "Colony temperament has been increasingly nervous over the last 3 inspections.
  Consider checking for queen issues or pest pressure."
- "Brood pattern has been spotty for 2 weeks. This may indicate a failing queen
  — consider requeening."
- "Based on local nectar flow forecasts, this would be a good time to add
  supers."

## Privacy

When using a local LLM (Ollama), all data stays on your machine. No inspection
data is ever sent to external services unless you explicitly configure a cloud
AI provider.
