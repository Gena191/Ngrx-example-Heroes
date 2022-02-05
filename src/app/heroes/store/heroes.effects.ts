import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects"
import {map, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {
  ADD_HERO, ADD_HERO_REQUEST,
  DELETE_HEROES,
  DELETE_HEROES_REQUEST,
  EHeroesActions,
  GET_HEROES_REQUEST,
  SET_HEROES
} from "./heroes.actions";
import {HeroApi} from "../api/heroes.api";
import {Hero} from "../../hero";

@Injectable()
export class HeroesEffects {

  constructor(private actions$: Actions,
              private heroService: HeroApi) {
  }

  getHeroes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<GET_HEROES_REQUEST>(EHeroesActions.GET_HEROES_REQUEST),
      switchMap(() => this.heroService.getHeroes().pipe(
        switchMap((heroes: Hero[]) => {
          return of(new SET_HEROES(heroes));
        }))))
  })

  addHero$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<ADD_HERO_REQUEST>(EHeroesActions.ADD_HERO_REQUEST),
      map(action => action.payload),
      switchMap((name: string) => this.heroService.addHero({name} as Hero).pipe(
        switchMap((hero: Hero) => {
          return of(new ADD_HERO(hero));
        })))
    )
  })

  deleteHero$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<DELETE_HEROES_REQUEST>(EHeroesActions.DELETE_HEROES_REQUEST),
      map(action => action.payload),
      switchMap((id: number) => this.heroService.deleteHero(id).pipe(
        switchMap(() => {
          return of(new DELETE_HEROES(id));
        })))
    )
  })


}
