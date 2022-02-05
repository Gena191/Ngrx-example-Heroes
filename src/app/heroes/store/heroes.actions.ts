import { Action } from '@ngrx/store'

import { Hero } from '../../hero'

export enum EHeroesActions {
  SET_HEROES = '[Hero] SET_HEROES',
  GET_HEROES_REQUEST = '[Hero] GET_HEROES_REQUEST',
  DELETE_HEROES = '[Hero] DELETE_HEROES',
  DELETE_HEROES_REQUEST = '[Hero] DELETE_HEROES_REQUEST',
  ADD_HERO ='[Hero] ADD_HERO',
ADD_HERO_REQUEST ='[Hero] ADD_HERO_REQUEST'
}

export class GET_HEROES_REQUEST implements Action {
  public readonly type = EHeroesActions.GET_HEROES_REQUEST;
}
export class SET_HEROES implements Action {
  public readonly type = EHeroesActions.SET_HEROES;

  constructor(public payload: Hero[]) {}
}

export class DELETE_HEROES implements Action {
  public readonly type = EHeroesActions.DELETE_HEROES;

  constructor(public payload: number) {}
}
export class DELETE_HEROES_REQUEST implements Action {
  public readonly type = EHeroesActions.DELETE_HEROES_REQUEST;

  constructor(public payload: number) {}
}

export class ADD_HERO implements Action {
  public readonly type = EHeroesActions.ADD_HERO;

  constructor(public payload: Hero) {}
}
export class ADD_HERO_REQUEST implements Action {
  public readonly type = EHeroesActions.ADD_HERO_REQUEST;

  constructor(public payload: string) {}
}

export type HeroActions = SET_HEROES | DELETE_HEROES | ADD_HERO | ADD_HERO_REQUEST;
