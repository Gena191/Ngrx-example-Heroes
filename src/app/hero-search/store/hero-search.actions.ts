import { Action } from '@ngrx/store'

import { Hero } from '../../hero'

export enum ESearchHeroesActions {
  SET_SEARCH_HEROES = '[Hero] SET_SEARCH_HEROES',
  GET_SEARCH_HEROES_REQUEST = '[Hero] GET_SEARCH_HEROES_REQUEST',

}

export class GET_SEARCH_HEROES_REQUEST implements Action {
  public readonly type = ESearchHeroesActions.GET_SEARCH_HEROES_REQUEST;
  constructor(public payload: string) {}
}
export class SET_SEARCH_HEROES implements Action {
  public readonly type = ESearchHeroesActions.SET_SEARCH_HEROES;

  constructor(public payload: Hero[]) {}
}



export type SearchHeroActions = GET_SEARCH_HEROES_REQUEST | SET_SEARCH_HEROES;
