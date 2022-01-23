interface Image {
  url: string,
  width: number,
  height: number
}

export interface AirtableImage {
  small: Image,
  large: Image,
  full: Image
}