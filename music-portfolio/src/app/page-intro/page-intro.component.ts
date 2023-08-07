import {Component} from '@angular/core';
import {
  backgroundAdd,
  backgroundRemove,
  hide1,
  hide2,
  hide3,
  hideGroup,
  show1,
  show2,
  show3
} from "../animations/custom-animations";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-intro',
  templateUrl: './page-intro.component.html',
  styleUrls: ['./page-intro.component.scss'],
  animations: [show1(), show2(), show3(), hide1(), hide2(), hide3(), hideGroup(), backgroundAdd(), backgroundRemove()]
})
export class PageIntroComponent {

  constructor(private router: Router) {
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
    this.isHideGroup = true;
    this.beginNavigation();
  }

  private beginNavigation(): void {
    setTimeout(() => {
      this.router.navigate(['/showcase']);
    }, 4000)
  }

}
