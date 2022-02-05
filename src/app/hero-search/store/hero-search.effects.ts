import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects"
import {map, switchMap} from "rxjs/operators";
import {of} from "rxjs";


import {Hero} from "../../hero";
import {HeroSearchApi} from "../api/hero-search.api";
import {ESearchHeroesActions, GET_SEARCH_HEROES_REQUEST, SET_SEARCH_HEROES} from "./hero-search.actions";

@Injectable()
export class HeroSearchEffects {

  constructor(private actions$: Actions,
              private heroSearchService: HeroSearchApi) {
  }

  getSearchHeroes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<GET_SEARCH_HEROES_REQUEST>(ESearchHeroesActions.GET_SEARCH_HEROES_REQUEST),
      map(action => action.payload),
      switchMap((heroName:string) => this.heroSearchService.searchHeroes(heroName).pipe(
        switchMap((heroes: Hero[]) => {
          return of(new SET_SEARCH_HEROES(heroes));
        }))))
  })




}
