import {Injectable} from '@angular/core';
import {Hero} from '../../hero';
import {HEROES} from '../../mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from '../../message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {Store} from "@ngrx/store";

// import {AddHero, DELETE_HEROES, SET_HEROES} from "./app/heroes/store/heroes.actions";

@Injectable({
  providedIn: 'root'
})

export class HeroApi {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private store: Store,
    private http: HttpClient,
    private messageService: MessageService) {
  }

  private heroesUrl = 'api/heroes';  // URL to web api
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes() {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      )

  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number) {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero')),
    )
  }

  addHero(hero: Hero) {
    return  this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    )

  }

  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** PUT: update the hero on the server */
  // updatHero(hero: Hero): Observable<any> {
  //   return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${hero.id}`)),
  //     catchError(this.handleError<any>('updateHero'))
  //   );
  // }

  /** GET hero by id. Will 404 if id not found */
  // getHero(id: number): Observable<Hero> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.get<Hero>(url).pipe(
  //     tap(_ => this.log(`fetched hero id=${id}`)),
  //     catchError(this.handleError<Hero>(`getHero id=${id}`))
  //   );
  // }
}
