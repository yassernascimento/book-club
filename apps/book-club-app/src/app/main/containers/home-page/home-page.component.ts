import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'

import { ClubSearchPayload, ClubStateFacade } from '../../../club/state'
import { ClubSummaryComponent } from '../../../club/containers'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ClubStateFacade],
  selector: 'book-club-home-page',
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  public MY_CLUBS = []

  public constructor(
    private dialog: MatDialog,
    private router: Router,
    public clubState: ClubStateFacade
  ) {}

  public ngOnInit(): void {
    this.clubState.searchMyClubs()
  }

  public onClubSearchUpdate(payload: ClubSearchPayload): void {
    this.clubState.searchClubs(payload)
  }

  public onClubSelect(): void {
    this.dialog.open(ClubSummaryComponent, { width: '65%' })
  }

  public goToClub(): void {
    this.router.navigate(['/club'])
  }
}
