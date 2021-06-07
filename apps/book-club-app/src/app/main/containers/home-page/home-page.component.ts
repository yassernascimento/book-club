import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Router } from '@angular/router'

import { ClubStateFacade } from '../../../club/state'
import { ClubSummaryComponent } from '../../../club/containers'

@Component({
  providers: [ClubStateFacade],
  selector: 'book-club-home-page',
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  public MY_CLUBS = new Array(8).fill({})

  public constructor(
    private dialog: MatDialog,
    private router: Router,
    public clubState: ClubStateFacade
  ) {}

  public ngOnInit(): void {
    this.clubState.searchClubs()
  }

  public onClubSelect(): void {
    this.dialog.open(ClubSummaryComponent, { width: '65%' })
  }

  public goToClub(): void {
    this.router.navigate(['/club'])
  }
}
