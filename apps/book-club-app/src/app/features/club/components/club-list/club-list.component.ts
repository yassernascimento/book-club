import {
  // ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core'

import { IClub } from '@book-club/models'

@Component({
  // changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-club-list',
  styleUrls: ['./club-list.component.scss'],
  templateUrl: './club-list.component.html',
})
export class ClubListComponent implements OnChanges {
  @Input() public title = 'No Title Provided'
  @Input() public clubs: IClub[] = []
  @Input() public loading = false
  @Output() public cardClick = new EventEmitter<void>()

  public constructor(private ref: ChangeDetectorRef) {}

  public trackClub(index: number, club: IClub): string {
    return club.id
  }

  /* For some unknown reason has been quite difficult to propagate changes to club cards */
  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.clubs) {
      this.ref.detectChanges()
    }
  }

  public get hasClubs(): boolean {
    return this.clubs.length > 0
  }
}
