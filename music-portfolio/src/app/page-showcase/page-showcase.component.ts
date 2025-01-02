import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PortfolioElement} from "../shared/portfolio-element/portfolio-element";
import {PortfolioService} from "../portfolio.service";
import {Subscription} from "rxjs";
import {hide1, show1, showAndHide} from "../animations/custom-animations";

@Component({
  selector: 'app-page-showcase',
  templateUrl: './page-showcase.component.html',
  styleUrls: ['./page-showcase.component.scss'],
  animations: [show1(), hide1(), showAndHide()]
})
export class PageShowcaseComponent implements OnInit, OnDestroy {

  portfolioElements: PortfolioElement[] = [];
  availableGenres: string[] = [];
  getPortfolioItemsSub!: Subscription;
  getAvailableGenresSub!: Subscription;
  isSelectingGenre: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private portfolioService: PortfolioService
  ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe((value) => {
        this.selectedGenre = this.route.snapshot.queryParams['genre'];
        this.getPortfolioElements();
      });
  }

  private getPortfolioElements(): void {
    this.getPortfolioItemsSub = this.portfolioService.getPortfolioElements()
      .subscribe((data: {}): void => {
        this.portfolioElements = [];
        // @ts-ignore
        this.portfolioElements = data["portfolio-items"].filter((element: PortfolioElement) => {
          return element.genres.includes(this.selectedGenre);
        });
      })
  }

  private getAvailableGenres(): void {
    this.getAvailableGenresSub = this.portfolioService.getAvailableGenres()
      .subscribe((data: {}): void => {
        // @ts-ignore
        this.availableGenres = data["genres"];
      });
  }
  selectedGenre: string = '';

  onSelectGenre(genre: string): void {
    this.selectedGenre = genre;
    this.getPortfolioElements();
    this.getAvailableGenres();
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

  ngOnDestroy(): void {
    this.getPortfolioItemsSub.unsubscribe();
  }

}
