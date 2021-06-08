import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Subscription } from 'rxjs'

import { ClubSearchPayload } from '../../state'
import { genres } from '@book-club/models'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'book-club-club-search',
  styleUrls: ['./club-search.component.scss'],
  templateUrl: './club-search.component.html',
})
export class ClubSearchComponent implements OnDestroy, OnInit {
  @Output() public search = new EventEmitter<ClubSearchPayload>()

  public genres = genres
  public form: FormGroup = new FormGroup({})
  private subscriptions: Subscription[] = []

  public constructor(private formBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this.formBuilder.group({ genres: [], name: [] })

    this.subscriptions.push(
      this.form.valueChanges.subscribe((formState: ClubSearchPayload) =>
        this.search.emit(formState)
      )
    )
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe())
  }
}
