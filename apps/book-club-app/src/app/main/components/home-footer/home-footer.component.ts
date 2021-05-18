import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-home-footer',
  styleUrls: ['./home-footer.component.scss'],
  templateUrl: './home-footer.component.html',
})
export class HomeFooterComponent {}
