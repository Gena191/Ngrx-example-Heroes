import {RouterReducerState} from "@ngrx/router-store";

import {IHeroState, initialHeroState} from "../heroes/store/heroes.reducers";
import {initialSearchHeroState, ISearchHeroState} from "../hero-search/store/hero-search.reducer";

export interface IAppState{
  router?:RouterReducerState;
  heroes:IHeroState;
  searchHeroes: ISearchHeroState;
}

export const initialAppState: IAppState = {
  heroes: initialHeroState,
  searchHeroes: initialSearchHeroState
}

export function getInitialstate(): IAppState {
  return initialAppState;
}
