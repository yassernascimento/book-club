import {
  AfterContentInit,
  // ChangeDetectionStrategy,
  Component,
  ContentChildren,
  OnDestroy,
  QueryList,
} from '@angular/core'
import { Subscription } from 'rxjs'

import { CarouselItemDirective } from './carousel-item.directive'

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-carousel',
  styleUrls: ['./carousel.component.scss'],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(CarouselItemDirective)
  private items: QueryList<CarouselItemDirective>

  private subscriptions: Subscription[] = []
  public page = 1
  public readonly slotsNumber = 4
  public disablePrevButton = true
  public disableNextButton = true

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

    this.disablePrevButton = this.page === 1
    this.disableNextButton = this.items.length <= this.page * this.slotsNumber
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }
}
