import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Observable, of } from 'rxjs'
import { delay, map, mergeMap } from 'rxjs/operators'
import { Injectable } from '@angular/core'

import { clubsFound, searchClubs } from './club.actions'
import { IClub } from '@book-club/models'

const SAMPLE_DATA = new Array(4).fill({})

@Injectable()
export class ClubEffects {
  public constructor(private actions$: Actions) {}

  private fetchClubs$: Observable<IClub[]> = of(SAMPLE_DATA).pipe(delay(1000))

  public loadClubs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchClubs),
      mergeMap(() =>
        this.fetchClubs$.pipe(map((clubs) => clubsFound({ clubs })))
      )
    )
  )
}
