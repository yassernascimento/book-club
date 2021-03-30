import { IClub } from '@book-club/models'
import { Injectable } from '@nestjs/common'

import { Club } from '.'

@Injectable()
export class ClubService {
  public create(club: IClub): Promise<Club> {
    return Club.create(club)
  }
}
