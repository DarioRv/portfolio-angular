import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

export const expandListAnim = trigger('expandListAnim', [
  transition(':enter', []), // requerido para SSR

  transition('* => *', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
          transform: 'scale(0.96)',
        }),
        stagger(80, [
          animate(
            '280ms cubic-bezier(0.22, 0.61, 0.36, 1)',
            style({
              opacity: 1,
              transform: 'scale(1)',
            }),
          ),
        ]),
      ],
      { optional: true },
    ),

    query(
      ':leave',
      [
        stagger(60, [
          animate(
            '180ms ease-in',
            style({
              opacity: 0,
              transform: 'scale(0.98)',
            }),
          ),
        ]),
      ],
      { optional: true },
    ),
  ]),
]);

export const imageFade = trigger('imageFade', [
  transition('* => *', [
    style({ opacity: 0 }),
    animate('300ms ease-in', style({ opacity: 1 })),
  ]),
]);
