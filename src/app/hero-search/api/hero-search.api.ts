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

export class HeroSearchApi {

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

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
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
}
