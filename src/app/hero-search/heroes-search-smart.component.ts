import {Component} from '@angular/core';
import {Hero} from '../hero';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {searchHeroesSelector} from "./store/hero-search.reducer";

@Component({
  selector: 'heroes-smart',
  template:`
    <app-hero-search
      [heroes]="heroes$ | async"
    ></app-hero-search>`
  ,
  styleUrls: ['./hero-search.component.css']
})
export class HeroesSearchSmartComponent {
  heroes$: Observable<Hero[]> | undefined

  constructor(private store: Store) {
    this.heroes$ = this.store.pipe(select(searchHeroesSelector))
  }

}
