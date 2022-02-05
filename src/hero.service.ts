// import {Injectable} from '@angular/core';
// import {Hero} from './app/hero';
// import {HEROES} from './app/mock-heroes';
// import {Observable, of} from 'rxjs';
// import {MessageService} from './app/message.service';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {catchError, map, tap} from 'rxjs/operators';
// import {Store} from "@ngrx/store";
// import {ADD_HERO, DELETE_HEROES, SET_HEROES} from "./app/heroes/store/heroes.actions";
//
// @Injectable({
//   providedIn: 'root'
// })
//
// export class HeroService {
//
//   httpOptions = {
//     headers: new HttpHeaders({'Content-Type': 'application/json'})
//   };
//
//
//   searchHeroes(term: string): Observable<Hero[]> {
//     if (!term.trim()) {
//       // if not search term, return empty hero array.
//       return of([]);
//     }
//     return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
//       tap(x => x.length ?
//         this.log(`found heroes matching "${term}"`) :
//         this.log(`no heroes matching "${term}"`)),
//       catchError(this.handleError<Hero[]>('searchHeroes', []))
//     );
//   }
//
//    constructor(
//     private store: Store,
//     private http: HttpClient,
//     private messageService: MessageService) {
//   }
//
//   private heroesUrl = 'api/heroes';  // URL to web api
//   private log(message: string) {
//     this.messageService.add(`HeroService: ${message}`);
//   }
//
//   /** GET hero by id. Will 404 if id not found */
//   getHero(id: number): Observable<Hero> {
//     const url = `${this.heroesUrl}/${id}`;
//     return this.http.get<Hero>(url).pipe(
//       tap(_ => this.log(`fetched hero id=${id}`)),
//       catchError(this.handleError<Hero>(`getHero id=${id}`))
//     );
//   }
// }
