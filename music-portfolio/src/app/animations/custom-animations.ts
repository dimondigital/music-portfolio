import {animate, query, state, style, transition, trigger} from "@angular/animations";

export function showAndHide() {
  return trigger('showAndHide', [
    state('*', style({
      opacity: 1
    })),
    state('void', style({
      opacity: 0
    })),
    transition('* => void', animate('333ms cubic-bezier(0.080, 0.720, 0.410, 0.860)')),
  ]);
}

export function show1() {
  return trigger('show1', [
    state('*', style({
      opacity: 1,
      filter: 'blur(0)',
      transform: 'translate(0px, 0%)'
    })),
    state('void', style({
      opacity: 0,
      filter: 'blur(0.9)',
      transform: 'translate(0, -20px)'
    })),
    transition('void => *', animate('2000ms 333ms cubic-bezier(0.080, 0.720, 0.410, 0.860)')),
  ]);
}

export function show2() {
  return trigger('show2', [
    state('*', style({
      opacity: 1,
      filter: 'blur(0)',
      transform: 'translate(0px, 0%)'
    })),
    state('void', style({
      opacity: 0,
      filter: 'blur(0.9)',
      transform: 'translate(0, -20px)'
    })),
    transition('void => *', animate('2000ms 666ms cubic-bezier(0.080, 0.720, 0.410, 0.860)')),
  ]);
}

export function show3() {
  return trigger('show3', [
    state('*', style({
      opacity: 1,
      filter: 'blur(0)',
      transform: 'translate(0px, 0%)'
    })),
    state('void', style({
      opacity: 0,
      filter: 'blur(0.9)',
      transform: 'translate(0, -20px)'
    })),
    transition('void => *', animate('1000ms 999ms cubic-bezier(0.080, 0.720, 0.410, 0.860)')),
  ]);
}

export function hide1() {
  return trigger('hide1', [
    state('*', style({
      opacity: 1,
      filter: 'blur(0)',
      transform: 'translate(0px, 0%)'
    })),
    state('void', style({
      opacity: 0,
      filter: 'blur(0.9)',
      transform: 'translate(0, -20px)'
    })),
    transition('* => void', animate('0ms 120ms cubic-bezier(0.080, 0.720, 0.410, 0.860)')),
  ]);
}

export function hide2() {
  return trigger('hide2', [
    state('*', style({
      opacity: 1,
      filter: 'blur(0)',
      transform: 'translate(0px, 0%)'
    })),
    state('void', style({
      opacity: 0,
      filter: 'blur(0.9)',
      transform: 'translate(0, -20px)'
    })),
    transition('* => void', animate('120ms 250ms cubic-bezier(0.080, 0.720, 0.410, 0.860)')),
  ]);
}

export function hide3() {
  return trigger('hide3', [
    state('*', style({
      opacity: 1,
      filter: 'blur(0)',
      transform: 'translate(0px, 0%)'
    })),
    state('void', style({
      opacity: 0,
      filter: 'blur(0.9)',
      transform: 'translate(0, -20px)'
    })),
    transition('* => void', animate('370ms 333ms cubic-bezier(0.080, 0.720, 0.410, 0.860)')),
  ]);
}

export function backgroundRemove() {
  return trigger('backgroundRemove', [
    state('*', style({
      opacity: '*'
    })),
    state('void', style({
      opacity: 0
    })),
    transition('* => void', animate('703ms 500ms cubic-bezier(0.080, 0.720, 0.410, 0.860)')),
  ]);
}


export function backgroundAdd() {
  return trigger('backgroundAdd', [
    state('*', style({
      background: '#ffffd2',
      opacity: 0
    })),
    state('newBgColor', style({
      background: 'linear-gradient(to top, #106757, #109f4c)',
      opacity: 1
    })),
    transition('* => newBgColor', animate('2000ms 1998ms cubic-bezier(0.080, 0.720, 0.410, 0.860)')),
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
