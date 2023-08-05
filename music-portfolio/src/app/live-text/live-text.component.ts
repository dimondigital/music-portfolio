import {Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable, Subscription, timer} from "rxjs";

@Component({
  selector: 'app-live-text',
  templateUrl: './live-text.component.html',
  styleUrls: ['./live-text.component.scss']
})
export class LiveTextComponent implements OnInit, OnDestroy {

  @Input() totalText: string[] = [];
  textFilled: string[] = ['', '', '', '', ''];
  totalTextCounter: number = 0;
  allSubscriptions: Subscription[] = [];
  isFinished: boolean = false;
  typingLetterInterval: number = 60;
  @Output() isTypingFinished: EventEmitter<boolean> = new EventEmitter<boolean>();

  @HostListener('document:click')
  onClick() {
    this.checkTimerComplete(0, 0, undefined, true);
  }

  ngOnInit() {
    this.runNextTimer(0);
  }

  checkTimerComplete(counter: number, textLength: number, sub: Subscription | undefined, isFinish = false): void {
    if (isFinish) {
      this.isFinished = true;
      this.isTypingFinished.emit(true);
      if (sub) sub.unsubscribe();
      this.textFilled = this.totalText;
      this.ngOnDestroy();
      return;
    }
    if (counter === textLength) {
      // console.log('Timer Completed!');
      if (sub) sub.unsubscribe();

      if (this.totalTextCounter < this.totalText.length) {
        const timeout = setTimeout(() => {
          if (this.isFinished) return;
          this.totalTextCounter++;
          this.runNextTimer(this.totalTextCounter);
        }, 1000);

      }
    }
  }

  runNextTimer(count: number): void {
    if (this.isFinished) {

      return;
    }
    const t: Observable<number> = timer(0, this.typingLetterInterval);
    const allText: string = this.totalText[count];
    if(!allText) {
      this.isTypingFinished.emit(true);
      return;
    }
    let tempText1: string = allText;
    const timerLengthTotal: number = Number(this.totalText[count]?.length);
    this.textFilled[count] = '';
    let counter: number = 0;
    let timerLeft;
    const sub: Subscription = t.subscribe(val => {
      this.allSubscriptions.push(sub);
      counter++;
      timerLeft = timerLengthTotal - (timerLengthTotal - counter);
      this.textFilled[count] = tempText1.substring(0, timerLeft);
      this.checkTimerComplete(counter, allText.length, sub);
    });
  }

  ngOnDestroy(): void {
    this.allSubscriptions.forEach((el: Subscription) => el.unsubscribe());
  }

}
