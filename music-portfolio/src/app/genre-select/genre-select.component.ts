import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {show1, show2} from "../animations/custom-animations";

@Component({
  selector: 'app-genre-select',
  templateUrl: './genre-select.component.html',
  styleUrls: ['./genre-select.component.scss'],
  animations: [show1(), show2()]
})
export class GenreSelectComponent implements OnInit{

  @Input() genres: string[] = [];
  @Input() genreInput: string = '';
  @Output() genreOutput: EventEmitter<string> = new EventEmitter<string>();
  selected: string = '';
  public placeholder: string = 'Choose Category';
  isSelecting: boolean = true;

  ngOnInit() {
    if(this.genreInput) {
      this.onSelect();
      this.onSelectComplete(this.genreInput);
    }
  }

  public selectGenre(): void {

  }

  public onSelect(): void {
    this.isSelecting = true;
  }

  public onSelectComplete(genreName: string): void {
    this.isSelecting = false;
    this.genreOutput.emit(genreName);
    this.selected = genreName;
  }

}
