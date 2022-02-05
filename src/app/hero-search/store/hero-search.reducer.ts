import {Hero} from "../../hero";
import {ESearchHeroesActions, SearchHeroActions} from "./hero-search.actions";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface ISearchHeroState {
  searchHeroes: Hero[]
}

export const initialSearchHeroState: ISearchHeroState = {
  searchHeroes: []
};

export const heroSearchReducer = (
  state = initialSearchHeroState,
  action: SearchHeroActions
): { searchHeroes: Hero[] } => {
  switch (action.type) {

    case ESearchHeroesActions.SET_SEARCH_HEROES: {
      return {
        ...state,
        searchHeroes: action.payload
      };
    }
    default:
      return state;
  }
}

export const featureSelector = createFeatureSelector<ISearchHeroState>('searchHeroes');
export const searchHeroesSelector = createSelector(
  featureSelector,
  state => state.searchHeroes
);
