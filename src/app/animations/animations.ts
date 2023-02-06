import {
  animation,
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
} from '@angular/animations';

export const transAnimation = animation([
  style({
    height: '{{ height }}',
    opacity: '{{ opacity }}',
    backgroundColor: '{{ backgroundColor }}',
  }),
  animate('{{ time }}'),
]);

// Routable animations
export const slideInAnimation = trigger('routeAnimations', [
  // transition(':enter' , [
  //   style({position: 'relative' }),
  //   animate(1000 , style({left : '100%'})),
  // ]),
  // transition('void=>*' , [
  //   style({ position: 'relative' }),
  //   animate('800ms ease-out', style({left : '100%'})),
  // ]),

  // transition(':leave' , [
  //   style({position: 'relative' }),
  //   animate('800ms ease-out' , style({left : '0%'})),
  // ])
  transition('void => *', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }),
    ]),
    // query(':enter', [style({ left: '100%' })]),
    // query(':leave', animateChild()),
    // group([
    //   query(':leave' , [animate('0ms ease-out', style({ left: '100%' }))]),
    //   query(':enter', [animate('800ms ease-out', style({ left: '0%' }))]),
    // ]),
    // query(':enter', animateChild()),
  ]),
]);
