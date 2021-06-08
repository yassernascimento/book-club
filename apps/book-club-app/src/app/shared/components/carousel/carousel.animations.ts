import { AnimationCurves, AnimationDurations } from '@angular/material/core'
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations'

function* numberGenerator(): Generator<number> {
  let index = 0

  while (true) {
    yield ++index
  }
}

const generator = numberGenerator()
const play = (): number => generator.next().value

const animateTiming = `${AnimationDurations.ENTERING} ${AnimationCurves.ACCELERATION_CURVE}`
const animation = trigger('carouselAnimation', [
  transition(() => true, [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(-5px)' }),
        stagger('40ms', [
          animate(animateTiming, style({ opacity: 1, transform: 'none' })),
        ]),
      ],
      { optional: true }
    ),
  ]),
])

export const CarouselAnimation = { animation, play }
