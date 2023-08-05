import {Component, ElementRef, Renderer2} from '@angular/core';
import {hide1, hide2, hideGroup, show1, show2, show3} from "../animations/custom-animations";

@Component({
  selector: 'app-page-intro',
  templateUrl: './page-intro.component.html',
  styleUrls: ['./page-intro.component.scss'],
  animations: [show1(), show2(), show3(), hide1(), hide2(), hideGroup()]
})
export class PageIntroComponent {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
  }

  public isHideGroup: boolean = false;

  imgSrc: string = "assets/avatar.png";
  introText: string[] = [
    'Hi!',
    'My name is',
    'Dmytro Nikolaev',
    'I\'m music producer &',
    'sound designer',
    'from ukraine',
    'I have a 13+ years of music production',
    'commercial experience',
    'I\'m glad to see you here',
    'I did all of those',
    'From the heart and with a great passion',
    'Enjoy!)'
  ];
  isShowButton: boolean = false;

  public showButton(): void {
    this.isShowButton = true;
  }

  public navigationToShowcasePage(event: MouseEvent): void {
    event.preventDefault();
    console.log(1);
    this.removeElementsByClass('removable');
    this.isHideGroup = true;
  }

  removeElementsByClass(className: string): void {
    const elementsToRemove = this.elementRef.nativeElement.getElementsByClassName(className);
    while (elementsToRemove.length > 0) {
      // elementsToRemove[0].removeClass(className);
      this.renderer.removeChild(elementsToRemove[0].parentNode, elementsToRemove[0]);
    }
  }

}
