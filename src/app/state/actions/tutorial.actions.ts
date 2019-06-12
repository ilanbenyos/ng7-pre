import { Action } from '@ngrx/store'
import { User } from '../../models/tutorial.model'

export const SET_USER = '[USER] Set';

// Section 3
export class setUser implements Action {
  readonly type = SET_USER
  constructor(public payload: User) {}
}


// Section 4
export type Actions = setUser
