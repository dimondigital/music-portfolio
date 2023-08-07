import {Link} from "../link";

export interface PortfolioElement {
  title: string[],
  genres: string[],
  videoId: string,
  description: string[],
  links: Link[],
  tags: string[]
}
