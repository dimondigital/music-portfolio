import {animate, query, state, style, transition, trigger} from "@angular/animations";

export function show1() {
  return trigger('show1', [
    state('*', style({
      opacity: 1
    })),
    state('void', style({
      opacity: 0
    })),
    transition('void => *', animate('2000ms 333ms cubic-bezier(0.080, 0.720, 0.410, 0.860)')),
  ]);
}

export function show2() {
  return trigger('show2', [
    state('*', style({
      opacity: 1
    })),
    state('void', style({
      opacity: 0
    })),
    transition('void => *', animate('2000ms 666ms cubic-bezier(0.080, 0.720, 0.410, 0.860)')),
  ]);
}

export function show3() {
  return trigger('show3', [
    state('*', style({
      opacity: 1
    })),
    state('void', style({
      opacity: 0
    })),
    transition('void => *', animate('1000ms 999ms cubic-bezier(0.080, 0.720, 0.410, 0.860)')),
  ]);
}

export function hide1() {
  return trigger('hide1', [
    state('*', style({
      opacity: 1
    })),
    state('hide', style({
      opacity: 0
    })),
    transition('* => hide', animate('1000ms 333ms cubic-bezier(0.080, 0.720, 0.410, 0.860)')),
  ]);
}

export function hide2() {
  return trigger('hide2', [
    state('*', style({
      opacity: 1
    })),
    state('hide', style({
      color: "#ff00ff",
      opacity: 0
    })),
    transition('* => hide', animate('1000ms 666ms cubic-bezier(0.080, 0.720, 0.410, 0.860)')),
  ]);
}

export function hideGroup() {
  return trigger('hideGroup', [
    transition(':leave', [ // Transition from any state to the void state
      // Step 1: Define the initial state for all elements (visible)
      query(':enter', style({ opacity: 1 }), { optional: true }),

      // Step 2: Hide each element one by one with a delay between each element
      query(':leave', [
        animate('500ms ease', style({ opacity: 0 })),
        animate(500, style({ display: 'none' })), // Hide the element by setting display to 'none'
      ], { optional: true }),
    ]),
  ])
}
