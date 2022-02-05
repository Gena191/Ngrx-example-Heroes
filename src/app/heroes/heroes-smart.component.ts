import {Component} from '@angular/core';
import {Hero} from '../hero';
import {select, Store} from "@ngrx/store";
import {heroesSelector} from "./store/heroes.reducers";
import {Observable} from "rxjs";

@Component({
  selector: 'heroes-smart',
  template: `
    <app-heroes
      [heroes]="heroes$ | async"
    ></app-heroes>`
  ,
  styleUrls: ['./heroes.component.css']
})
export class HeroesSmartComponent {
  heroes$: Observable<Hero[]> | undefined

  constructor(private store: Store) {
    this.heroes$ = this.store.pipe(select(heroesSelector))
  }

}
