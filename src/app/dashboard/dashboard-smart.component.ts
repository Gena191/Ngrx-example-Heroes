import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {select, Store} from "@ngrx/store";
import {heroesSelector} from "../heroes/store/heroes.reducers";
import {Observable} from "rxjs";

@Component({
  selector: 'dashboard-smart',
  template: `
    <app-dashboard
      [heroes]="heroes$ | async"
    ></app-dashboard>`
  ,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardSmartComponent {
  heroes$: Observable<Hero[]> | undefined

  constructor(private store: Store) {
    this.heroes$ = this.store.pipe(select(heroesSelector))
  }

  ngOnInit(): void {
  }

  getHeroes(): void {
  }
}
