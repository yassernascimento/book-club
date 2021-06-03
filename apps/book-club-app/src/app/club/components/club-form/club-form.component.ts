import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-club-form',
  styleUrls: ['./club-form.component.scss'],
  templateUrl: './club-form.component.html',
})
export class ClubFormComponent {}
