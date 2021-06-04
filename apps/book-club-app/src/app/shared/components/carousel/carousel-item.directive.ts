import { Directive, TemplateRef, ViewContainerRef } from '@angular/core'

// eslint-disable-next-line @angular-eslint/directive-selector
@Directive({ selector: '[carouselItem]' })
export class CarouselItemDirective {
  public constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef
  ) {}

  public show(): void {
    this.viewContainer.createEmbeddedView(this.templateRef)
  }

  public hide(): void {
    this.viewContainer.clear()
  }
}
