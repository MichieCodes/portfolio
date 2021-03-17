interface Image {
  url: string,
  width: number,
  height: number
}

export interface ProjectImage {
  small: Image,
  large: Image,
  full: Image
}

export interface Project {
  title: string,
  slug: string,
  image?: ProjectImage,
  techStack: string[],
  description: string,
  designLink?: string,
  codeLink?: string,
  videoLink?: string,
  demoLink?: string,
  problem?: string,
  action?: string,
  solution?: string,
  challenges?: string,
  futureGoals?: string
  visible?: boolean
}
