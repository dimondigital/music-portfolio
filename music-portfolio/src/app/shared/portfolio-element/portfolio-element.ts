import {Link} from "../../link";

export interface PortfolioElement {
  title: string[],
  genres: string[],
  videoId: string,
  videoId2: string, // TODO: make array with videoIds later
  videoId3: string, // TODO: make array with videoIds later
  soundcloudMeta: any,
  soundcloudMeta2: any,
  bandcampMeta: any,
  description: string[],
  links: Link[],
  tags: string[]
}
