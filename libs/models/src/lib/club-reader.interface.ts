export enum ClubRole {
  MEMBER = 'MEMBER',
  ADM = 'ADM',
}

export interface IClubReader {
  id?: string
  club_id: string
  reader_id: string
  role: ClubRole
}
