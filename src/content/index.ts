import type { ProjectDoc } from './types'

const modules = import.meta.glob('./projects/*.ts', { eager: true }) as Record<
  string,
  { default: ProjectDoc }
>

const projects: Record<string, ProjectDoc> = {}
for (const path in modules) {
  const doc = modules[path].default
  projects[doc.slug] = doc
}

export function getProject(slug: string) {
  return projects[slug]
}

export function listProjects() {
  return Object.values(projects)
}
