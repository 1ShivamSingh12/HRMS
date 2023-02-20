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

  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate('400ms ease-in', style({ transform: 'translateY(0%)' })),
  ]),
  transition(':leave', [
    animate('400ms ease-in', style({ transform: 'translateY(-100%)' })),
  ]),
]);

