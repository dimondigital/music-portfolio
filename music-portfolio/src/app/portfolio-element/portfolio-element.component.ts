import {Component, Input} from '@angular/core';
import {PortfolioElement} from "./portfolio-element";

@Component({
  selector: 'app-portfolio-element',
  templateUrl: './portfolio-element.component.html',
  styleUrls: ['./portfolio-element.component.scss']
})
export class PortfolioElementComponent {

  @Input() data!: PortfolioElement;

  getEmbeddedVideoLink(videoId: string): string {
    return `
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
    `;
  }

}
