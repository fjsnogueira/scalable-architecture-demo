import {initialState} from '../store/game.store';
import {Action} from '@ngrx/store';
import {COMPLETE_GAME, INVALID_GAME, START_GAME, GAME_PROGRESS} from '../actions/game.actions';
import {fromJS} from 'immutable';
import {PARTNER_PROGRESS, PARTNER_COMPLETED} from '../+multi-player/actions/p2p-game.actions';

export const gamesReducer = (state: any = initialState.get('games'), action: Action) => {
  switch (action.type) {
    case COMPLETE_GAME:
      state = state.push(fromJS(action.payload));
    break;
  }
  return state;
};

export const gameReducer = (state: any = initialState.get('game'), action: Action) => {
  switch (action.type) {
    case START_GAME:
      state = fromJS({});
    break;
    case INVALID_GAME:
      state = state.set('invalid', true);
    break;
    case GAME_PROGRESS:
      state = state.set('currentText', action.payload.text);
    break;
  }
  return state;
};

// Can't move to +multi-player yet because of `provideStore`.
export const p2pGameReducer = (state: any = initialState.get('p2pGame'), action: Action) => {
  switch (action.type) {
    case START_GAME:
      state = fromJS({});
    break;
    case PARTNER_PROGRESS:
      state = state.set('partnerProgress', action.payload.text);
    break;
    case PARTNER_COMPLETED:
      state = state.set('partnerCompleted', true);
    break;
  }
  return state;
};
