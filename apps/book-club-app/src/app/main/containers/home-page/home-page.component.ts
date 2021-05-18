import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'book-club-home-page',
  styleUrls: ['./home-page.component.scss'],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  public constructor(private router: Router) {}

  public onClubSelect(): void {
    this.router.navigateByUrl('/club')
  }
}
