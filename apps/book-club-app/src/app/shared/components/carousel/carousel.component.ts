import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  OnDestroy,
  QueryList,
} from '@angular/core'
import { Subscription } from 'rxjs'

import { CarouselAnimation } from './carousel.animations'
import { CarouselItemDirective } from './carousel-item.directive'

@Component({
  animations: [CarouselAnimation.animation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-carousel',
  styleUrls: ['./carousel.component.scss'],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(CarouselItemDirective)
  private items!: QueryList<CarouselItemDirective>

  public play = 0

  private subscriptions: Subscription[] = []
  public page = 1
  public readonly slotsNumber = 4
  public prevButtonDisabled = true
  public nextButtonDisabled = true

  public constructor(private ref: ChangeDetectorRef) {}

  public ngAfterContentInit(): void {
    this.updateList()
    this.subscriptions.push(
      this.items.changes.subscribe(() => this.updateList())
    )
  }

  public nextPage(): void {
    this.page++
    this.updateList()
  }

  public previousPage(): void {
    this.page--
    this.updateList()
  }

  private updateList(): void {
    const offset = 1
    const pageEnd = this.page * this.slotsNumber - offset
    const pageInit = pageEnd + offset - this.slotsNumber

    this.items.forEach((item, index) => {
      const isOnPage = index >= pageInit && index <= pageEnd
      isOnPage ? item.show() : item.hide()
    })

    this.updateButtonsState()
    if (this.items.length > 0) {
      this.animate()
    }
  }

  private animate(): void {
    this.play = CarouselAnimation.play()
  }

  private updateButtonsState(): void {
    this.prevButtonDisabled = this.page === 1
    this.nextButtonDisabled = this.items.length <= this.page * this.slotsNumber
    this.ref.markForCheck()
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }
}
