import {Component, Input, OnInit} from '@angular/core';

import { Hero } from '../hero';
import {Store} from "@ngrx/store";
import {ADD_HERO_REQUEST, DELETE_HEROES_REQUEST} from "./store/heroes.actions";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Input()
  heroes!: Hero[] |  null;

  constructor( private store: Store ) { }

  ngOnInit(): void {

  }

  add(name: string): void {
   if (!name) { return; }
      this.store.dispatch(new ADD_HERO_REQUEST(name));
 }
  delete(id: number): void {
   this.store.dispatch(new DELETE_HEROES_REQUEST(id));
  }
}
