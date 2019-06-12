import { Action } from '@ngrx/store'
import { User } from '../../models/tutorial.model'
import * as TutorialActions from '../actions/tutorial.actions'

// Section 1
const initialState= {
  user: null
}

export function reducer(state: User = initialState.user, action: TutorialActions.Actions) {

  switch(action.type) {
    case TutorialActions.SET_USER:
      let rrr =  {...state,user:action.payload};
      debugger
          return rrr


    default:
      return state;
  }
}
