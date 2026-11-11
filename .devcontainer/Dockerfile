# Toolchain for the site: Node, pnpm, git and Claude Code.
FROM node:26-trixie-slim

RUN apt-get update \
 && apt-get install -y --no-install-recommends git ca-certificates ripgrep less \
 && rm -rf /var/lib/apt/lists/*

RUN npm install -g pnpm@10 @anthropic-ai/claude-code \
 && pnpm config set --global store-dir /root/.pnpm-store \
 && npm cache clean --force
