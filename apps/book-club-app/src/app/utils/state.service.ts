import { Action, ActionsSubject } from '@ngrx/store'
import { filter, map, startWith } from 'rxjs/operators'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

type OperationLoadingArgs = { start: Action; end: Action }

@Injectable({ providedIn: 'root' })
export class StateService {
  public constructor(private actions$: ActionsSubject) {}

  public operationLoading({
    start,
    end,
  }: OperationLoadingArgs): Observable<boolean> {
    const [startType, endType] = [start.type, end.type]
    const isLoading = (action: Action): boolean => action.type === startType

    return this.actions$.pipe(
      filter((action) => [startType, endType].includes(action.type)),
      map(isLoading),
      startWith(false)
    )
  }
}
