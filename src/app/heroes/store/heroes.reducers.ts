import {Hero} from "../../hero";
import {EHeroesActions, HeroActions} from "./heroes.actions";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {HeroesService} from "../service/heroes.service";

export interface IHeroState {
  heroes: Hero[]
}

export const initialHeroState: IHeroState = {
  heroes: []
};

export const heroesReducer = (
  state = initialHeroState,
  action: HeroActions
): { heroes: Hero[] } => {
  switch (action.type) {

    case EHeroesActions.SET_HEROES: {
      return {
        ...state,
        heroes: action.payload
      };
    }

    case EHeroesActions.DELETE_HEROES: {
      return {
        ...state,
        heroes: HeroesService.deleteHero(state.heroes, action.payload)
      };
    }

    case EHeroesActions.ADD_HERO: {
      return {
        ...state,
        heroes: [...state.heroes, action.payload ]
      };
    }

    default:
      return state;
  }
}
export const featureSelector = createFeatureSelector<IHeroState>('heroes');
export const heroesSelector = createSelector(
  featureSelector,
  state => state.heroes
);
