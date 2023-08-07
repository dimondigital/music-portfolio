import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Route, Router} from "@angular/router";
import {filter} from "rxjs";

@Component({
  selector: 'app-page-showcase',
  templateUrl: './page-showcase.component.html',
  styleUrls: ['./page-showcase.component.scss']
})
export class PageShowcaseComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((value) => {
        this.selectedGenre = this.route.snapshot.queryParams['genre'];
      })
  }

  availableGenres: string[] = [
    'Ambient',
    'Chiptune/8bit',
    'Trance',
    'Orchestral',
    'Jazz',
    'Official Soundtrack',
    'Hip Hop',
    'Sound Design',
    'Mixing / Mastering',
  ];
  selectedGenre: string = '';

  onSelectGenre(genre: string): void {
    this.selectedGenre = genre;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        genre: this.selectedGenre
      },
      queryParamsHandling: 'merge',
      // preserve the existing query params in the route
      skipLocationChange: false
      // do not trigger navigation
    });
  }

}
