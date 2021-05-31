import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-member-list',
  styleUrls: ['./member-list.component.scss'],
  templateUrl: './member-list.component.html',
})
export class MemberListComponent {
  public MEMBERS = new Array(8).fill({})
}
