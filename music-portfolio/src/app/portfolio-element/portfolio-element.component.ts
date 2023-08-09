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

  getEmbeddedSoundcloudLink(soundcloudMeta: any): string {
    return `
    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="${soundcloudMeta.src}"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="${soundcloudMeta.authorUrl}" title="${soundcloudMeta.authorName}" target="_blank" style="color: #cccccc; text-decoration: none;">${soundcloudMeta.authorName}</a> · <a href="${soundcloudMeta.url}" title="${soundcloudMeta.title}" target="_blank" style="color: #cccccc; text-decoration: none;">${soundcloudMeta.title}</a></div>
    `;
  }

  getEmbeddedBandcampLink(bandcampMeta: any): string {
    return `
    <iframe style="border: 0; width: 100%; height: 241px; margin: 0 auto;" src="${bandcampMeta.src}" seamless><a href="${bandcampMeta.url}">${bandcampMeta.title}</a></iframe>
    `;
  }

}
