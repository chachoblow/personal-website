import {
  PhLaptop,
  PhSphere,
  PhWaveSine,
  PhRectangle,
  PhBook,
} from '@phosphor-icons/vue'
import type { Component } from 'vue'

export enum DisciplineType {
  Software = 'software',
  Object = 'object',
  Sound = 'sound',
  Image = 'image',
  Print = 'print',
}

export interface Discipline {
  type: DisciplineType
  label: string
  icon: Component
}

export const DISCIPLINES: Discipline[] = [
  { type: DisciplineType.Software, label: 'software', icon: PhLaptop },
  { type: DisciplineType.Object, label: 'object', icon: PhSphere },
  { type: DisciplineType.Sound, label: 'sound', icon: PhWaveSine },
  { type: DisciplineType.Image, label: 'image', icon: PhRectangle },
  { type: DisciplineType.Print, label: 'print', icon: PhBook },
]

export function resolveDisciplineTypes(types: DisciplineType[]): Discipline[] {
  return types
    .map(type => DISCIPLINES.find(d => d.type === type)!)
    .filter(Boolean)
}
