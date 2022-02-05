import {HeroesService} from "./heroes.service";

describe('heroes service', () => {

  beforeEach(() => {

  })
  it('filter hero by id', () => {
    const filter = HeroesService.deleteHero([
      {id: 1, name: 'abc'}
      , {id: 2, name: 'ewrwe'}
      , {id: 3, name: 'abcrwerwer'}
      , {id: 4, name: 'abcwrwer'}
    ], 2)
    expect(filter).toEqual([
      {id: 1, name: 'abc'}
      , {id: 3, name: 'abcrwerwer'}
      , {id: 4, name: 'abcwrwer'}
    ])
  })

  it('sum heroes name', () => {
    const sumName = HeroesService.sumHero([
      {id: 1, name: 'a'}
      , {id: 2, name: 'b'}
      , {id: 3, name: 'c'}
      , {id: 4, name: 'd'}
    ])
    expect(sumName).toBe('abcd')
  })
  it('multi heroes id', () =>{
    const mult = HeroesService.multiplicationHeroId([ ])
    expect(mult).toBe(0)
  })

});
