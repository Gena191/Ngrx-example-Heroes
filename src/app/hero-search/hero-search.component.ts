import {Component, Input} from '@angular/core';
import {ADD_HERO_REQUEST} from "../heroes/store/heroes.actions";
import {Store} from "@ngrx/store";
import {Hero} from "../hero";
import {GET_SEARCH_HEROES_REQUEST} from "./store/hero-search.actions";


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent {
  @Input()
  heroes!: Hero[] |  null;

  constructor(private  store: Store) {
  }

  search(heroName: string): void {
    this.store.dispatch(new GET_SEARCH_HEROES_REQUEST(heroName))

  }


}
