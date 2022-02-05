import {Component, OnInit} from '@angular/core';

import {Store} from "@ngrx/store";
import {GET_HEROES_REQUEST} from "./heroes/store/heroes.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  constructor(private store: Store) {
  }
  ngOnInit(): void {
   this.store.dispatch(new GET_HEROES_REQUEST())
  }
}
