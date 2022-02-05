import { ActionReducerMap } from "@ngrx/store";

import { routerReducer } from "@ngrx/router-store";
import { IAppState } from "./app.state";
import {heroesReducer} from "../heroes/store/heroes.reducers";
import {heroSearchReducer} from "../hero-search/store/hero-search.reducer";

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  heroes: heroesReducer,
  searchHeroes: heroSearchReducer
}
