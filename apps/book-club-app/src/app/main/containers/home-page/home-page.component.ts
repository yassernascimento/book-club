import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { ClubStateFacade } from '../../../club/state'

@Component({
  providers: [ClubStateFacade],
  selector: 'book-club-home-page',
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  public constructor(
    private router: Router,
    public clubState: ClubStateFacade
  ) {}

  public ngOnInit(): void {
    this.clubState.searchClubs()
  }

  public onClubSelect(): void {
    this.router.navigateByUrl('/club')
  }
}
