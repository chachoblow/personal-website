export type Block =
  | { type: 'text'; content: string; class?: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'list'; items: string[]; class?: string }
  | { type: 'crumbs'; segments: { label: string; to: string }[] }
  | { type: 'spacer'; size?: 'sm' | 'md' | 'lg' }

export interface ProjectDoc {
  slug: string
  title: string
  year?: number | string
  blocks: Block[]
}
