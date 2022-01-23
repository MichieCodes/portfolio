import { AirtableImage } from "./airtable-image";

export interface Experience {
  company: string,
  role: string,
  image?: AirtableImage,
  description: string,
  startDate: string,
  endDate?: string
}