export interface ProjectCategory {
  name: string
  iconLight: string
  iconDark: string
  items: ProjectItem[]
}

export interface ProjectItem {
  name: string
  route: string
  menuImage: string
  images: string[]
}
