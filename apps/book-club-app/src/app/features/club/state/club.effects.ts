import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Observable, of } from 'rxjs'
import { delay, map, switchMap } from 'rxjs/operators'
import { Injectable } from '@angular/core'

import { IClub, clubMock } from '@book-club/models'
import {
  clubsFound,
  myClubsFound,
  searchClubs,
  searchMyClubs,
} from './club.actions'
import { ClubSearchPayload } from '.'

const ROMANCE_BOOK_COVER =
  'https://i.pinimg.com/564x/74/f6/fb/74f6fb1c0a1ff4bb468c272155e22ed8.jpg'
const HORROR_BOOK_COVER =
  'https://i.pinimg.com/236x/13/a5/34/13a5341553af3b58e079a5b5b490c7f7.jpg'
const SCIFI_BOOK_COVER =
  'https://i.pinimg.com/236x/9f/99/9e/9f999e5992a8a55c4ac20e47e3521045.jpg'

const SAMPLE_DATA: IClub[] = [
  clubMock.build({
    cover: ROMANCE_BOOK_COVER,
    genres: ['Romance'],
    name: 'Romance Club',
  }),
  clubMock.build({
    cover: HORROR_BOOK_COVER,
    genres: ['Terror', 'Mistério'],
    name: 'República do Medo',
  }),
  clubMock.build({
    cover: SCIFI_BOOK_COVER,
    genres: ['Ficção Científica', 'Mistério'],
    name: 'Sci-fi Club',
  }),
  ...clubMock.buildList(12),
]

const SMALLER_SAMPLE_DATA: IClub[] = [
  SAMPLE_DATA[0],
  SAMPLE_DATA[1],
  SAMPLE_DATA[5],
]

const isSubstring = (nameA: string, nameB: string | null): boolean => {
  if (!nameB) return true
  return nameA.toLowerCase().includes(nameB.toLowerCase())
}

const hasAnyItemInCommon = <T>(listA: T[], listB: T[] | null): boolean => {
  if (!listB || listB.length === 0) return true
  return listA.some((g) => listB.includes(g))
}

const filterClubs = (clubs: IClub[], payload: ClubSearchPayload): IClub[] => {
  return clubs.filter(
    (club) =>
      isSubstring(club.name, payload.name) &&
      hasAnyItemInCommon(club.genres, payload.genres)
  )
}

@Injectable()
export class ClubEffects {
  public constructor(private actions$: Actions) {}

  public loadClubs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchClubs),
      switchMap(({ payload }) =>
        this.fetchClubs$(payload).pipe(map((clubs) => clubsFound({ clubs })))
      )
    )
  )

  public loadMyClubs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(searchMyClubs),
      switchMap(() =>
        this.fetchMyClubs$().pipe(map((clubs) => myClubsFound({ clubs })))
      )
    )
  )

  private fetchClubs$(payload: ClubSearchPayload): Observable<IClub[]> {
    return of(SAMPLE_DATA).pipe(
      delay(1000),
      map((sampleClubs) => filterClubs(sampleClubs, payload))
    )
  }

  private fetchMyClubs$(): Observable<IClub[]> {
    return of(SMALLER_SAMPLE_DATA).pipe(delay(500))
  }
}
