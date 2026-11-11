# Toolchain for the site: Node, pnpm, git, gh and Claude Code.
FROM node:26-trixie-slim

RUN apt-get update \
 && apt-get install -y --no-install-recommends git ca-certificates ripgrep less \
 && rm -rf /var/lib/apt/lists/*

# GitHub CLI, from GitHub's apt repo. It lands at /usr/bin/gh, which is where
# the host's ~/.gitconfig credential helper points, so git push uses it too.
RUN apt-get update \
 && apt-get install -y --no-install-recommends curl \
 && curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg \
      -o /usr/share/keyrings/githubcli-archive-keyring.gpg \
 && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" \
      > /etc/apt/sources.list.d/github-cli.list \
 && apt-get update \
 && apt-get install -y --no-install-recommends gh \
 && rm -rf /var/lib/apt/lists/*

RUN npm install -g pnpm@10 @anthropic-ai/claude-code \
 && pnpm config set --global store-dir /root/.pnpm-store \
 && npm cache clean --force
