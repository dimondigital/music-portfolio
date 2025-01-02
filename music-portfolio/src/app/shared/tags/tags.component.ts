import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

  @Input() tags: string[] = [];
  public currentRoute!: ActivatedRoute;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.currentRoute = route;
  }

  navigate(event: Event, tag: string) {
    event.preventDefault();
    this.router.navigate(['/showcase'], { queryParams: { genre: tag }, queryParamsHandling: 'merge', skipLocationChange: false, relativeTo: this.currentRoute });
  }

}
