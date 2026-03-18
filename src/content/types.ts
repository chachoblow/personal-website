import type { DisciplineType } from './disciplines'

export enum BlockType {
  Text = 'text',
  List = 'list',
  Image = 'image',
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

export interface ImageBlock {
  type: BlockType.Image
  src: string
  alt: string
}

export interface ImageGroupBlock {
  type: BlockType.ImageGroup
  images: Omit<ImageBlock, 'type'>[]
}

export type Block = TextBlock | ListBlock | ImageBlock | ImageGroupBlock

export interface ProjectDoc {
  slug: string
  title: string
  summary: string
  disciplineTypes: DisciplineType[]
  blocks: Block[]
}
