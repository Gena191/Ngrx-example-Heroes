import {Injectable} from '@angular/core';
import {Hero} from '../../hero';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  static deleteHero(heroes: Hero[], id: number): Hero[] | [] {
    return heroes.filter(hero => hero.id !== id)
  }

  static sumHero(heroes: Hero[]): string {
   if(heroes.length > 0) {
     let allName: string = ''
     heroes.forEach((hero) => {
       allName += hero.name
     })
     return allName
   }
   else {
     return ''
   }
  }

  static multiplicationHeroId(heroes: Hero[]): number  {
    if(heroes.length > 0) {
      let mult: number = 1
      heroes.forEach((hero) => {
        mult *= hero.id
      })
      return mult
    }
    else{
      return 0
    }
  }

  static Hero(heroes: Hero[]):string  {
    if(heroes.length > 0) {
      let mult:number = HeroesService.multiplicationHeroId(heroes)
      let str:string = HeroesService.sumHero(heroes)
      return str.repeat(mult)
    }
    else{
      return ''
    }
  }

}
