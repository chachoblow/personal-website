import type { DisciplineType } from './disciplines'

export enum BlockType {
  Text = 'text',
  List = 'list',
  ImageGroup = 'image-group',
}

export interface TextBlock {
  type: BlockType.Text
  text: string
}

export interface ListBlock {
  type: BlockType.List
  items: string[]
}

export interface ImageGroupBlock {
  type: BlockType.ImageGroup
  images: { src: string; alt: string }[]
}

export type Block = TextBlock | ListBlock | ImageGroupBlock

export interface ProjectDoc {
  slug: string
  title: string
  summary: string
  disciplineTypes: DisciplineType[]
  blocks: Block[]
}
