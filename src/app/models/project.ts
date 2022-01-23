import { AirtableImage } from "./airtable-image";

export interface Project {
  title: string,
  slug: string,
  image?: AirtableImage,
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
